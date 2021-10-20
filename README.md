## セットアップ方法
````
docker-compose build

docker-compose run server rails db:create
FIXME: これはできればなくしたい
docker-compose run --rm client sh -c "npm install -g create-react-app && yarn"

docker-compose up
````
