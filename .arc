@app
enhance-mentionable

@plugins
enhance/arc-plugin-enhance

# @events # bugged on Begin.com rn
# new-webmention
#   src jobs/events/new-webmention

@tables
webmentions
  id *String

@tables-indexes
webmentions
  targetPath *String

@begin
appID BM5M7K0M

@aws
runtime nodejs18.x
