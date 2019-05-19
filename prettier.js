class Left {constructor(val) {this._value = val;};map(){
      // Left is the sad path
// so we do nothing
return this
}join() 
{
// On the sad path, we don't
// do anything with join
return this;  }chain() {
// Boring sad path,
// do nothing.
return this;}
ap() {
return this;
}toString() {const str = this._value.toString();return `Left(${$str})`;}static of(val) {
return new Left(val);
}
}class Right {
constructor(val) {
this._value = val;
}map(fn) {
return new Right(
fn(this._value)
);
}join() {
if ((this._value instanceof Left)
|| (this._value instanceof Right)) {
return this._value;
}
return this;
}chain(fn) {
return fn(this._value);
}ap(otherEither) {
const functionToRun = otherEither._value;
return this.map(functionToRun);
}toString() {
const str = this._value.toString();
return `Right(${str})`;
}static of(val) {return new Right(val);
}}
const val = Right.of(23)
console.log(val.toString())