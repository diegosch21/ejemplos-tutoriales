from django.conf.urls.defaults import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'weather.pages.index'),
    url(r'^solution/.*', 'weather.pages.solution'),
    url(r'^forecast/$', 'weather.forecast.index'),
    url(r'^cities/$', 'weather.cities.views.router', {'id': None}),
    url(r'^cities/(\d+)$', 'weather.cities.views.router'),

    url(r'^admin/', include(admin.site.urls)),
)
