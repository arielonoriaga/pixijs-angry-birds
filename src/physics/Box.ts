import {
  Bodies, Body, IChamferableBodyDefinition,
} from 'matter-js'
import {
  Container, Graphics, Sprite,
} from 'pixi.js'

type BoxProps = {
  x: number
  y: number
  width: number
  height: number
  options?: IChamferableBodyDefinition
  hitboxColor?: number
}

export default class Box {
  body: Body
  sprite: Sprite | Container
  hitbox: Graphics

  constructor(props: BoxProps) {
    this.body = Bodies.rectangle(
      props.x,
      props.y,
      props.width,
      props.height,
      props.options,
    )

    this.sprite = new Container()
    this.hitbox = new Graphics()
    this.hitbox.rect(
      0,
      0,
      props.width,
      props.height,
    )
    this.hitbox.fill({ color: props.hitboxColor || 0x00fff6 })
    this.hitbox.stroke({ color: 0x000000, width: 2 })
    this.hitbox.pivot.set(props.width / 2, props.height / 2)

    this.sprite.addChild(this.hitbox)
  }
}
