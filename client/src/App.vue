<template>
  <div id="app" class="min-h-screen bg-game-bg">
    <nav class="bg-game-surface border-b border-game-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link 
              to="/" 
              class="text-xl font-bold text-game-primary hover:text-game-secondary transition-colors"
            >
              Infight.io
            </router-link>
          </div>
          
          <div class="flex items-center space-x-4">
            <router-link 
              to="/" 
              class="text-game-text hover:text-game-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </router-link>
            <router-link 
              to="/about" 
              class="text-game-text hover:text-game-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// Main App component for Infight.io
// This provides the basic layout and navigation structure
</script>
