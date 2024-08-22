# Stage 1: Build
FROM maven:3.8.5-openjdk-8 AS build
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Runtime
FROM openjdk:8-jdk-slim
COPY --from=build /target/wedding-invitation-0.0.1-SNAPSHOT.jar wedding-invitation.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","wedding-invitation.jar"]
