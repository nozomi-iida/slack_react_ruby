FROM ruby:2.7.1
RUN apt-get update -qq && \
    apt-get install -y \
    build-essential \
    nodejs

ENV SERVER_ROOT /server
WORKDIR ${SERVER_ROOT}

COPY Gemfile /${SERVER_ROOT}/Gemfile
COPY Gemfile.lock /${SERVER_ROOT}/Gemfile.lock

RUN bundle install

COPY . .

EXPOSE 3000

CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
