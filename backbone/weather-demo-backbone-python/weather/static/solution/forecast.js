Forecast = Backbone.Model.extend({
    sync: function(method, model, options) {
        if (method !== 'read') {
            throw new Error(method + ': not a valid method. Forecast can only fetch data.');
        }
        
        var name = model.get('name');
        
        _.extend(options, {
            url: '/forecast/',
            dataType: 'json',
            data: { location: name }
        });
        
        return $.ajax(options);
    }
});

ForecastView = Backbone.View.extend({
    el: '#forecast',
    
    initialize: function(options) {
        this.tmpl = _.template($('#forecast-template').text());
        this.$('#cityname').val('');
        
        if (this.model) {
            this.setCity(this.model);
        }
    },
    
    render: function() {
        var content = this.tmpl(this.model.get('forecast').attributes);
        
        $(this.el).html(content);
    },
    
    setCity: function(city) {
        var self = this;
        
        self.model = city;
        
        if (city.get('forecast')) {
            return self.render();
        }
        
        var forecast = new Forecast({ name: city.get('name') });
        
        forecast.fetch({
            success: function(model, response) {
                self.model.set({ forecast: model });
                self.render();
            }
        });
    }
});
