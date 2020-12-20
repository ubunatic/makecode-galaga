namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - bombTime > 1000) {
        bomb = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b b b . . . . . 
            2 2 2 2 2 2 c b a b a b . . . . 
            . 5 5 5 2 c c a a a b a b . . . 
            5 5 2 2 2 c a c a a a b a . . . 
            5 5 2 2 2 c c a c a a a b . . . 
            . 5 5 5 2 c a c a c a b a . . . 
            2 2 2 2 2 2 c a c a c a . . . . 
            . . . . . . . c c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, spacePlane, 100, 0)
        bomb.setFlag(SpriteFlag.AutoDestroy, true)
        music.powerUp.play()
        bombTime = game.runtime()
    } else {
        music.powerDown.play()
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Wall, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    sprite.destroy(effects.fire, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 2 . 2 2 . . . . . . . . . 
        5 2 . 2 5 2 . . . . . . 2 . . . 
        . 2 . 2 . 2 . 2 . . . . 2 2 2 . 
        5 5 5 5 5 5 2 2 2 2 2 2 2 . . . 
        . 2 . 2 . 2 . 2 . . . . 2 2 2 . 
        5 2 . 2 5 2 . . . . . . 2 . . . 
        . . 5 2 . 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
    dart.setFlag(SpriteFlag.AutoDestroy, true)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setVelocity(0, 0)
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy(effects.confetti, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setVelocity(0, 0)
    otherSprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let bomb: Sprite = null
let spacePlane: Sprite = null
let bombTime = 0
bombTime = 0
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 9 9 . . . . 
    . . . b b b b b b 6 6 6 9 . . . 
    5 4 c c c c c c c b 6 6 6 b . . 
    5 4 c b b b b b b b b b b c . . 
    . . . b c c c c b c c c c . . . 
    . . . . b b b b . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let wall = sprites.create(img`
    . . . . . . c c c c . . . . . . 
    . . . . . . c b b c . . . . . . 
    . . . . . . c c b c . . . . . . 
    . . . . . . c b b c . . . . . . 
    . . . . . . c b c c . . . . . . 
    . . . . . . c b b c . . . . . . 
    . . . . . . c c b c . . . . . . 
    . . . . . . c b b c . . . . . . 
    . . . . . . c b c c . . . . . . 
    . . . . . . c b b c . . . . . . 
    . . . . . . c c b c . . . . . . 
    . . . . . . c b b c . . . . . . 
    . . . . . . c b c c . . . . . . 
    . . . . . . c b b c . . . . . . 
    . . . . . . c c b c . . . . . . 
    . . . . . . c c c c . . . . . . 
    `, SpriteKind.Wall)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
wall.setPosition(30, 50)
spacePlane.setPosition(10, 50)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
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
