package com.spring.config;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
            .withUser("shreyash")
            .password(passwordEncoder().encode("adminpass"))
            .roles("ADMIN", "SUPER_ADMIN");
        
        auth.inMemoryAuthentication()
            .withUser("prathmesh")
            .password(passwordEncoder().encode("adminpass"))
            .roles("SUPER_ADMIN");

        auth.inMemoryAuthentication()
         .withUser("nupoor")
         .password(passwordEncoder().encode("adminpass"))
         .roles("SUPER_ADMIN");


    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
                .antMatchers("/admin/register").hasRole("SUPER_ADMIN")
                .antMatchers("/admin/login").permitAll()  // Allow access to login endpoint without authentication
                .antMatchers("/admin/**").hasRole("ADMIN")
                .antMatchers("/flights/**").permitAll()
                .antMatchers("/user/**").permitAll()
                .antMatchers("/bookings").permitAll()
                .anyRequest().authenticated()
            .and()
            .httpBasic()
            .and()
            .addFilterBefore(new OncePerRequestFilter() {
                @Override
                protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
                    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
                    if (auth != null) {
                        System.out.println("User: " + auth.getName() + ", Authorities: " + auth.getAuthorities());
                    }
                    filterChain.doFilter(request, response);
                }
            }, UsernamePasswordAuthenticationFilter.class);
    }
    
}
