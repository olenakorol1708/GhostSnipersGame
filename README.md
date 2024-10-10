# Ghost Snipers Game

## Overview

**Ghost Snipers** is a simple web-based shooting game where the player must shoot ghosts (zombies) that randomly appear on the screen. The player’s goal is to hit as many ghosts as possible while minimizing missed shots. The game includes functionality for starting, stopping, pausing, and resuming the game. There is also sound control, allowing the player to toggle the background sound on or off.

## Features

- **Zombie/ghost spawning**: Ghosts appear at random intervals in random positions on the game board.
- **Shooting ghosts**: The player can click on a ghost to shoot it, which will display a blood splatter and play a gunshot sound.
- **Miss counter**: The game keeps track of how many ghosts the player misses.
- **Pause/Resume functionality**: The game can be paused and resumed at any point, and the player cannot shoot ghosts while the game is paused.
- **Sound control**: The player can toggle background sound on and off during the game.
- **Start/Stop functionality**: The player can start and stop the game at any time. Stopping the game resets the hit and miss counters.

## Controls

- **Start/Stop**: Click the `START` button to begin the game. Once the game is running, the `STOP` button will appear to allow you to stop the game.
- **Pause/Resume**: Click the `PAUSE` button to pause the game. While paused, the button will change to `RESUME` to allow the game to be resumed.
- **Sound On/Off**: Click the `SOUND ON/OFF` button to toggle background music.

## Files

### 1. HTML (`index.html`)
Contains the structure of the game. This includes the game title, buttons (start, stop, pause, sound control), and the container for the game board where the ghosts will appear.

### 2. CSS (`style.css`)
Manages the visual design of the game, including button styles, background, and the layout of the game interface.

### 3. JavaScript (`script.js`)
Handles the game logic, including spawning and shooting ghosts, updating counters, and managing game states such as pausing, stopping, and resuming.

### 4. Assets

- `images/ghost.webp`: The image of the ghost that appears on the game board.
- `images/blood.webp`: The image that appears after a successful shot (blood splatter).
- `sounds/song.mp3`: Background music.
- `sounds/shot.mp3`: The sound effect played when the player shoots a ghost.

## Game Logic

### 1. Spawning Ghosts
Ghosts are randomly spawned at one of several grid positions (defined by `.item` elements). The ghost is an `img` element with the source pointing to `ghost.webp`.

### 2. Shooting Mechanism
When the player clicks on the ghost image, the ghost is removed, and a blood splatter appears in its place. The hit counter is incremented, and a shooting sound (`shot.mp3`) plays.

### 3. Miss Counter
If a ghost disappears without being shot, the miss counter increments. This is handled in the main game loop that checks every 100 milliseconds for missed ghosts.

### 4. Game Loop
The game loop continuously checks the state of the game. If the game is not paused and the time elapsed since the last ghost appearance exceeds the set time interval, a new ghost is spawned. This loop also manages the updating of counters.

### 5. Pause and Resume
The game can be paused by clicking the `PAUSE` button. During the pause state:
- Ghosts will not spawn.
- The player cannot shoot any ghosts.
The `RESUME` button allows the player to continue the game from where they left off.

## How to Play

1. **Start the Game**: Press the `START` button to begin.
2. **Shoot the Ghosts**: When a ghost appears, click on it to shoot. The goal is to shoot as many ghosts as possible.
3. **Pause/Resume**: You can pause the game by clicking `PAUSE` and resume by clicking `RESUME`.
4. **Stop the Game**: Press the `STOP` button to stop the game and reset all counters.
5. **Sound Control**: Use the `SOUND ON/OFF` button to toggle background music during gameplay.

## Setup

1. Ensure that all necessary files are placed in the correct directory:
   - `index.html` (HTML structure)
   - `style.css` (CSS for styling)
   - `script.js` (JavaScript for game logic)
   - Assets folder containing images and sounds (`images/` and `sounds/`).

2. Open the `index.html` file in your browser to play the game.

