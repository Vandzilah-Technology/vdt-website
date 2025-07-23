import { Component } from '@angular/core';
import {ButtonComponent} from '../../shared components/button/button.component';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  services: any[] = [
    {
      header: "Creative & Visual design",
      details: "Fusing creativity and strategy to craft compelling visual solutions rooted in timeless design and current trends. Going beyond aesthetics, focusing on functional graphics, user interfaces, and brand visuals that shape positive user experiences. Working collaboratively, they bring bold ideas to life across digital platforms for real impact.",
      icon: "visual-icon"
    },
    {
      header: "Digital Infrastructure & Network solutions",
      details: "Designing and implements secure, scalable digital infrastructure for schools, organizations, and communities. Building and managing reliable networks to ensure fast, stable, and future-ready connectivity. Our expert team ensures every solution is tailored, optimized, and aligned with your long-term goals.",
      icon: "digital-soln"
    },
    {
      header: "Internet of things & Smart solutions",
      details: "Vandzilah Technology designs and implements robust, secure, and scalable digital infrastructure for schools, organizations, and communities. We specialize in wired, wireless, and cloud-based networks tailored for speed, stability, and growth. Beyond installation, we plan, optimize, and manage networks for lasting impact.",
      icon: "IOT"
    },
    {
      header: "Robotics & Automation",
      details: "Developing custom robotics and automation systems that enhance precision, productivity, and efficiency. We design secure, scalable solutions including robotic components, embedded controls, and automation workflows. Serving industries from manufacturing to education, we simplify operations with intelligent, tailored technologies.",
      icon: "robotics"
    },
    {
      header: "Software & Web development",
      details: "Creating custom software and web solutions that drive efficiency, scalability, and user engagement. From secure platforms to dynamic interfaces and backend systems, we build tailored digital tools that streamline operations across industries—from education to enterprise.",
      icon: "web-dev"
    },
    {
      header: "Advanced coding & AI Solutions",
      details: "Developing intelligent, data-driven systems that boost precision, productivity, and efficiency. From AI-powered automation to custom algorithms and smart applications, we build secure, scalable solutions that transform operations across sectors like manufacturing, education, and more.",
      icon: "AI-solutions"
    },
  ]

}
