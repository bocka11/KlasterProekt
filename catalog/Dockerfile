FROM openjdk:8
EXPOSE 8080
ADD target/events.jar events.jar
ENTRYPOINT ["java","-jar","/events.jar"]