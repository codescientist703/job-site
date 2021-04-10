from django.contrib import sitemaps
from api.models import Job, Category


class StaticSiteMap(sitemaps.Sitemap):
    priority = '1'
    changefreq = 'always'

    def items(self):
        pages = ['/', '/interview-experiences', '/contribute-your-experience',
                 '/privacy-policy', '/terms-of-use']
        return pages

    def location(self, item):
        return item


class CategorySiteMap(sitemaps.Sitemap):
    priority = '1'
    changefreq = 'always'

    def items(self):
        return Category.objects.all()

    def location(self, obj):
        return '/category/' + obj.name


class JobSiteMap(sitemaps.Sitemap):
    priority = '0.8'
    changefreq = 'daily'

    def items(self):
        return Job.objects.all()

    def lastmod(self, obj):
        return obj.date

    def location(self, obj):
        return '/' + obj.slug


sitemaps = {
    'static': StaticSiteMap,
    'category': CategorySiteMap,
    'job': JobSiteMap,
}
