package com.example.password.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {

        http
            .authorizeHttpRequests(request -> request

                .requestMatchers(
                        "/registration",
                        "/login",
                        "/css/**",
                        "/js/**"
                ).permitAll()

                .anyRequest().authenticated()
            )

            .formLogin(form -> form

                .loginPage("/login")

                .defaultSuccessUrl("/welcome", true)

                .permitAll()
            )

            .logout(logout -> logout

                .logoutUrl("/logout")

                .logoutSuccessUrl("/login?logout")

                .permitAll()
            );

        return http.build();
    }
}