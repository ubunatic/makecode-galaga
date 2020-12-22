namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Bomb = SpriteKind.create()
    export const Shield = SpriteKind.create()
    export const ShieldPower = SpriteKind.create()
    export const FirePower = SpriteKind.create()
    export const Virus = SpriteKind.create()
    export const Background = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
	
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (x_shield_level == 100) {
        x_shield_level = 0
        wall.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        projectile = sprites.createProjectileFromSprite(img`
            ................9.......
            ................69......
            .................69.....
            ..................69....
            ..................69....
            ...................69...
            ...................69...
            ...................69...
            ....................69..
            ....................69..
            ....................69..
            ....................69..
            ....................69..
            ....................69..
            ....................69..
            ....................69..
            ...................69...
            ...................69...
            ...................69...
            ..................69....
            ..................69....
            .................69.....
            ................69......
            ................9.......
            `, ship, 200, 0)
        projectile.setKind(SpriteKind.Shield)
        music.jumpUp.play()
    }
})
function animateShot (sprite: Sprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 4 4 . . . . . . 
        . . 2 . . 4 4 5 2 . . . 
        . . . . 5 2 5 4 5 4 . . 
        . . . 4 4 5 4 5 5 4 . . 
        . . 2 . 5 5 5 4 2 4 . . 
        . . . 4 4 . 2 5 5 . . . 
        . . . . . 4 4 . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 2 . . . . . . . . 
        . e . . 4 4 5 2 5 . . . 
        . . . . 2 5 4 5 5 4 . . 
        . . 2 4 5 4 5 5 5 5 . . 
        . e . . 5 5 4 2 5 4 . . 
        . . 2 . . 2 5 5 5 . . . 
        . . . . 4 4 . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . e . . . . . . . . . 
        . . 2 4 . . 2 5 4 . . . 
        . . . 2 5 4 5 5 5 4 . . 
        . e 2 5 4 4 5 5 4 5 . . 
        . . . . 5 4 2 5 5 4 . . 
        . e . . 2 . 5 5 5 . . . 
        . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . 4 . . . . 
        . e . . . 2 5 5 4 . . . 
        . . 2 . 4 5 5 5 5 5 . . 
        . 2 . 4 5 5 5 4 4 5 . . 
        . . . . 4 2 5 5 5 4 . . 
        . . . 2 . . 4 5 4 . . . 
        . . 2 . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . 4 4 . . . . 
        . . . . 2 . 5 5 5 . . . 
        . e . . 5 5 5 5 5 5 . . 
        e . . 4 5 5 4 4 5 5 . . 
        . . . . 2 5 5 5 5 5 . . 
        . . 2 . . 4 4 5 4 . . . 
        . e . . . . . 4 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . 4 4 . . . . . 
        . . . 2 . . 4 5 5 . . . 
        . . . . 5 5 5 5 4 5 . . 
        . . . 5 5 4 4 5 5 4 . . 
        . . . 2 5 5 5 5 4 5 . . 
        . e . . 4 4 5 5 5 . . . 
        . . . . . . 4 4 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `],
    50,
    true
    )
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Wall, function (sprite, otherSprite) {
    destroySprite(sprite)
    addScore(1)
})
function destroySprite (sprite: Sprite) {
    sprite.setVelocity(0, 0)
    sprite.destroy(effects.fire, 100)
    music.baDing.play()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shoot()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    destroySprite(sprite)
    destroySprite(otherSprite)
    addScore(1)
})
function spawnShield () {
    if (x_shield_level == 0) {
        x_shield_frame_duration = 300 / SHIELD_POWER
        wall.setPosition(ship.x, ship.y)
        wall.follow(ship, 100)
        animation.runImageAnimation(
        wall,
        [img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............................9...
            ............................69..
            ............................69..
            ............................9...
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............................9...
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ............................9...
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...........................9....
            ...........................69...
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ...........................69...
            ...........................9....
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...........................9....
            ...........................69...
            ...........................69...
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ...........................69...
            ...........................69...
            ...........................9....
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...........................9....
            ...........................69...
            ...........................69...
            ...........................69...
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ...........................69...
            ...........................69...
            ...........................69...
            ...........................9....
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ..........................9.....
            ..........................69....
            ...........................69...
            ...........................69...
            ...........................69...
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ...........................69...
            ...........................69...
            ...........................69...
            ..........................69....
            ..........................9.....
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ..........................9.....
            ..........................69....
            ..........................69....
            ...........................69...
            ...........................69...
            ...........................69...
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ...........................69...
            ...........................69...
            ...........................69...
            ..........................69....
            ..........................69....
            ..........................9.....
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ..........................9.....
            ..........................69....
            ..........................69....
            ...........................69...
            ...........................69...
            ...........................69...
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ...........................69...
            ...........................69...
            ...........................69...
            ..........................69....
            ..........................69....
            ..........................9.....
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ..........................9.....
            ..........................69....
            ..........................69....
            ..........................69....
            ...........................69...
            ...........................69...
            ...........................69...
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ...........................69...
            ...........................69...
            ...........................69...
            ..........................69....
            ..........................69....
            ..........................69....
            ..........................9.....
            ................................
            ................................
            `,img`
            ................................
            ..........................9.....
            ..........................69....
            ..........................69....
            ..........................699...
            ...........................69...
            ...........................69...
            ...........................69...
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ............................69..
            ...........................69...
            ...........................69...
            ...........................69...
            ..........................699...
            ..........................69....
            ..........................69....
            ..........................9.....
            ................................
            `],
        x_shield_frame_duration,
        false
        )
        // shield animation has 10 frames
        pause(x_shield_frame_duration * 10)
        x_shield_level = 100
    }
}
info.onCountdownEnd(function () {
    SHOOT_DELAY = 100
    SCORE_BONUS = 0
    animateShip()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FirePower, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.stopCountdown()
    info.startCountdown(10)
    SHOOT_DELAY = SHOOT_DELAY / 2
    SCORE_BONUS = 1
    blinkShip()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    destroySprite(sprite)
    info.changeLifeBy(-1)
})
function shoot () {
    projectile = sprites.createProjectileFromSprite(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, ship, 200, 0)
    projectile.x = projectile.x + 10
    animateShot(projectile)
    music.pewPew.play()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Shield, function (sprite, otherSprite) {
    destroySprite(sprite)
    addScore(1)
})
function spawn (sprite: Sprite, vx: number) {
    return spawnAt(sprite, vx, scene.screenWidth(), randint(0, scene.screenHeight()))
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    shoot()
    pause(SHOOT_DELAY)
})
function spawnAt (sprite: Sprite, vx: number, x: number, y: number) {
    sprite.setVelocity(vx, 0)
    sprite.x = x
    sprite.y = y
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
    return sprite
}
function animateShip () {
    animation.runImageAnimation(
    ship,
    [img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . a a . . b b . . . . . 9 9 9 . . . . . . 
        . . . . 4 2 a c a a a c c c b 1 6 6 9 . . . . . 
        . . 5 5 a a c c c c c c c c c b 6 6 6 9 . . . . 
        5 5 5 4 4 2 a c b b a c c c c c c c c c c . . . 
        . . 5 5 a a c c c c c c c c c c c c c c c . . . 
        . . . . 4 2 a c a a a c c c c c c c c c . . . . 
        . . . . a a . . b b . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . a a . . b b . . . . . 9 9 9 . . . . . . 
        . . . . 4 2 a c a a a c c c b 1 6 6 9 . . . . . 
        . . 5 4 a a c c c c c c c c c b 6 6 6 9 . . . . 
        5 5 4 4 2 2 a c b b a c c c c c c c c c c . . . 
        . . 5 4 a a c c c c c c c c c c c c c c c . . . 
        . . . . 4 2 a c a a a c c c c c c c c c . . . . 
        . . . . a a . . b b . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
}
function blinkShip () {
    animation.runImageAnimation(
    ship,
    [img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . a a . . b b . . . . . 9 9 9 . . . . . . 
        . . . . 4 2 a c a a a a a c b 1 6 6 9 . . . . . 
        . . 5 5 a a c c c c c c c a c b 6 6 6 9 . . . . 
        5 5 5 4 4 2 a c b b a a a b a c c c c c c . . . 
        . . 5 5 a a c c c c c c c a b a a a a a a . . . 
        . . . . 4 2 a c a a a a a c a b b 2 4 5 . . . . 
        . . . . a a . . b b . . . . . a a a a a . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . a a . . b b . . . . . 9 9 9 . . . . . . 
        . . . . 4 2 a c a a a a a c b 1 6 6 9 . . . . . 
        . . 5 4 a a c c c c c c c a c b 6 6 6 9 . . . . 
        5 5 4 4 2 2 a c b b a a a b a c c c c c c . . . 
        . . 5 4 a a c c c c c c c a b a a a a a a . . . 
        . . . . 4 2 a c a a a a a c a b b 2 2 4 . . . . 
        . . . . a a . . b b . . . . . a a a a a . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
}
function addScore (value: number) {
    if (value > 0) {
        info.changeScoreBy(value + SCORE_BONUS)
    }
    if (game.runtime() > 60000) {
        if (info.score() >= 100) {
            game.over(true)
        } else {
            game.over(false)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ShieldPower, function (sprite, otherSprite) {
    destroySprite(otherSprite)
    spawnShield()
})
let x_enemy: Sprite = null
let x_shield_frame_duration = 0
let projectile: Sprite = null
let x_shield_level = 0
let ship: Sprite = null
let wall: Sprite = null
let SCORE_BONUS = 0
let SHOOT_DELAY = 0
let SHIELD_POWER = 0
music.setVolume(50)
SHIELD_POWER = 4
SHOOT_DELAY = 250
SCORE_BONUS = 0
wall = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Wall)
ship = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
controller.moveSprite(ship, 200, 200)
ship.setFlag(SpriteFlag.StayInScreen, true)
ship.setPosition(10, 50)
let x_shield_power = spawnAt(sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . 9 6 6 6 6 9 . . . . . 
    . . . . 8 6 6 1 1 6 6 9 . . . . 
    . . . . 8 6 1 6 6 1 6 9 . . . . 
    . . . . 8 6 1 6 6 6 6 9 . . . . 
    . . . . 8 6 6 1 1 6 6 9 . . . . 
    . . . . 8 6 6 6 6 1 6 9 . . . . 
    . . . . 8 6 1 6 6 1 6 9 . . . . 
    . . . . 8 6 6 1 1 6 6 9 . . . . 
    . . . . . 8 6 6 6 6 8 . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.ShieldPower), -60, scene.screenWidth(), 50)
info.setLife(3)
animateShip()
game.splash("Hit 100 enemies", "in 60 seconds!")
game.onUpdateInterval(randint(4000, 6000), function () {
    spawn(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . b a a a a b . . . . . 
        . . . . c a 5 5 5 a a b . . . . 
        . . . . c a 5 a a 5 a b . . . . 
        . . . . c a 5 a a 5 a b . . . . 
        . . . . c a 5 5 5 a a b . . . . 
        . . . . c a 5 a a a a b . . . . 
        . . . . c a 5 a a a a b . . . . 
        . . . . c a 5 a a a a b . . . . 
        . . . . . c a a a a b . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FirePower), -100)
})
game.onUpdateInterval(1000, function () {
    // trigger score check
    addScore(0)
})
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . 6 7 6 . . . . 
        . 7 6 . . 6 . . 6 7 . 
        . 6 6 . 6 6 6 . 6 6 . 
        . . . 6 7 6 7 6 . . . 
        6 . 6 7 6 7 6 7 6 . 6 
        7 6 6 6 7 6 7 6 6 6 7 
        6 . 6 7 6 7 6 7 6 . 6 
        . . . 6 7 6 7 6 . . . 
        . 6 6 . 6 6 6 . 6 6 . 
        . 7 6 . . 6 . . 6 7 . 
        . . . . 6 7 6 . . . . 
        `, x_enemy, -20, 0)
    projectile.setKind(SpriteKind.Enemy)
    projectile.follow(ship, 20)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . 7 6 . . 6 . . 6 5 . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . 6 . 6 7 6 7 6 7 6 . 6 . . 
        . . . 5 6 6 6 7 7 7 6 6 6 7 . . 
        . . . 6 . 6 7 6 7 6 7 6 . 6 . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . 7 6 . . 6 . . 6 7 . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . 5 6 . . 6 . . 6 7 . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . 6 . 6 7 6 5 6 7 6 . 6 . . 
        . . . 7 6 6 6 5 5 5 6 6 6 5 . . 
        . . . 6 . 6 7 6 5 6 7 6 . 6 . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . 7 6 . . 6 . . 6 7 . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 5 6 . . . . . . 
        . . . . 7 6 . . 6 . . 6 7 . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . 6 . 6 7 6 5 6 7 6 . 6 . . 
        . . . 7 6 6 6 5 7 5 6 6 6 7 . . 
        . . . 6 . 6 7 6 5 6 7 6 . 6 . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . 7 6 . . 6 . . 6 5 . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . 7 6 . . 6 . . 6 5 . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . . . 6 5 6 5 6 . . . . . 
        . . . 6 . 6 5 6 7 6 5 6 . 6 . . 
        . . . 7 6 6 6 7 6 7 6 6 6 7 . . 
        . . . 6 . 6 5 6 7 6 5 6 . 6 . . 
        . . . . . . 6 5 6 5 6 . . . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . 7 6 . . 6 . . 6 7 . . . 
        . . . . . . . 6 5 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . 7 6 . . 6 . . 6 7 . . . 
        . . . . 6 6 . 7 6 7 . 6 6 . . . 
        . . . . . . 7 5 6 5 7 . . . . . 
        . . . 6 . 7 5 6 7 6 5 7 . 6 . . 
        . . . 7 6 6 6 7 6 7 6 6 6 5 . . 
        . . . 6 . 7 5 6 7 6 5 7 . 6 . . 
        . . . . . . 7 5 6 5 7 . . . . . 
        . . . . 6 6 . 7 6 7 . 6 6 . . . 
        . . . . 5 6 . . 6 . . 6 7 . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . 7 6 . . 6 . . 6 7 . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . 6 . 6 7 6 7 6 7 6 . 6 . . 
        . . . 5 6 6 6 7 6 7 6 6 6 7 . . 
        . . . 6 . 6 7 6 7 6 7 6 . 6 . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . 7 6 . . 6 . . 6 5 . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . 5 6 . . 6 . . 6 7 . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . 6 . 6 7 6 7 6 7 6 . 6 . . 
        . . . 7 6 6 6 7 6 7 6 6 6 7 . . 
        . . . 6 . 6 7 6 7 6 7 6 . 6 . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . 7 6 . . 6 . . 6 7 . . . 
        . . . . . . . 6 5 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 5 6 . . . . . . 
        . . . . 7 6 . . 6 . . 6 7 . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . 6 . 6 7 6 7 6 7 6 . 6 . . 
        . . . 7 6 6 6 7 6 7 6 6 6 7 . . 
        . . . 6 . 6 7 6 7 6 7 6 . 6 . . 
        . . . . . . 6 7 6 7 6 . . . . . 
        . . . . 6 6 . 6 6 6 . 6 6 . . . 
        . . . . 5 6 . . 6 . . 6 7 . . . 
        . . . . . . . 6 7 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
game.onUpdateInterval(500, function () {
    x_enemy = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Enemy)
    spawn(x_enemy, -50)
    animation.runImageAnimation(
    x_enemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 6 6 6 6 6 7 4 . . . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 4 . 
        . . . 7 6 1 9 9 6 7 7 . . . . . 
        . . . 7 6 9 9 9 6 7 7 . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 4 . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . . 7 7 6 6 6 6 6 7 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 6 7 6 6 6 6 7 4 . . . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 4 . 
        . . . 7 6 1 9 9 6 7 7 . . . . . 
        . . . 7 6 9 9 9 6 7 7 . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 4 . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . . 7 6 7 6 6 6 6 7 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 6 6 7 6 6 6 7 4 . . . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 4 . 
        . . . 7 6 1 9 9 6 7 7 . . . . . 
        . . . 7 6 9 9 9 6 7 7 . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 4 . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . . 7 6 6 7 6 6 6 7 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 6 6 6 7 6 6 7 4 . . . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . 7 6 6 6 6 7 6 6 6 6 7 4 . 
        . . . 7 6 1 9 9 6 7 7 . . . . . 
        . . . 7 6 9 9 9 6 7 7 . . . . . 
        . . . 7 6 6 6 6 7 6 6 6 6 7 4 . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . . 7 6 6 6 7 6 6 7 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 6 6 6 6 7 6 7 4 . . . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . 7 6 6 6 6 6 6 7 6 6 7 4 . 
        . . . 7 6 1 9 9 6 7 7 . . . . . 
        . . . 7 6 9 9 9 6 7 7 . . . . . 
        . . . 7 6 6 6 6 6 6 7 6 6 7 4 . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . . 7 6 6 6 6 7 6 7 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 6 6 6 6 6 7 7 4 . . . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 7 7 4 . 
        . . . 7 6 1 9 9 6 7 7 . . . . . 
        . . . 7 6 9 9 9 6 7 7 . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 7 7 4 . 
        . . . 7 6 7 7 7 . . . . . . . . 
        . . . . 7 6 6 6 6 6 7 7 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e . . . 
        . . . . 7 6 6 6 6 6 6 7 5 e . . 
        . . . 7 6 7 7 7 . . . . e . e . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 5 e 
        . . . 7 6 1 9 9 6 7 7 . . . e . 
        . . . 7 6 9 9 9 6 7 7 . . . e . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 5 e 
        . . . 7 6 7 7 7 . . . . e . e . 
        . . . . 7 6 6 6 6 6 6 7 5 . . . 
        . . . . . . . . . . . . e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
game.onUpdateInterval(randint(8000, 12000), function () {
    spawn(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . 9 6 6 6 6 9 . . . . . 
        . . . . 8 6 6 1 1 6 6 9 . . . . 
        . . . . 8 6 1 6 6 1 6 9 . . . . 
        . . . . 8 6 1 6 6 6 6 9 . . . . 
        . . . . 8 6 6 1 1 6 6 9 . . . . 
        . . . . 8 6 6 6 6 1 6 9 . . . . 
        . . . . 8 6 1 6 6 1 6 9 . . . . 
        . . . . 8 6 6 1 1 6 6 9 . . . . 
        . . . . . 8 6 6 6 6 8 . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.ShieldPower), -100)
})
