FROM maven:3.6.1-jdk-8-slim AS build
WORKDIR /teste-pratico-java
COPY pom.xml /teste-pratico-java
COPY src /teste-pratico-java/src
RUN mvn -f pom.xml clean package

FROM openjdk:8-alpine
COPY --from=build /teste-pratico-java/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]