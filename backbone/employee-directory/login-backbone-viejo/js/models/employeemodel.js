window.Employee = Backbone.Model.extend({

    urlRoot:"http://localhost/ejemplos/backbone/employee-directory/api-rest-php-login/employees",

    initialize:function () {
        this.reports = new EmployeeCollection();
        this.reports.url =  this.urlRoot + '/' + this.id + '/reports';
    }

});

window.EmployeeCollection = Backbone.Collection.extend({

    model: Employee,

    url:"http://localhost/ejemplos/backbone/employee-directory/api-rest-php-login/employees",
/*
    findByName:function (key) {
        var url = (key == '') ? this.url : this.url + "/search/" + key;
        console.log('findByName: ' + key);
        var self = this;
        $.ajax({
            url:url,
            dataType:"json",
            success:function (data) {
                console.log("search success: " + data.length);
                self.reset(data);
            }
        });
    }
*/
});