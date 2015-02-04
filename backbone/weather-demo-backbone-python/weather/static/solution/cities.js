City = Backbone.Model.extend({
    defaults: function() {
        return {
            name: '',
            postal_code: '',
            forecast: null
        }
    },
    
    fragment: function() {
        return this.get('name').replace(/[,'".]/g, '').replace(/\s/g, '-').toLowerCase();
    }
});

Cities = Backbone.Collection.extend({
    model: City,
    
    url: '/cities/',
    
    findByFragment: function(fragment) {
        return this.find(function(city) {
            return city.fragment() === fragment;
        });
    }
});

ListView = Backbone.View.extend({
    tagName: 'li',
    
    events: {
        'click': 'select'
    },
    
    render: function() {
        $(this.el).html(this.model.get('name'));
        return this;
    },
    
    select: function() {
        this.model.trigger('selected', this.model);
    }
});

FormView = Backbone.View.extend({
    el: '#cityform',
    
    events: {
        'submit': 'addCity',
        'click .btn': 'addCity'
    },
    
    initialize: function(options) {
        this.cities = options.collection;
        $('#cityname').val('');
    },
    
    addCity: function(evt) {
        evt.preventDefault();
        
        var self = this,
            val = $('#cityname').val(),
            forecast = new Forecast({ name: val });
        
        $('#cityname').val('');
        
        forecast.fetch({
            success: function(model) {
                self.cities.create({ name: model.get('forecast_information').city });
            }
        });
        
        return false;
    }
});