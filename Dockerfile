# 1. Use an official Java runtime as the base image
FROM openjdk:17-jdk-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the JAR file from your local machine into the container
COPY target/Mycars-0.0.1-SNAPSHOT.jar app.jar

# 4. Expose the application port (Spring Boot default is 8080)
EXPOSE 8080

# 5. Run the JAR file when the container startss
CMD ["java", "-jar", "app.jar"]
