# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "bestapi-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["BestAPI"]
  spec.email         = ["info@example.com"]

  spec.summary       = "A Jekyll theme for BestAPI blog"
  spec.homepage      = "https://github.com/BestAPI"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3.2"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17.0"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8.0"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1.0"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4.0"
  spec.add_development_dependency "bundler"
end