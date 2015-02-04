from django.db import models

class City(models.Model):
    name = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=10)
    
    def __unicode__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = 'Cities'
