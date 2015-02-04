WeatherApp = Backbone.Router.extend({
    routes: {
        ':city' : 'routeToCity'
    },
    
    initialize: function(options) {
        var cities = this.cities = new Cities();

        cities.bind('add', this.renderCity, this);
        cities.bind('reset', this.renderAll, this);
        
        this.forecastView = new ForecastView();
        this.formView = new FormView({ collection: cities });

        cities.fetch({
            success: function() {
                Backbone.history.start({
                    pushState: true,
                    root: '/solution/'
                });
            }
        });
    },
    
    routeToCity: function(name) {
        var city = this.cities.at(0),
            atUrlRoot = true;
        
        if (name && name.length > 0) {
            city = this.cities.findByFragment(name);
            atUrlRoot = false;
        }
        
        if (!city) {
            var forecast = new Forecast({ name: name.replace(/-/g, ' ') }),
                self = this;

            forecast.fetch({
                success: function(model, response) {
                    var city = new City({ name: response.forecast_information.city });
                    self.cities.create(city);
                    self.forecastView.setCity(city);
                }
            });
            
            return;
        }
        
        city.trigger('selected', city, atUrlRoot);
    },
    
    updateURL: function(city, silent) {
        if (silent) {
            return;
        }
        
        this.navigate(city.fragment());
    },
    
    renderCity: function(city) {
        var listView = new ListView({ model: city });
        
        $('#city-list').append(listView.render().el);
        
        city.bind('selected', this.forecastView.setCity, this.forecastView);
        city.bind('selected', this.updateURL, this);
    },
    
    renderAll: function() {
        var cities = this.cities;
        
        $('#city-list').empty();
        
        cities.each(function(city, i) {
            this.renderCity(city);
        }, this);
    }
});
