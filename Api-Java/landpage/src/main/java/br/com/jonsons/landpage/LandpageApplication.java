package br.com.jonsons.landpage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class LandpageApplication {

	public static void main(String[] args) {
		SpringApplication.run(LandpageApplication.class, args);
	}

}