docker build -t gabbla1/zad2:worker .
docker build -t gabbla1/zad2:client .
docker build -t gabbla1/zad2:nginx .
docker build -t gabbla1/zad2:server .

docker push gabbla1/zad2:worker
docker push gabbla1/zad2:client
docker push gabbla1/zad2:nginx
docker push gabbla1/zad2:server

docker compose -f docker-compose.yml up -d
![prod](https://github.com/gabbl0/docker-zad2/blob/main/prod.png)