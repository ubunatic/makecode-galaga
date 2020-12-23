namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Bomb = SpriteKind.create()
    export const Shield = SpriteKind.create()
    export const ShieldPower = SpriteKind.create()
    export const FirePower = SpriteKind.create()
    export const Virus = SpriteKind.create()
    export const Background = SpriteKind.create()
    export const Camera = SpriteKind.create()
    export const Nil = SpriteKind.create()
}
function animateShotL2 (sprite: Sprite) {
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
        . . . . . . . . . . . . 
        `],
    50,
    true
    )
}
function checkScore () {
    if (game.runtime() > PLAY_TIME * 1000) {
        if (info.score() >= MIN_SCORE) {
            game.over(true)
        } else {
            game.over(false)
        }
    }
}
function animateEnemy (sprite: Sprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . 
        . . 7 7 6 6 6 6 6 7 4 . . . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . 7 6 6 6 6 6 6 6 6 6 7 4 . . 
        . 7 6 1 9 9 6 7 7 . . . . . . 
        . 7 6 9 9 9 6 7 7 . . . . . . 
        . 7 6 6 6 6 6 6 6 6 6 7 4 . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . . 7 7 6 6 6 6 6 7 4 . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . 7 6 7 6 6 6 6 7 4 . . . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . 7 6 6 6 6 6 6 6 6 6 7 4 . . 
        . 7 6 1 9 9 6 7 7 . . . . . . 
        . 7 6 9 9 9 6 7 7 . . . . . . 
        . 7 6 6 6 6 6 6 6 6 6 7 4 . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . . 7 6 7 6 6 6 6 7 4 . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . 7 6 6 7 6 6 6 7 4 . . . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . 7 6 6 6 6 6 6 6 6 6 7 4 . . 
        . 7 6 1 9 9 6 7 7 . . . . . . 
        . 7 6 9 9 9 6 7 7 . . . . . . 
        . 7 6 6 6 6 6 6 6 6 6 7 4 . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . . 7 6 6 7 6 6 6 7 4 . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . 7 6 6 6 7 6 6 7 4 . . . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . 7 6 6 6 6 7 6 6 6 6 7 4 . . 
        . 7 6 1 9 9 6 7 7 . . . . . . 
        . 7 6 9 9 9 6 7 7 . . . . . . 
        . 7 6 6 6 6 7 6 6 6 6 7 4 . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . . 7 6 6 6 7 6 6 7 4 . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . 7 6 6 6 6 7 6 7 4 . . . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . 7 6 6 6 6 6 6 7 6 6 7 4 . . 
        . 7 6 1 9 9 6 7 7 . . . . . . 
        . 7 6 9 9 9 6 7 7 . . . . . . 
        . 7 6 6 6 6 6 6 7 6 6 7 4 . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . . 7 6 6 6 6 7 6 7 4 . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . 7 6 6 6 6 6 7 7 4 . . . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . 7 6 6 6 6 6 6 6 6 7 7 4 . . 
        . 7 6 1 9 9 6 7 7 . . . . . . 
        . 7 6 9 9 9 6 7 7 . . . . . . 
        . 7 6 6 6 6 6 6 6 6 7 7 4 . . 
        . 7 6 7 7 7 . . . . . . . . . 
        . . 7 6 6 6 6 6 7 7 4 . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . e . . . . 
        . . 7 6 6 6 6 6 6 7 5 e . . . 
        . 7 6 7 7 7 . . . . e . e . . 
        . 7 6 6 6 6 6 6 6 6 6 7 5 e . 
        . 7 6 1 9 9 6 7 7 . . . e . . 
        . 7 6 9 9 9 6 7 7 . . . e . . 
        . 7 6 6 6 6 6 6 6 6 6 7 5 e . 
        . 7 6 7 7 7 . . . . e . e . . 
        . . 7 6 6 6 6 6 6 7 5 . . . . 
        . . . . . . . . . . e . . . . 
        `],
    100,
    true
    )
}
function animateShipL2 () {
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_shield_level == 100) {
        _shield_level = 0
        wall.setImage(img`
            . 
            `)
        shootShield()
    }
})
function initX () {
    _nil = sprites.create(img`
        . 
        `, SpriteKind.Nil)
    _enemy = sprites.create(img`
        . 
        `, SpriteKind.Nil)
    _virus = sprites.create(img`
        . 
        `, SpriteKind.Nil)
}
function shootShield () {
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
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    music.jumpUp.play()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Wall, function (sprite, otherSprite) {
    damage(sprite, _nil, -100)
})
function destroySprite (sprite: Sprite) {
    sprite.setVelocity(0, 0)
    sprite.destroy(effects.fire, 50)
    music.baDing.play()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shoot()
})
function animateVirus (sprite: Sprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . 6 7 6 . . . . 
        . 7 6 . . 6 . . 6 5 . 
        . 6 6 . 6 6 6 . 6 6 . 
        . . . 6 7 6 7 6 . . . 
        6 . 6 7 6 7 6 7 6 . 6 
        5 6 6 6 7 7 7 6 6 6 7 
        6 . 6 7 6 7 6 7 6 . 6 
        . . . 6 7 6 7 6 . . . 
        . 6 6 . 6 6 6 . 6 6 . 
        . 7 6 . . 6 . . 6 7 . 
        . . . . 6 7 6 . . . . 
        `,img`
        . . . . 6 7 6 . . . . 
        . 5 6 . . 6 . . 6 7 . 
        . 6 6 . 6 6 6 . 6 6 . 
        . . . 6 7 6 7 6 . . . 
        6 . 6 7 6 5 6 7 6 . 6 
        7 6 6 6 5 5 5 6 6 6 5 
        6 . 6 7 6 5 6 7 6 . 6 
        . . . 6 7 6 7 6 . . . 
        . 6 6 . 6 6 6 . 6 6 . 
        . 7 6 . . 6 . . 6 7 . 
        . . . . 6 7 6 . . . . 
        `,img`
        . . . . 6 5 6 . . . . 
        . 7 6 . . 6 . . 6 7 . 
        . 6 6 . 6 6 6 . 6 6 . 
        . . . 6 7 6 7 6 . . . 
        6 . 6 7 6 5 6 7 6 . 6 
        7 6 6 6 5 7 5 6 6 6 7 
        6 . 6 7 6 5 6 7 6 . 6 
        . . . 6 7 6 7 6 . . . 
        . 6 6 . 6 6 6 . 6 6 . 
        . 7 6 . . 6 . . 6 5 . 
        . . . . 6 7 6 . . . . 
        `,img`
        . . . . 6 7 6 . . . . 
        . 7 6 . . 6 . . 6 5 . 
        . 6 6 . 6 6 6 . 6 6 . 
        . . . 6 5 6 5 6 . . . 
        6 . 6 5 6 7 6 5 6 . 6 
        7 6 6 6 7 6 7 6 6 6 7 
        6 . 6 5 6 7 6 5 6 . 6 
        . . . 6 5 6 5 6 . . . 
        . 6 6 . 6 6 6 . 6 6 . 
        . 7 6 . . 6 . . 6 7 . 
        . . . . 6 5 6 . . . . 
        `,img`
        . . . . 6 7 6 . . . . 
        . 7 6 . . 6 . . 6 7 . 
        . 6 6 . 7 6 7 . 6 6 . 
        . . . 7 5 6 5 7 . . . 
        6 . 7 5 6 7 6 5 7 . 6 
        7 6 6 6 7 6 7 6 6 6 5 
        6 . 7 5 6 7 6 5 7 . 6 
        . . . 7 5 6 5 7 . . . 
        . 6 6 . 7 6 7 . 6 6 . 
        . 5 6 . . 6 . . 6 7 . 
        . . . . 6 7 6 . . . . 
        `,img`
        . . . . 6 7 6 . . . . 
        . 7 6 . . 6 . . 6 7 . 
        . 6 6 . 6 6 6 . 6 6 . 
        . . . 6 7 6 7 6 . . . 
        6 . 6 7 6 7 6 7 6 . 6 
        5 6 6 6 7 6 7 6 6 6 7 
        6 . 6 7 6 7 6 7 6 . 6 
        . . . 6 7 6 7 6 . . . 
        . 6 6 . 6 6 6 . 6 6 . 
        . 7 6 . . 6 . . 6 5 . 
        . . . . 6 7 6 . . . . 
        `,img`
        . . . . 6 7 6 . . . . 
        . 5 6 . . 6 . . 6 7 . 
        . 6 6 . 6 6 6 . 6 6 . 
        . . . 6 7 6 7 6 . . . 
        6 . 6 7 6 7 6 7 6 . 6 
        7 6 6 6 7 6 7 6 6 6 7 
        6 . 6 7 6 7 6 7 6 . 6 
        . . . 6 7 6 7 6 . . . 
        . 6 6 . 6 6 6 . 6 6 . 
        . 7 6 . . 6 . . 6 7 . 
        . . . . 6 5 6 . . . . 
        `,img`
        . . . . 6 5 6 . . . . 
        . 7 6 . . 6 . . 6 7 . 
        . 6 6 . 6 6 6 . 6 6 . 
        . . . 6 7 6 7 6 . . . 
        6 . 6 7 6 7 6 7 6 . 6 
        7 6 6 6 7 6 7 6 6 6 7 
        6 . 6 7 6 7 6 7 6 . 6 
        . . . 6 7 6 7 6 . . . 
        . 6 6 . 6 6 6 . 6 6 . 
        . 5 6 . . 6 . . 6 7 . 
        . . . . 6 7 6 . . . . 
        `],
    100,
    true
    )
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    damage(sprite, otherSprite, -25 * DAMAGE_FACTOR)
})
function animateShipL1 () {
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
function spawnShield () {
    if (_shield_level == 0) {
        _shield_frame_duration = 300 / SHIELD_POWER
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
        _shield_frame_duration,
        false
        )
        // shield animation has 10 frames
        pause(_shield_frame_duration * 10)
        _shield_level = 100
    }
}
info.onCountdownEnd(function () {
    SHOOT_DELAY = 100
    DAMAGE_FACTOR = 1
    animateShipL1()
})
function startCamera () {
    camera = sprites.create(img`
        c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        ...............................................c
        c...............................................
        .c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c.c
        `, SpriteKind.Camera)
    camera.follow(ship, 50)
    scene.cameraFollowSprite(camera)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.FirePower, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.stopCountdown()
    info.startCountdown(10)
    SHOOT_DELAY = 50
    DAMAGE_FACTOR = DAMAGE_FACTOR * 2
    animateShipL2()
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    destroySprite(status.spriteAttachedTo())
    if (status.spriteAttachedTo().kind() == SpriteKind.Player) {
        game.over(false)
    } else {
        info.changeScoreBy(1)
    }
})
function shoot () {
    projectile = sprites.createProjectileFromSprite(img`
        . 
        `, ship, 200, 0)
    projectile.x = projectile.x + 0
    projectile.y = projectile.y - 5
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    if (DAMAGE_FACTOR > 1) {
        animateShotL2(projectile)
    } else {
        animateShotL1(projectile)
    }
    music.pewPew.play()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Shield, function (sprite, otherSprite) {
    damage(sprite, _nil, -100)
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
function createStatus (sprite: Sprite, hp: number) {
    statusbar = statusbars.create(10, 1, StatusBarKind.Health)
    statusbar.attachToSprite(sprite, 1, 0)
    statusbar.value = hp
    statusbar.setColor(6, 15)
    return statusbar
}
function damage (sprite: Sprite, projectile: Sprite, hp: number) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += hp
    destroySprite(projectile)
}
function welcome () {
    game.splash("Survive " + PLAY_TIME + " seconds!")
}
function animateShotL1 (sprite: Sprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . 4 4 2 4 5 4 . 
        . . . . . 4 5 4 5 1 5 4 
        . . . . 4 5 4 5 4 9 1 5 
        . . 4 . . 4 5 4 5 1 5 4 
        . . . . . . 4 2 4 5 4 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 4 4 4 2 4 5 4 . 
        . . . . . 4 5 4 5 1 5 4 
        . 4 . 4 4 5 4 5 4 9 1 5 
        . . . . . 4 5 4 5 1 5 4 
        . . . . . . 4 2 4 5 4 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 4 . 4 2 4 5 4 . 
        . . . 4 . 4 5 4 5 1 5 4 
        4 . 4 . 4 5 4 5 4 9 1 5 
        . . . . . 4 5 4 5 1 5 4 
        . . . . . . 4 2 4 5 4 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . 4 2 4 5 4 . 
        . . 4 4 . 4 5 4 5 1 5 4 
        . 4 . . 4 5 4 5 4 9 1 5 
        . . . . . 4 5 4 5 1 5 4 
        . . . . . 4 4 2 4 5 4 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . 4 2 4 5 4 . 
        . . 4 . . 4 5 4 5 1 5 4 
        4 4 . . 4 5 4 5 4 9 1 5 
        . . . . . 4 5 4 5 1 5 4 
        . . . . 4 4 4 2 4 5 4 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . 4 2 4 5 4 . 
        . . . . . 4 5 4 5 1 5 4 
        4 4 . . 4 5 4 5 4 9 1 5 
        . . . 4 . 4 5 4 5 1 5 4 
        . . . . 4 . 4 2 4 5 4 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . 4 2 4 5 4 . 
        . . . . . 4 5 4 5 1 5 4 
        4 . . . 4 5 4 5 4 9 1 5 
        . . 4 4 . 4 5 4 5 1 5 4 
        . . . . . . 4 2 4 5 4 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `],
    50,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ShieldPower, function (sprite, otherSprite) {
    destroySprite(otherSprite)
    spawnShield()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    damage(sprite, otherSprite, -10)
})
let statusbar: StatusBarSprite = null
let camera: Sprite = null
let _shield_frame_duration: number = []
let projectile: Sprite = null
let _virus: Sprite = null
let _enemy: Sprite = null
let _nil: Sprite = null
let _shield_level: number = []
let ship: Sprite = null
let wall: Sprite = null
let MIN_SCORE: number = []
let PLAY_TIME: number = []
let DAMAGE_FACTOR: number = []
let SHOOT_DELAY: number = []
let SHIELD_POWER: number = []
initX()
music.setVolume(50)
SHIELD_POWER = 4
SHOOT_DELAY = 250
DAMAGE_FACTOR = 1
PLAY_TIME = 10
MIN_SCORE = 0
let SPAWN_RATE = 1
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
ship = spawnAt(sprites.create(img`
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
    `, SpriteKind.Player), 0, 10, 50)
controller.moveSprite(ship, 100, 100)
ship.setFlag(SpriteFlag.StayInScreen, true)
spawnAt(sprites.create(img`
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
animateShipL1()
createStatus(ship, 100)
welcome()
game.onUpdateInterval(randint(100, 1000), function () {
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
game.onUpdateInterval(100, function () {
    // trigger score check
    checkScore()
    if (randint(0, 10) < SPAWN_RATE) {
        SPAWN_RATE = Math.min(SPAWN_RATE * 1.01, 10)
        _enemy = spawn(sprites.create(img`
            . 
            `, SpriteKind.Enemy), -50)
        createStatus(_enemy, 100)
        animateEnemy(_enemy)
    }
})
game.onUpdateInterval(100, function () {
    if (randint(0, 10) < SPAWN_RATE) {
        if (false) {
            _virus = spawnAt(sprites.create(img`
                . 
                `, SpriteKind.Virus), -50, _enemy.x, _enemy.y)
            createStatus(_virus, 25)
            animateVirus(_virus)
            _virus.follow(ship, 20)
        }
    }
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
