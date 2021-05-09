@Echo OFF

mvn clean install

if exist ./target/teste-pratico-java-0.0.1-SNAPSHOT.jar call docker-compose up -d --build