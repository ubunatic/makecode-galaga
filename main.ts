namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Bomb = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Bomb, function (sprite, otherSprite) {
    destroySprite(sprite)
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    shoot(sprites.createProjectileFromSprite(img`
        . . . . . . . 9 . . . . . . . . 
        . . . . . . . 6 9 . f . f . f . 
        . . . . . . . . 6 9 . . . . . . 
        . . . . . . . . 6 9 . f . f . f 
        . . . . . . . . 6 9 . . . . . . 
        . . . . . . . . . 6 9 . f . f . 
        . . . . . . . . . 6 9 . . . . . 
        . . . . . . . . . 6 9 f . f . f 
        . . . . . . . . . 6 9 . . . . . 
        . . . . . . . . . 6 9 . f . f . 
        . . . . . . . . 6 9 . . . . . . 
        . . . . . . . . 6 9 . f . f . f 
        . . . . . . . . 6 9 . . . . . . 
        . . . . . . . 6 9 . f . f . f . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 100, 0), _BOMB)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Wall, function (sprite, otherSprite) {
    destroySprite(sprite)
})
function destroySprite (sprite: Sprite) {
    sprite.setVelocity(0, 0)
    sprite.destroy(effects.fire, 100)
    music.baDing.play()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shoot(sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 4 4 2 . . . . 
        . . . . . . . 4 2 4 5 4 2 . . . 
        . . . . 4 . 4 5 4 5 6 5 4 2 . . 
        . . 4 . . 4 5 4 5 5 6 6 5 2 . . 
        . . . . 4 . 4 5 4 5 6 5 4 2 . . 
        . . . . . . . 4 2 4 5 4 2 . . . 
        . . . . . . . . . 4 4 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 200, 0), _DART)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    destroy(sprite, otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    destroySprite(sprite)
    info.changeLifeBy(-1)
})
function shoot (shot: Sprite, _type: number) {
    shot.setFlag(SpriteFlag.AutoDestroy, true)
    if (_type == _DART) {
        shot.setKind(SpriteKind.Projectile)
        music.pewPew.play()
    } else {
        if (_type == _BOMB && game.runtime() - bombTime > 1000) {
            shot.setKind(SpriteKind.Bomb)
            bombTime = game.runtime()
            music.jumpUp.play()
        } else {
            shot.destroy()
        }
    }
}
function destroy (projectile: Sprite, sprite: Sprite) {
    destroySprite(projectile)
    destroySprite(sprite)
}
let bogey: Sprite = null
let ship: Sprite = null
let bombTime = 0
let _DART = 0
let _BOMB = 0
music.setVolume(20)
_BOMB = 0
_DART = 1
let _BOMB_COOLDOWN = 1000
bombTime = 0
ship = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........99............
    ...bbbbbb6669...........
    54cccccccb666b..........
    54cbbbbbbbbbbc..........
    ...bccccbcccc...........
    ....bbbb................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
let wall = sprites.create(img`
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
    `, SpriteKind.Wall)
ship.setFlag(SpriteFlag.StayInScreen, true)
wall.setPosition(30, 50)
ship.setPosition(10, 50)
wall.follow(ship, 30)
info.setLife(3)
controller.moveSprite(ship, 200, 200)
forever(function () {
    pause(100)
})
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f 6 6 6 6 6 6 7 7 . . . 
        . . . f 6 7 7 7 . . . . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 7 . 
        . . . 7 6 9 9 9 6 7 7 . . . . . 
        . . . 7 6 9 9 9 6 7 7 . . . . . 
        . . . 7 6 6 6 6 6 6 6 6 6 7 7 . 
        . . . f 6 7 7 7 . . . . . . . . 
        . . . . f 6 6 6 6 6 6 7 7 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.left = scene.screenWidth()
    bogey.y = randint(0, scene.screenHeight())
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
