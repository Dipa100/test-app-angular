web: java $JAVA_OPTS -jar target/*.jar --spring.profiles.active=production

web: bundle exec rails server -p $PORT -e $RAILS_ENV -b 0.0.0.0

worker: bundle exec sidekiq -e $RAILS_ENV
