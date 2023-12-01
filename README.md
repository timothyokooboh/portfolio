# Portfolio

### Overview
This project implements a monorepo architecture powered by Yarn workspaces and Turborepo.
There are three workspaces.
- @app/foundations
    - Located at packages/foundations
    - Contains design tokens for colors, typography and responsive breakpoints.
    - Uses `style-dictionary`
      
- @app/ui-library
  - Located at packages/ui-library
  - Contains base components such as BaseButton and BaseTextField (input field and textarea)
  - Uses `Vue 3`

- @app/portfolio
  - Located at apps/portfolio
  - Contains the actual portfolio web app
  - Uses `Nuxt 3`

## Intsallation
`yarn`

## Start Development Server
`yarn dev`

## Unit/Component Test
`yarn test`

## End-to-end test
`yarn e2e`

## Build
`yarn build`
