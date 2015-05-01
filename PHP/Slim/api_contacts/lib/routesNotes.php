<?php

/* NOTES */
// Returns the notes for the contact with id of :id
$app->get('/contacts/:id/notes', function ($id) use ($app, $log) {
    $contact = \ORM::forTable('contacts')->select('id')->findOne($id);

    if ($contact) {
        $notes = \ORM::forTable('notes')
            ->where('contact_id', $id)->findArray();
        echo json_encode($notes, JSON_PRETTY_PRINT);
        return;
    }

    $app->notFound();
});

// Returns the note with id of :nid for the contact with id of :id
$app->get('/contacts/:id/notes/:nid', function ($id,$note_id) use ($app, $log) {

    $id = filter_var(
        filter_var($id, FILTER_SANITIZE_NUMBER_INT),
        FILTER_VALIDATE_INT
    );

    if (false === $id) {
        throw new ValidationException("Invalid contact ID");
    }

    $note_id = filter_var(
        filter_var($note_id, FILTER_SANITIZE_NUMBER_INT),
        FILTER_VALIDATE_INT
    );

    if (false === $note_id) {
        throw new ValidationException("Invalid note ID");
    }

    $contact = \ORM::forTable('contacts')->select('id')->findOne($id);

    if ($contact) {

        $note = \ORM::forTable('notes')->findOne($note_id);
        
        if ($note) {
            echo json_encode($note->asArray(),JSON_PRETTY_PRINT);
            return;
        }

    }
    $app->notFound();
});

// Adds a new note for the contact with id of :id
$app->post('/contacts/:id/notes', function ($id) use ($app, $log) {
    
    $contact = \ORM::forTable('contacts')->select('id')->findOne($id);

    if ($contact) {
        $body = $app->request()->getBody();
        $errors = $app->validateNote($body);
        
        if (empty($errors)) {
            
            $note = \ORM::for_table('notes')->create();

            $note->set($body);
            $note->contact_id = $id;
            
            if (true === $note->save()) {
                echo json_encode($note->asArray(),JSON_PRETTY_PRINT);
                return;
            } else {
                throw new Exception("Unable to save note");
            }
            
        } else {
            throw new ValidationException("Invalid data",0,$errors);
        }
    }
    $app->notFound();

});

// Updates the note with id if :nid for the contact with id of :id
$app->map('/contacts/:id/notes/:nid', function ($id,$note_id) use ($app, $log) {

    $id = filter_var(
        filter_var($id, FILTER_SANITIZE_NUMBER_INT),
        FILTER_VALIDATE_INT
    );

    if (false === $id) {
        throw new ValidationException("Invalid contact ID");
    }

    $note_id = filter_var(
        filter_var($note_id, FILTER_SANITIZE_NUMBER_INT),
        FILTER_VALIDATE_INT
    );

    if (false === $note_id) {
        throw new ValidationException("Invalid note ID");
    }

    $contact = \ORM::forTable('contacts')
        ->select('id')->findOne($id);
    
    if ($contact) {
        
        $note = \ORM::forTable('notes')->findOne($note_id);
        
        if ($note) {

            $body = $app->request()->getBody();

            $errors = $app->validateNote($body, 'update');
            
            if (empty($errors)) {
                $note->set('body', $body['body']);
                if (true === $note->save()) {
                    
                    echo json_encode(
                        $note->asArray(),
                        JSON_PRETTY_PRINT
                    );
                    return;

                } else {
                    
                    throw new Exception(
                        "Unable to save note"
                    );
                }
            } else {
                throw new ValidationException(
                    "Invalid data",
                    0,
                    $errors
                );

            }

        }
    }
    $app->notFound();
})->via('PUT', 'PATCH');


// Deletes the note with id of :nid for the contact with id of :id
$app->delete('/contacts/:id/notes/:nid', function ($id,$note_id) use ($app, $log) {
    $contact = \ORM::forTable('contacts')
        ->select('id')->findOne($id);

    if ($contact) {

        $note = \ORM::forTable('notes')->findOne($note_id);
        
        if ($note) {
            $note->delete();
            $app->halt(204);
        }

    }

    $app->notFound();
});