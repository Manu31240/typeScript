import { Util } from './UtilModule';

export enum Music { JAZZ, ROCK };

export class Album {
  constructor(public title: string) { }

  toString(): string {
    return this.title;
  }
}

interface MusicianI {
  addAlbum: (Album) => void;
}

export class Musician implements MusicianI {
  private _style: Music;
  private _albums: Album[] = [];

  constructor(public firstName: string, public lastName: string, public age: number) { }

  get style(): Music { return this._style; }
  set style(value: Music) { this._style = value; }

  get albums(): Album[] { return this._albums; }
  set albums(value: Album[]) { this._albums = value; }

  toString(): string {
    return `${this.firstName} ${this.lastName} plays ${Music[this.style]}`;
  }

  addAlbum(album: Album) {
    this._albums.push(album);
  }
}

export class JazzMusician extends Musician {
  constructor(public firstName: string, public lastName: string, public age: number) {
    super(firstName, lastName, age);
    this.style = Music.JAZZ;
  }
  @log
  public swing() {return 'I\'m swinging!'; }
}

export class RockStar extends Musician {
  constructor(public firstName: string, public lastName: string, public age: number) {
    super(firstName, lastName, age);
    this.style = Music.ROCK;
  }
  @log
  shout() { return 'I\'m shouting!'; }
}

function display(objects: any[]) {
  objects.forEach(element => {
    console.log(element.toString());
  });
}
function log(target: any, propertyKey: string, descriptor:
    TypedPropertyDescriptor<()=>string>): TypedPropertyDescriptor<()=>string>{
  const originalMethod = descriptor.value;

  descriptor.value = function() {
    var result = originalMethod();
    Util.log(result);
    return result;
  };
  return descriptor;
}