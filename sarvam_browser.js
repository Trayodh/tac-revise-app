(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SarvamAI = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":1,"buffer":3,"ieee754":4}],4:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],5:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],6:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeClientOptions = normalizeClientOptions;
exports.normalizeClientOptionsWithAuth = normalizeClientOptionsWithAuth;
const HeaderAuthProvider_js_1 = require("./auth/HeaderAuthProvider.js");
const headers_js_1 = require("./core/headers.js");
const core = __importStar(require("./core/index.js"));
function normalizeClientOptions(options) {
    const headers = (0, headers_js_1.mergeHeaders)({
        "X-Fern-Language": "JavaScript",
        "X-Fern-SDK-Name": "sarvamai",
        "X-Fern-SDK-Version": "1.1.7",
        "User-Agent": "sarvamai/1.1.7",
        "X-Fern-Runtime": core.RUNTIME.type,
        "X-Fern-Runtime-Version": core.RUNTIME.version,
    }, options === null || options === void 0 ? void 0 : options.headers);
    return Object.assign(Object.assign({}, options), { logging: core.logging.createLogger(options === null || options === void 0 ? void 0 : options.logging), headers });
}
function normalizeClientOptionsWithAuth(options) {
    var _a;
    const normalized = normalizeClientOptions(options);
    const normalizedWithNoOpAuthProvider = withNoOpAuthProvider(normalized);
    (_a = normalized.authProvider) !== null && _a !== void 0 ? _a : (normalized.authProvider = new HeaderAuthProvider_js_1.HeaderAuthProvider(normalizedWithNoOpAuthProvider));
    return normalized;
}
function withNoOpAuthProvider(options) {
    return Object.assign(Object.assign({}, options), { authProvider: new core.NoOpAuthProvider() });
}

},{"./auth/HeaderAuthProvider.js":202,"./core/headers.js":233,"./core/index.js":234}],7:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SarvamAIClient = void 0;
const Client_js_1 = require("./api/resources/chat/client/Client.js");
const Client_js_2 = require("./api/resources/documentIntelligence/client/Client.js");
const Client_js_3 = require("./api/resources/pronunciationDictionary/client/Client.js");
const Client_js_4 = require("./api/resources/speechToText/client/Client.js");
const Client_js_5 = require("./api/resources/speechToTextJob/client/Client.js");
const Client_js_6 = require("./api/resources/speechToTextStreaming/client/Client.js");
const Client_js_7 = require("./api/resources/speechToTextTranslateJob/client/Client.js");
const Client_js_8 = require("./api/resources/speechToTextTranslateStreaming/client/Client.js");
const Client_js_9 = require("./api/resources/text/client/Client.js");
const Client_js_10 = require("./api/resources/textToSpeech/client/Client.js");
const Client_js_11 = require("./api/resources/textToSpeechStreaming/client/Client.js");
const BaseClient_js_1 = require("./BaseClient.js");
class SarvamAIClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    get text() {
        var _a;
        return ((_a = this._text) !== null && _a !== void 0 ? _a : (this._text = new Client_js_9.TextClient(this._options)));
    }
    get speechToText() {
        var _a;
        return ((_a = this._speechToText) !== null && _a !== void 0 ? _a : (this._speechToText = new Client_js_4.SpeechToTextClient(this._options)));
    }
    get textToSpeech() {
        var _a;
        return ((_a = this._textToSpeech) !== null && _a !== void 0 ? _a : (this._textToSpeech = new Client_js_10.TextToSpeechClient(this._options)));
    }
    get pronunciationDictionary() {
        var _a;
        return ((_a = this._pronunciationDictionary) !== null && _a !== void 0 ? _a : (this._pronunciationDictionary = new Client_js_3.PronunciationDictionaryClient(this._options)));
    }
    get chat() {
        var _a;
        return ((_a = this._chat) !== null && _a !== void 0 ? _a : (this._chat = new Client_js_1.ChatClient(this._options)));
    }
    get speechToTextJob() {
        var _a;
        return ((_a = this._speechToTextJob) !== null && _a !== void 0 ? _a : (this._speechToTextJob = new Client_js_5.SpeechToTextJobClient(this._options)));
    }
    get speechToTextTranslateJob() {
        var _a;
        return ((_a = this._speechToTextTranslateJob) !== null && _a !== void 0 ? _a : (this._speechToTextTranslateJob = new Client_js_7.SpeechToTextTranslateJobClient(this._options)));
    }
    get documentIntelligence() {
        var _a;
        return ((_a = this._documentIntelligence) !== null && _a !== void 0 ? _a : (this._documentIntelligence = new Client_js_2.DocumentIntelligenceClient(this._options)));
    }
    get speechToTextStreaming() {
        var _a;
        return ((_a = this._speechToTextStreaming) !== null && _a !== void 0 ? _a : (this._speechToTextStreaming = new Client_js_6.SpeechToTextStreamingClient(this._options)));
    }
    get speechToTextTranslateStreaming() {
        var _a;
        return ((_a = this._speechToTextTranslateStreaming) !== null && _a !== void 0 ? _a : (this._speechToTextTranslateStreaming = new Client_js_8.SpeechToTextTranslateStreamingClient(this._options)));
    }
    get textToSpeechStreaming() {
        var _a;
        return ((_a = this._textToSpeechStreaming) !== null && _a !== void 0 ? _a : (this._textToSpeechStreaming = new Client_js_11.TextToSpeechStreamingClient(this._options)));
    }
}
exports.SarvamAIClient = SarvamAIClient;

},{"./BaseClient.js":6,"./api/resources/chat/client/Client.js":18,"./api/resources/documentIntelligence/client/Client.js":23,"./api/resources/pronunciationDictionary/client/Client.js":28,"./api/resources/speechToText/client/Client.js":65,"./api/resources/speechToTextJob/client/Client.js":32,"./api/resources/speechToTextStreaming/client/Client.js":37,"./api/resources/speechToTextTranslateJob/client/Client.js":49,"./api/resources/speechToTextTranslateStreaming/client/Client.js":54,"./api/resources/text/client/Client.js":80,"./api/resources/textToSpeech/client/Client.js":76,"./api/resources/textToSpeechStreaming/client/Client.js":69}],8:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const errors = __importStar(require("../../errors/index.js"));
class BadRequestError extends errors.SarvamAIError {
    constructor(body, rawResponse) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
    }
}
exports.BadRequestError = BadRequestError;

},{"../../errors/index.js":253}],9:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTooLargeError = void 0;
const errors = __importStar(require("../../errors/index.js"));
class ContentTooLargeError extends errors.SarvamAIError {
    constructor(body, rawResponse) {
        super({
            message: "ContentTooLargeError",
            statusCode: 413,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
    }
}
exports.ContentTooLargeError = ContentTooLargeError;

},{"../../errors/index.js":253}],10:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
const errors = __importStar(require("../../errors/index.js"));
class ForbiddenError extends errors.SarvamAIError {
    constructor(body, rawResponse) {
        super({
            message: "ForbiddenError",
            statusCode: 403,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
    }
}
exports.ForbiddenError = ForbiddenError;

},{"../../errors/index.js":253}],11:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const errors = __importStar(require("../../errors/index.js"));
class InternalServerError extends errors.SarvamAIError {
    constructor(body, rawResponse) {
        super({
            message: "InternalServerError",
            statusCode: 500,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
    }
}
exports.InternalServerError = InternalServerError;

},{"../../errors/index.js":253}],12:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const errors = __importStar(require("../../errors/index.js"));
class NotFoundError extends errors.SarvamAIError {
    constructor(body, rawResponse) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
    }
}
exports.NotFoundError = NotFoundError;

},{"../../errors/index.js":253}],13:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnavailableError = void 0;
const errors = __importStar(require("../../errors/index.js"));
class ServiceUnavailableError extends errors.SarvamAIError {
    constructor(body, rawResponse) {
        super({
            message: "ServiceUnavailableError",
            statusCode: 503,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
    }
}
exports.ServiceUnavailableError = ServiceUnavailableError;

},{"../../errors/index.js":253}],14:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooManyRequestsError = void 0;
const errors = __importStar(require("../../errors/index.js"));
class TooManyRequestsError extends errors.SarvamAIError {
    constructor(body, rawResponse) {
        super({
            message: "TooManyRequestsError",
            statusCode: 429,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
    }
}
exports.TooManyRequestsError = TooManyRequestsError;

},{"../../errors/index.js":253}],15:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityError = void 0;
const errors = __importStar(require("../../errors/index.js"));
class UnprocessableEntityError extends errors.SarvamAIError {
    constructor(body, rawResponse) {
        super({
            message: "UnprocessableEntityError",
            statusCode: 422,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
    }
}
exports.UnprocessableEntityError = UnprocessableEntityError;

},{"../../errors/index.js":253}],16:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./BadRequestError.js"), exports);
__exportStar(require("./ContentTooLargeError.js"), exports);
__exportStar(require("./ForbiddenError.js"), exports);
__exportStar(require("./InternalServerError.js"), exports);
__exportStar(require("./NotFoundError.js"), exports);
__exportStar(require("./ServiceUnavailableError.js"), exports);
__exportStar(require("./TooManyRequestsError.js"), exports);
__exportStar(require("./UnprocessableEntityError.js"), exports);

},{"./BadRequestError.js":8,"./ContentTooLargeError.js":9,"./ForbiddenError.js":10,"./InternalServerError.js":11,"./NotFoundError.js":12,"./ServiceUnavailableError.js":13,"./TooManyRequestsError.js":14,"./UnprocessableEntityError.js":15}],17:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./errors/index.js"), exports);
__exportStar(require("./resources/index.js"), exports);
__exportStar(require("./types/index.js"), exports);

},{"./errors/index.js":16,"./resources/index.js":27,"./types/index.js":201}],18:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const RawResponse_js_1 = require("../../../../core/fetcher/RawResponse.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const errors = __importStar(require("../../../../errors/index.js"));
const SarvamAI = __importStar(require("../../../index.js"));
class ChatClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    completions(request, requestOptions) {
        if (request.stream === true) {
            return this.__completionsStream(request, requestOptions);
        }
        return core.HttpResponsePromise.fromPromise(this.__completions(request, requestOptions));
    }
    __completions(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "v1/chat/completions"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                this._throwStatusCodeError(_response.error.statusCode, _response.error.body, _response.rawResponse);
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /v1/chat/completions.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    __completionsStream(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = {};
            if (_authRequest.headers) {
                for (const [key, value] of Object.entries(_authRequest.headers)) {
                    if (value != null) {
                        _headers[key] = String(value);
                    }
                }
            }
            if ((_a = this._options) === null || _a === void 0 ? void 0 : _a.headers) {
                for (const [key, value] of Object.entries(this._options.headers)) {
                    if (value != null) {
                        _headers[key] = String(value);
                    }
                }
            }
            if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers) {
                for (const [key, value] of Object.entries(requestOptions.headers)) {
                    if (value != null) {
                        _headers[key] = String(value);
                    }
                }
            }
            _headers["Content-Type"] = "application/json";
            _headers["Accept"] = "text/event-stream";
            const baseUrl = (_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base;
            const url = core.url.join(baseUrl, "v1/chat/completions");
            const fetchFn = (_e = (_d = this._options) === null || _d === void 0 ? void 0 : _d.fetch) !== null && _e !== void 0 ? _e : (typeof fetch !== "undefined" ? fetch : undefined);
            if (!fetchFn) {
                throw new Error("No fetch function available. Please provide a fetch function in client options.");
            }
            const response = yield fetchFn(url, {
                method: "POST",
                headers: _headers,
                body: JSON.stringify(request),
                signal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (!response.ok) {
                let errorBody;
                try {
                    errorBody = yield response.json();
                }
                catch (_f) {
                    errorBody = yield response.text();
                }
                this._throwStatusCodeError(response.status, errorBody, (0, RawResponse_js_1.toRawResponse)(response));
            }
            if (!response.body) {
                throw new errors.SarvamAIError({
                    message: "Response body is null for streaming request.",
                });
            }
            return this._parseSSEStream(response.body);
        });
    }
    _parseSSEStream(body) {
        return __asyncGenerator(this, arguments, function* _parseSSEStream_1() {
            var _a;
            const reader = body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";
            try {
                while (true) {
                    const { done, value } = yield __await(reader.read());
                    if (done)
                        break;
                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split("\n");
                    buffer = (_a = lines.pop()) !== null && _a !== void 0 ? _a : "";
                    for (const line of lines) {
                        const trimmed = line.trim();
                        if (!trimmed)
                            continue;
                        if (trimmed.startsWith("data: ")) {
                            const dataStr = trimmed.slice(6);
                            if (dataStr.trim() === "[DONE]") {
                                return yield __await(void 0);
                            }
                            try {
                                const chunk = JSON.parse(dataStr);
                                yield yield __await(chunk);
                            }
                            catch (_b) {
                                continue;
                            }
                        }
                    }
                }
                if (buffer.trim()) {
                    const trimmed = buffer.trim();
                    if (trimmed.startsWith("data: ")) {
                        const dataStr = trimmed.slice(6);
                        if (dataStr.trim() !== "[DONE]") {
                            try {
                                const chunk = JSON.parse(dataStr);
                                yield yield __await(chunk);
                            }
                            catch (_c) {
                                // ignore parse errors
                            }
                        }
                    }
                }
            }
            finally {
                reader.releaseLock();
            }
        });
    }
    _throwStatusCodeError(statusCode, body, rawResponse) {
        switch (statusCode) {
            case 400:
                throw new SarvamAI.BadRequestError(body, rawResponse);
            case 403:
                throw new SarvamAI.ForbiddenError(body, rawResponse);
            case 422:
                throw new SarvamAI.UnprocessableEntityError(body, rawResponse);
            case 429:
                throw new SarvamAI.TooManyRequestsError(body, rawResponse);
            case 500:
                throw new SarvamAI.InternalServerError(body, rawResponse);
            default:
                throw new errors.SarvamAIError({
                    statusCode,
                    body,
                    rawResponse,
                });
        }
    }
}
exports.ChatClient = ChatClient;

},{"../../../../BaseClient.js":6,"../../../../core/fetcher/RawResponse.js":214,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"../../../../errors/index.js":253,"../../../index.js":17}],19:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./requests/index.js"), exports);

},{"./requests/index.js":20}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],21:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./client/index.js"), exports);

},{"./client/index.js":19}],22:[function(require,module,exports){
"use strict";
// Document Intelligence Job wrapper with convenience methods (matching Python SDK API)
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentIntelligenceJob = void 0;
/**
 * A convenience wrapper around a Document Intelligence job that provides
 * a fluent API matching the Python SDK.
 *
 * @example
 * ```typescript
 * const job = await client.documentIntelligence.createJob({
 *     language: "hi-IN",
 *     outputFormat: "html"
 * });
 *
 * await job.uploadFile("./document.pdf");
 * await job.start();
 * const status = await job.waitUntilComplete();
 * const metrics = job.getPageMetrics();
 * await job.downloadOutput("./output.html");
 * ```
 */
class DocumentIntelligenceJob {
    constructor(client, jobId, options = {}) {
        var _a, _b;
        this._status = null;
        this._client = client;
        this._jobId = jobId;
        this._pollingIntervalMs = (_a = options.pollingIntervalMs) !== null && _a !== void 0 ? _a : 2000;
        this._maxPollingAttempts = (_b = options.maxPollingAttempts) !== null && _b !== void 0 ? _b : 150;
    }
    /** The unique job ID */
    get jobId() {
        return this._jobId;
    }
    /** Alias for jobId (Python SDK compatibility) */
    get job_id() {
        return this._jobId;
    }
    /** The last fetched status (may be null if not yet polled) */
    get status() {
        return this._status;
    }
    /**
     * Upload a file to the job using a presigned URL.
     * Supports file path (Node.js) or File/Blob (browser).
     */
    uploadFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get filename
            let filename;
            let fileContent;
            if (typeof file === "string") {
                // Node.js: file path
                const fs = yield Promise.resolve().then(() => __importStar(require("fs")));
                const path = yield Promise.resolve().then(() => __importStar(require("path")));
                filename = path.basename(file);
                const buffer = yield fs.promises.readFile(file);
                fileContent = buffer;
            }
            else if (file instanceof File) {
                // Browser: File object
                filename = file.name;
                fileContent = file;
            }
            else {
                // Blob - need a filename
                filename = "document.pdf";
                fileContent = file;
            }
            // Get upload link
            const uploadResponse = yield this._client.getUploadLinks({
                job_id: this._jobId,
                files: [filename],
            });
            const uploadUrls = uploadResponse.upload_urls;
            if (!uploadUrls || Object.keys(uploadUrls).length === 0) {
                throw new Error("No upload URL returned from server");
            }
            // Get the first upload URL
            const uploadInfo = Object.values(uploadUrls)[0];
            if (!(uploadInfo === null || uploadInfo === void 0 ? void 0 : uploadInfo.file_url)) {
                throw new Error("Invalid upload URL response");
            }
            // Upload the file using PUT request
            const headers = {
                "x-ms-blob-type": "BlockBlob",
            };
            // Add any metadata headers from the response
            if (uploadInfo.file_metadata) {
                for (const [key, value] of Object.entries(uploadInfo.file_metadata)) {
                    if (typeof value === "string") {
                        headers[key] = value;
                    }
                }
            }
            const response = yield fetch(uploadInfo.file_url, {
                method: "PUT",
                headers,
                body: fileContent,
            });
            if (!response.ok) {
                throw new Error(`Failed to upload file: ${response.status} ${response.statusText}`);
            }
        });
    }
    /**
     * Start processing the job.
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._client.start(this._jobId);
            this._status = response;
            return response;
        });
    }
    /**
     * Get the current status of the job.
     */
    getStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._client.getStatus(this._jobId);
            this._status = response;
            return response;
        });
    }
    /**
     * Poll until the job completes (Completed, PartiallyCompleted, or Failed).
     */
    waitUntilComplete() {
        return __awaiter(this, void 0, void 0, function* () {
            const terminalStates = ["Completed", "PartiallyCompleted", "Failed"];
            let attempts = 0;
            while (attempts < this._maxPollingAttempts) {
                const status = yield this.getStatus();
                if (terminalStates.includes(status.job_state)) {
                    return status;
                }
                yield this._sleep(this._pollingIntervalMs);
                attempts++;
            }
            throw new Error(`Job did not complete within ${this._maxPollingAttempts * this._pollingIntervalMs / 1000} seconds`);
        });
    }
    /**
     * Get page-level metrics from the last status.
     */
    getPageMetrics() {
        var _a, _b, _c, _d, _e, _f;
        if (!this._status) {
            throw new Error("No status available. Call getStatus() or waitUntilComplete() first.");
        }
        const jobDetails = (_a = this._status.job_details) === null || _a === void 0 ? void 0 : _a[0];
        return {
            totalPages: (_b = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.total_pages) !== null && _b !== void 0 ? _b : 0,
            pagesProcessed: (_c = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.pages_processed) !== null && _c !== void 0 ? _c : 0,
            pagesSucceeded: (_d = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.pages_succeeded) !== null && _d !== void 0 ? _d : 0,
            pagesFailed: (_e = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.pages_failed) !== null && _e !== void 0 ? _e : 0,
            pageErrors: (_f = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.page_errors) !== null && _f !== void 0 ? _f : [],
        };
    }
    /**
     * Download the output file(s) to the specified path.
     * The output is a ZIP file containing the processed documents.
     *
     * @param outputPath - Path where the output file will be saved
     * @returns The path to the downloaded file
     */
    downloadOutput(outputPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const downloadResponse = yield this._client.getDownloadLinks(this._jobId);
            const downloadUrls = downloadResponse.download_urls;
            if (!downloadUrls || Object.keys(downloadUrls).length === 0) {
                throw new Error("No download URLs available. Job may not be complete.");
            }
            // Download the first output file
            const downloadInfo = Object.values(downloadUrls)[0];
            if (!(downloadInfo === null || downloadInfo === void 0 ? void 0 : downloadInfo.file_url)) {
                throw new Error("Invalid download URL response");
            }
            // Fetch with timeout (matching Python SDK's 300s timeout)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 300000);
            try {
                const response = yield fetch(downloadInfo.file_url, {
                    signal: controller.signal,
                });
                if (!response.ok) {
                    throw new Error(`Failed to download file: ${response.status} ${response.statusText}`);
                }
                // Use arrayBuffer for binary data (ZIP files)
                const arrayBuffer = yield response.arrayBuffer();
                const content = new Uint8Array(arrayBuffer);
                // Save to file (Node.js) or trigger download (browser)
                if (typeof window === "undefined") {
                    // Node.js
                    const fs = yield Promise.resolve().then(() => __importStar(require("fs")));
                    const path = yield Promise.resolve().then(() => __importStar(require("path")));
                    // Ensure output directory exists (matching Python SDK behavior)
                    const outputDir = path.dirname(outputPath);
                    if (outputDir) {
                        yield fs.promises.mkdir(outputDir, { recursive: true });
                    }
                    yield fs.promises.writeFile(outputPath, content);
                }
                else {
                    // Browser - trigger download
                    const blob = new Blob([content], { type: "application/zip" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = outputPath;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    URL.revokeObjectURL(url);
                }
                return outputPath;
            }
            finally {
                clearTimeout(timeoutId);
            }
        });
    }
    /**
     * Get download links for the output files.
     */
    getDownloadLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.getDownloadLinks(this._jobId);
        });
    }
    _sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
exports.DocumentIntelligenceJob = DocumentIntelligenceJob;

},{"fs":2,"path":2}],23:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentIntelligenceClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const errors = __importStar(require("../../../../errors/index.js"));
const SarvamAI = __importStar(require("../../../index.js"));
const DocumentIntelligenceJob_js_1 = require("../DocumentIntelligenceJob.js");
class DocumentIntelligenceClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    /**
     * Creates a new document intelligence job.
     *
     * **Supported Languages (BCP-47 format):**
     * - `hi-IN`: Hindi (default)
     * - `en-IN`: English
     * - `bn-IN`: Bengali
     * - `gu-IN`: Gujarati
     * - `kn-IN`: Kannada
     * - `ml-IN`: Malayalam
     * - `mr-IN`: Marathi
     * - `or-IN`: Odia
     * - `pa-IN`: Punjabi
     * - `ta-IN`: Tamil
     * - `te-IN`: Telugu
     * - `ur-IN`: Urdu
     * - `as-IN`: Assamese
     * - `bodo-IN`: Bodo
     * - `doi-IN`: Dogri
     * - `ks-IN`: Kashmiri
     * - `kok-IN`: Konkani
     * - `mai-IN`: Maithili
     * - `mni-IN`: Manipuri
     * - `ne-IN`: Nepali
     * - `sa-IN`: Sanskrit
     * - `sat-IN`: Santali
     * - `sd-IN`: Sindhi
     *
     * **Output Formats:**
     * - `html`: Structured HTML with layout preservation (default)
     * - `md`: Markdown format
     *
     * **Prompt Types:**
     * Customize how specific content types are processed:
     * - `default_ocr`: Standard text extraction (default for all text blocks)
     * - `table_to_html`: Convert tables to HTML format
     * - `table_to_markdown`: Convert tables to Markdown format
     * - `chart_to_markdown`: Extract chart data as Markdown table
     * - `chart_to_json`: Extract chart data as JSON
     * - `describe_image`: Generate image caption
     * - `caption_en`: Same as describe_image (English)
     * - `caption_in`: Caption in document language
     *
     * **Webhook Callback:**
     * Optionally provide a callback URL to receive notification when processing completes.
     *
     * @param {SarvamAI.DocumentIntelligenceJobRequest} request
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.initialise()
     */
    initialise(request = {}, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__initialise(request, requestOptions));
    }
    /**
     * Creates a new document intelligence job with a fluent API (matching Python SDK).
     *
     * Returns a {@link DocumentIntelligenceJob} instance with convenience methods:
     * - `uploadFile(path)` - Upload a file
     * - `start()` - Start processing
     * - `waitUntilComplete()` - Poll until done
     * - `getPageMetrics()` - Get processing metrics
     * - `downloadOutput(path)` - Download results
     *
     * @param {DocumentIntelligenceJobOptions} options - Job configuration options
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration
     *
     * @example
     * ```typescript
     * const job = await client.documentIntelligence.createJob({
     *     language: "hi-IN",
     *     outputFormat: "html"
     * });
     *
     * await job.uploadFile("./document.pdf");
     * await job.start();
     * const status = await job.waitUntilComplete();
     * console.log(`Completed: ${status.job_state}`);
     *
     * const metrics = job.getPageMetrics();
     * console.log(`Processed ${metrics.pagesSucceeded} pages`);
     *
     * await job.downloadOutput("./output.html");
     * ```
     */
    createJob() {
        return __awaiter(this, arguments, void 0, function* (options = {}, requestOptions) {
            // Build the request from simplified options
            const request = {};
            if (options.language || options.outputFormat) {
                request.job_parameters = {
                    language: options.language,
                    output_format: options.outputFormat,
                };
            }
            if (options.callbackUrl) {
                request.callback = {
                    url: options.callbackUrl,
                };
            }
            // Create the job
            const response = yield this.initialise(request, requestOptions);
            // Return a job wrapper with convenience methods
            return new DocumentIntelligenceJob_js_1.DocumentIntelligenceJob(this, response.job_id, options);
        });
    }
    __initialise() {
        return __awaiter(this, arguments, void 0, function* (request = {}, requestOptions) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "doc-digitization/job/v1"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /doc-digitization/job/v1.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Returns presigned URLs for uploading input files.
     *
     * **File Constraints:**
     * - Exactly one file required (PDF or ZIP)
     * - PDF files: `.pdf` extension
     * - ZIP files: `.zip` extension
     *
     * @param {SarvamAI.DocDigitizationUploadFilesRequest} request
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.getUploadLinks({
     *         job_id: "job_id",
     *         files: ["files"]
     *     })
     */
    getUploadLinks(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__getUploadLinks(request, requestOptions));
    }
    __getUploadLinks(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "doc-digitization/job/v1/upload-files"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /doc-digitization/job/v1/upload-files.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Validates the uploaded file and starts processing.
     *
     * **Validation Checks:**
     * - File must be uploaded before starting
     * - File size must not exceed 200 MB
     * - PDF must be parseable by the PDF parser
     * - ZIP must contain only JPEG/PNG images
     * - ZIP must be flat (no nested folders beyond one level)
     * - ZIP must contain at least one valid image
     * - Page/image count must not exceed 500
     * - User must have sufficient credits
     *
     * **Processing:**
     * Job runs asynchronously. Poll the status endpoint or use webhook callback for completion notification.
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.start("job_id")
     */
    start(job_id, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__start(job_id, requestOptions));
    }
    __start(job_id, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, `doc-digitization/job/v1/${core.url.encodePathParam(job_id)}/start`),
                method: "POST",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /doc-digitization/job/v1/{job_id}/start.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Returns the current status of a job with page-level metrics.
     *
     * **Job States:**
     * - `Accepted`: Job created, awaiting file upload
     * - `Pending`: File uploaded, waiting to start
     * - `Running`: Processing in progress
     * - `Completed`: All pages processed successfully
     * - `PartiallyCompleted`: Some pages succeeded, some failed
     * - `Failed`: All pages failed or job-level error
     *
     * **Page Metrics:**
     * Response includes detailed progress: total pages, pages processed, succeeded, failed, and per-page errors.
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.getStatus("job_id")
     */
    getStatus(job_id, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__getStatus(job_id, requestOptions));
    }
    __getStatus(job_id, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, `doc-digitization/job/v1/${core.url.encodePathParam(job_id)}/status`),
                method: "GET",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling GET /doc-digitization/job/v1/{job_id}/status.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Returns presigned URLs for downloading output files.
     *
     * **Prerequisites:**
     * - Job must be in `Completed` or `PartiallyCompleted` state
     * - Failed jobs have no output available
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.getDownloadLinks("job_id")
     */
    getDownloadLinks(job_id, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__getDownloadLinks(job_id, requestOptions));
    }
    __getDownloadLinks(job_id, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, `doc-digitization/job/v1/${core.url.encodePathParam(job_id)}/download-files`),
                method: "POST",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /doc-digitization/job/v1/{job_id}/download-files.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
}
exports.DocumentIntelligenceClient = DocumentIntelligenceClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"../../../../errors/index.js":253,"../../../index.js":17,"../DocumentIntelligenceJob.js":22}],24:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./requests/index.js":25,"dup":19}],25:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],26:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./client/index.js"), exports);
__exportStar(require("./DocumentIntelligenceJob.js"), exports);

},{"./DocumentIntelligenceJob.js":22,"./client/index.js":24}],27:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToSpeechStreaming = exports.textToSpeech = exports.text = exports.speechToTextTranslateStreaming = exports.speechToTextTranslateJob = exports.speechToTextStreaming = exports.speechToTextJob = exports.speechToText = exports.pronunciationDictionary = exports.documentIntelligence = exports.chat = void 0;
__exportStar(require("./chat/client/requests/index.js"), exports);
exports.chat = __importStar(require("./chat/index.js"));
__exportStar(require("./documentIntelligence/client/requests/index.js"), exports);
exports.documentIntelligence = __importStar(require("./documentIntelligence/index.js"));
__exportStar(require("./pronunciationDictionary/client/requests/index.js"), exports);
exports.pronunciationDictionary = __importStar(require("./pronunciationDictionary/index.js"));
__exportStar(require("./speechToText/client/requests/index.js"), exports);
exports.speechToText = __importStar(require("./speechToText/index.js"));
__exportStar(require("./speechToTextJob/client/requests/index.js"), exports);
exports.speechToTextJob = __importStar(require("./speechToTextJob/index.js"));
exports.speechToTextStreaming = __importStar(require("./speechToTextStreaming/index.js"));
__exportStar(require("./speechToTextStreaming/types/index.js"), exports);
__exportStar(require("./speechToTextTranslateJob/client/requests/index.js"), exports);
exports.speechToTextTranslateJob = __importStar(require("./speechToTextTranslateJob/index.js"));
exports.speechToTextTranslateStreaming = __importStar(require("./speechToTextTranslateStreaming/index.js"));
__exportStar(require("./speechToTextTranslateStreaming/types/index.js"), exports);
__exportStar(require("./text/client/requests/index.js"), exports);
exports.text = __importStar(require("./text/index.js"));
__exportStar(require("./textToSpeech/client/requests/index.js"), exports);
exports.textToSpeech = __importStar(require("./textToSpeech/index.js"));
exports.textToSpeechStreaming = __importStar(require("./textToSpeechStreaming/index.js"));
__exportStar(require("./textToSpeechStreaming/types/index.js"), exports);

},{"./chat/client/requests/index.js":20,"./chat/index.js":21,"./documentIntelligence/client/requests/index.js":25,"./documentIntelligence/index.js":26,"./pronunciationDictionary/client/requests/index.js":30,"./pronunciationDictionary/index.js":31,"./speechToText/client/requests/index.js":67,"./speechToText/index.js":68,"./speechToTextJob/client/requests/index.js":35,"./speechToTextJob/index.js":36,"./speechToTextStreaming/index.js":40,"./speechToTextStreaming/types/index.js":48,"./speechToTextTranslateJob/client/requests/index.js":52,"./speechToTextTranslateJob/index.js":53,"./speechToTextTranslateStreaming/index.js":57,"./speechToTextTranslateStreaming/types/index.js":64,"./text/client/requests/index.js":82,"./text/index.js":83,"./textToSpeech/client/requests/index.js":78,"./textToSpeech/index.js":79,"./textToSpeechStreaming/index.js":72,"./textToSpeechStreaming/types/index.js":75}],28:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronunciationDictionaryClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const handleNonStatusCodeError_js_1 = require("../../../../errors/handleNonStatusCodeError.js");
const errors = __importStar(require("../../../../errors/index.js"));
const SarvamAI = __importStar(require("../../../index.js"));
class PronunciationDictionaryClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    /**
     * Retrieve a list of all pronunciation dictionary IDs associated with the authenticated user.
     *
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.pronunciationDictionary.list()
     */
    list(requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__list(requestOptions));
    }
    __list(requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "text-to-speech/pronunciation-dictionary"),
                method: "GET",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "GET", "/text-to-speech/pronunciation-dictionary");
        });
    }
    /**
     * Upload a `.json` file to create a new pronunciation dictionary. Only supported by **bulbul:v3**.
     *
     * The file should contain a JSON object with a `pronunciations` key mapping language codes to word-pronunciation pairs. See the [Pronunciation Dictionary guide](/api-reference-docs/api-guides-tutorials/text-to-speech/pronunciation-dictionary) for format details and examples.
     *
     * The returned `dictionary_id` can be passed as `dict_id` in text-to-speech requests (REST, HTTP Stream, and WebSocket).
     *
     * **Limits:** Max 10 dictionaries per user, 100 words per dictionary, 1 MB file size.
     *
     * @param {SarvamAI.CreatePronunciationDictionaryRequest} request
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.ContentTooLargeError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pronunciationDictionary.create({
     *         file: fs.createReadStream("/path/to/your/file")
     *     })
     */
    create(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }
    __create(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _body = yield core.newFormData();
            yield _body.appendFile("file", request.file);
            const _maybeEncodedRequest = yield _body.getRequest();
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, (0, headers_js_1.mergeOnlyDefinedHeaders)(Object.assign({}, _maybeEncodedRequest.headers)), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "text-to-speech/pronunciation-dictionary"),
                method: "POST",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "file",
                duplex: _maybeEncodedRequest.duplex,
                body: _maybeEncodedRequest.body,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 413:
                        throw new SarvamAI.ContentTooLargeError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "POST", "/text-to-speech/pronunciation-dictionary");
        });
    }
    /**
     * Update an existing pronunciation dictionary by uploading a JSON file. You can add new words, change existing pronunciations, or both — entries not included in the uploaded file remain unchanged.
     *
     * **Limits:** Max 100 words per dictionary, 1 MB file size.
     *
     * The response includes the `dictionary_id` and the updated pronunciation mappings for verification.
     *
     * @param {SarvamAI.UpdatePronunciationDictionaryRequest} request
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.NotFoundError}
     * @throws {@link SarvamAI.ContentTooLargeError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pronunciationDictionary.update({
     *         file: fs.createReadStream("/path/to/your/file"),
     *         dict_id: "dict_id"
     *     })
     */
    update(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__update(request, requestOptions));
    }
    __update(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _queryParams = {
                dict_id: request.dict_id,
            };
            const _body = yield core.newFormData();
            yield _body.appendFile("file", request.file);
            const _maybeEncodedRequest = yield _body.getRequest();
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, (0, headers_js_1.mergeOnlyDefinedHeaders)(Object.assign({}, _maybeEncodedRequest.headers)), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "text-to-speech/pronunciation-dictionary"),
                method: "PUT",
                headers: _headers,
                queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
                requestType: "file",
                duplex: _maybeEncodedRequest.duplex,
                body: _maybeEncodedRequest.body,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 404:
                        throw new SarvamAI.NotFoundError(_response.error.body, _response.rawResponse);
                    case 413:
                        throw new SarvamAI.ContentTooLargeError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "PUT", "/text-to-speech/pronunciation-dictionary");
        });
    }
    /**
     * Delete a pronunciation dictionary by its ID. Once deleted, the dictionary can no longer be referenced in text-to-speech requests.
     *
     * @param {SarvamAI.PronunciationDictionaryDeleteRequest} request
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.NotFoundError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.pronunciationDictionary.delete({
     *         dict_id: "dict_id"
     *     })
     */
    delete(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }
    __delete(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const { dict_id: dictId } = request;
            const _queryParams = {
                dict_id: dictId,
            };
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "text-to-speech/pronunciation-dictionary"),
                method: "DELETE",
                headers: _headers,
                queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 404:
                        throw new SarvamAI.NotFoundError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "DELETE", "/text-to-speech/pronunciation-dictionary");
        });
    }
    /**
     * Retrieve the full pronunciation mappings for a specific dictionary by its ID.
     *
     * Returns the pronunciation data organized by language code, where each language contains word-to-pronunciation pairs.
     *
     * @param {string} dict_id
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.NotFoundError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.pronunciationDictionary.get("dict_id")
     */
    get(dict_id, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__get(dict_id, requestOptions));
    }
    __get(dict_id, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, `text-to-speech/pronunciation-dictionary/${core.url.encodePathParam(dict_id)}`),
                method: "GET",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 404:
                        throw new SarvamAI.NotFoundError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "GET", "/text-to-speech/pronunciation-dictionary/{dict_id}");
        });
    }
}
exports.PronunciationDictionaryClient = PronunciationDictionaryClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"../../../../errors/handleNonStatusCodeError.js":252,"../../../../errors/index.js":253,"../../../index.js":17}],29:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./requests/index.js":30,"dup":19}],30:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],31:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./client/index.js":29,"dup":21}],32:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextJobClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const errors = __importStar(require("../../../../errors/index.js"));
const SarvamAI = __importStar(require("../../../index.js"));
const SpeechToTextJobInstance_js_1 = require("./SpeechToTextJobInstance.js");
class SpeechToTextJobClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    /**
     * Create a new speech to text bulk job and receive a job UUID and storage folder details for processing multiple audio files
     *
     * @param {SarvamAI.SpeechToTextJobRequest} request
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.initialise({
     *         job_parameters: {}
     *     })
     */
    initialise(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__initialise(request, requestOptions));
    }
    __initialise(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "speech-to-text/job/v1"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text/job/v1.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Retrieve the current status and details of a speech to text bulk job, including progress and file-level information.
     *
     * **Rate Limiting Best Practice:** To prevent rate limit errors and ensure optimal server performance, we recommend implementing a minimum 5-millisecond delay between consecutive status polling requests. This helps maintain system stability while still providing timely status updates.
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.getStatus("job_id")
     */
    getStatus(job_id, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__getStatus(job_id, requestOptions));
    }
    __getStatus(job_id, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, `speech-to-text/job/v1/${core.url.encodePathParam(job_id)}/status`),
                method: "GET",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling GET /speech-to-text/job/v1/{job_id}/status.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Start processing a speech to text bulk job after all audio files have been uploaded
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {SarvamAI.SpeechToTextJobStartRequest} request
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.start("job_id", {
     *         ptu_id: 1
     *     })
     */
    start(job_id, request = {}, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__start(job_id, request, requestOptions));
    }
    __start(job_id_1) {
        return __awaiter(this, arguments, void 0, function* (job_id, request = {}, requestOptions) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const { ptu_id: ptuId } = request;
            const _queryParams = {};
            if (ptuId != null) {
                _queryParams.ptu_id = ptuId.toString();
            }
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, `speech-to-text/job/v1/${core.url.encodePathParam(job_id)}/start`),
                method: "POST",
                headers: _headers,
                queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text/job/v1/{job_id}/start.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Generate presigned upload URLs for audio files that will be processed in a speech to text bulk job
     *
     * @param {SarvamAI.FilesRequest} request
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.getUploadLinks({
     *         job_id: "job_id",
     *         files: ["files"]
     *     })
     */
    getUploadLinks(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__getUploadLinks(request, requestOptions));
    }
    __getUploadLinks(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "speech-to-text/job/v1/upload-files"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text/job/v1/upload-files.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Generate presigned download URLs for the transcription output files of a completed speech to text bulk job
     *
     * @param {SarvamAI.FilesRequest} request
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.getDownloadLinks({
     *         job_id: "job_id",
     *         files: ["files"]
     *     })
     */
    getDownloadLinks(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__getDownloadLinks(request, requestOptions));
    }
    __getDownloadLinks(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "speech-to-text/job/v1/download-files"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text/job/v1/download-files.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Create a new Speech-to-Text bulk job.
     *
     * @param params - Job creation parameters
     * @param params.model - The model to use for transcription (default: "saarika:v2.5")
     * @param params.withDiarization - Whether to enable speaker diarization (default: false)
     * @param params.withTimestamps - Whether to include word-level timestamps (default: false)
     * @param params.languageCode - The language code of the input audio (e.g., "hi-IN", "bn-IN")
     * @param params.numSpeakers - The number of distinct speakers in the audio, if known
     * @param params.mode - Output mode for **saaras:v3** only (e.g. transcribe, translate, verbatim)
     * @param params.callback - Optional callback configuration to receive job completion events
     * @param requestOptions - Request-specific configuration
     * @returns A handle to the newly created Speech-to-Text job
     */
    createJob() {
        return __awaiter(this, arguments, void 0, function* (params = {}, requestOptions) {
            const { model = "saarika:v2.5", withDiarization = false, withTimestamps = false, languageCode, numSpeakers, mode, callback, } = params;
            const response = yield this.initialise({
                job_parameters: Object.assign({ language_code: languageCode, model: model, num_speakers: numSpeakers, with_diarization: withDiarization, with_timestamps: withTimestamps }, (mode !== undefined ? { mode } : {})),
                callback: callback,
            }, requestOptions);
            return new SpeechToTextJobInstance_js_1.SpeechToTextJobInstance(response.job_id, this);
        });
    }
    /**
     * Get an existing Speech-to-Text job handle by job ID.
     *
     * @param jobId - The job ID of the previously created Speech-to-Text job
     * @returns A job handle which can be used to check status or retrieve results
     */
    getJob(jobId) {
        return new SpeechToTextJobInstance_js_1.SpeechToTextJobInstance(jobId, this);
    }
}
exports.SpeechToTextJobClient = SpeechToTextJobClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"../../../../errors/index.js":253,"../../../index.js":17,"./SpeechToTextJobInstance.js":33}],33:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextJobInstance = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class SpeechToTextJobInstance {
    constructor(jobId, client) {
        this._jobId = jobId;
        this._client = client;
    }
    /**
     * Returns the job ID associated with this job instance.
     */
    get jobId() {
        return this._jobId;
    }
    /**
     * Upload input audio files for the speech-to-text job.
     *
     * @param filePaths - Array of full paths to local audio files
     * @param timeoutInSeconds - The maximum time to wait for the upload to complete (default: 60)
     * @returns Promise<boolean> - True if all files are uploaded successfully
     */
    uploadFiles(filePaths_1) {
        return __awaiter(this, arguments, void 0, function* (filePaths, _timeoutInSeconds = 60) {
            const fileNames = filePaths.map((p) => path.basename(p));
            const uploadLinksResponse = yield this._client.getUploadLinks({
                job_id: this._jobId,
                files: fileNames,
            });
            for (const filePath of filePaths) {
                const fileName = path.basename(filePath);
                const url = uploadLinksResponse.upload_urls[fileName].file_url;
                const fileBuffer = fs.readFileSync(filePath);
                const mimeType = this.getMimeType(filePath);
                const response = yield fetch(url, {
                    method: "PUT",
                    body: fileBuffer,
                    headers: {
                        "x-ms-blob-type": "BlockBlob",
                        "Content-Type": mimeType,
                    },
                });
                if (response.status < 200 || response.status > 226) {
                    throw new Error(`Upload failed for ${fileName}: ${response.status}`);
                }
            }
            return true;
        });
    }
    /**
     * Polls job status until it completes or fails.
     *
     * @param pollIntervalSeconds - Time in seconds between polling attempts (default: 5)
     * @param timeoutSeconds - Maximum time to wait for completion in seconds (default: 600)
     * @returns Promise<SarvamAI.JobStatusResponse> - Final job status
     * @throws Error if the job does not complete within the given timeout
     */
    waitUntilComplete() {
        return __awaiter(this, arguments, void 0, function* (pollIntervalSeconds = 5, timeoutSeconds = 600) {
            const startTime = Date.now();
            while (true) {
                const status = yield this.getStatus();
                const state = status.job_state.toLowerCase();
                if (state === "completed" || state === "failed") {
                    return status;
                }
                if (Date.now() - startTime > timeoutSeconds * 1000) {
                    throw new Error(`Job ${this._jobId} did not complete within ${timeoutSeconds} seconds.`);
                }
                yield new Promise((resolve) => setTimeout(resolve, pollIntervalSeconds * 1000));
            }
        });
    }
    /**
     * Get the mapping of input files to their corresponding output files.
     *
     * @returns Promise<Array<{input_file: string, output_file: string}>> - List of mappings
     */
    getOutputMappings() {
        return __awaiter(this, void 0, void 0, function* () {
            const jobStatus = yield this.getStatus();
            return (jobStatus.job_details || [])
                .filter(detail => detail.inputs && detail.outputs && detail.inputs.length > 0 && detail.outputs.length > 0 && detail.state === "Success")
                .map(detail => ({
                input_file: detail.inputs[0].file_name,
                output_file: detail.outputs[0].file_name
            }));
        });
    }
    /**
     * Get detailed results for each file in the batch job.
     *
     * @returns Promise<{successful: Array<FileResult>, failed: Array<FileResult>}>
     *   Object with 'successful' and 'failed' keys, each containing a list of file details.
     *   Each file detail includes:
     *   - file_name: Name of the input file
     *   - status: Status of processing ('Success' or other states)
     *   - error_message: Error message if failed (undefined if successful)
     *   - output_file: Name of output file if successful (undefined if failed)
     */
    getFileResults() {
        return __awaiter(this, void 0, void 0, function* () {
            const jobStatus = yield this.getStatus();
            const results = {
                successful: [],
                failed: [],
            };
            for (const detail of jobStatus.job_details || []) {
                // Check for empty lists explicitly
                if (!detail.inputs || detail.inputs.length === 0) {
                    continue;
                }
                try {
                    const fileInfo = {
                        file_name: detail.inputs[0].file_name,
                        status: detail.state || "Unknown",
                        error_message: detail.error_message,
                        output_file: detail.outputs && detail.outputs.length > 0
                            ? detail.outputs[0].file_name
                            : undefined,
                    };
                    if (detail.state === "Success") {
                        results.successful.push(fileInfo);
                    }
                    else {
                        results.failed.push(fileInfo);
                    }
                }
                catch (error) {
                    // Skip malformed job details
                    continue;
                }
            }
            return results;
        });
    }
    /**
     * Download output files to the specified directory.
     *
     * @param outputDir - Local directory where outputs will be saved
     * @returns Promise<boolean> - True if all files downloaded successfully
     * @throws Error if a file fails to download
     */
    downloadOutputs(outputDir) {
        return __awaiter(this, void 0, void 0, function* () {
            const mappings = yield this.getOutputMappings();
            const fileNames = mappings.map((m) => m.output_file);
            const downloadLinksResponse = yield this._client.getDownloadLinks({
                job_id: this._jobId,
                files: fileNames,
            });
            // Create output directory if it doesn't exist
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }
            for (const mapping of mappings) {
                const url = downloadLinksResponse.download_urls[mapping.output_file].file_url;
                const response = yield fetch(url);
                if (response.status < 200 || response.status > 226) {
                    throw new Error(`Download failed for ${mapping.output_file}: ${response.status}`);
                }
                const outputPath = path.join(outputDir, `${mapping.input_file}.json`);
                const buffer = yield response.arrayBuffer();
                fs.writeFileSync(outputPath, Buffer.from(buffer));
            }
            return true;
        });
    }
    /**
     * Retrieve the current status of the job.
     */
    getStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._client.getStatus(this._jobId);
            return response;
        });
    }
    /**
     * Start the speech-to-text job processing.
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._client.start(this._jobId);
            return response;
        });
    }
    /**
     * Check if the job exists in the system.
     */
    exists() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getStatus();
                return true;
            }
            catch (error) {
                if (error.statusCode && (error.statusCode === 404 || error.statusCode === 400)) {
                    return false;
                }
                throw error;
            }
        });
    }
    /**
     * Check if the job is either completed or failed.
     */
    isComplete() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.getStatus();
            const state = status.job_state.toLowerCase();
            return state === "completed" || state === "failed";
        });
    }
    /**
     * Check if the job completed successfully.
     */
    isSuccessful() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.getStatus();
            return status.job_state.toLowerCase() === "completed";
        });
    }
    /**
     * Check if the job has failed.
     */
    isFailed() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.getStatus();
            return status.job_state.toLowerCase() === "failed";
        });
    }
    getMimeType(filePath) {
        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
            ".wav": "audio/wav",
            ".mp3": "audio/mpeg",
            ".m4a": "audio/mp4",
            ".aac": "audio/aac",
            ".ogg": "audio/ogg",
            ".flac": "audio/flac",
        };
        return mimeTypes[ext] || "audio/wav";
    }
}
exports.SpeechToTextJobInstance = SpeechToTextJobInstance;

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":3,"fs":2,"path":2}],34:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./requests/index.js":35,"dup":19}],35:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],36:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./client/index.js":34,"dup":21}],37:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextStreamingClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const Socket_js_1 = require("./Socket.js");
class SpeechToTextStreamingClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    connect(args) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const { "language-code": languageCode, model, input_audio_codec: inputAudioCodec, sample_rate: sampleRate, high_vad_sensitivity: highVadSensitivity, vad_signals: vadSignals, flush_signal: flushSignal, headers, debug, reconnectAttempts, } = args;
            const _queryParams = {};
            _queryParams["language-code"] = languageCode;
            if (model != null) {
                _queryParams.model = model;
            }
            if (inputAudioCodec != null) {
                _queryParams.input_audio_codec = inputAudioCodec;
            }
            if (sampleRate != null) {
                _queryParams.sample_rate = sampleRate;
            }
            if (highVadSensitivity != null) {
                _queryParams.high_vad_sensitivity = highVadSensitivity;
            }
            if (vadSignals != null) {
                _queryParams.vad_signals = vadSignals;
            }
            if (flushSignal != null) {
                _queryParams.flush_signal = flushSignal;
            }
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (0, headers_js_1.mergeOnlyDefinedHeaders)({ "Api-Subscription-Key": args["Api-Subscription-Key"] }), headers);
            const apiSubscriptionKeyValue = _headers["api-subscription-key"];
            const socket = new core.ReconnectingWebSocket({
                url: core.url.join((_a = (yield core.Supplier.get(this._options.baseUrl))) !== null && _a !== void 0 ? _a : ((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.SarvamAIEnvironment.Production).production, "/speech-to-text/ws"),
                protocols: [`api-subscription-key.${apiSubscriptionKeyValue}`],
                queryParameters: _queryParams,
                headers: _headers,
                options: { debug: debug !== null && debug !== void 0 ? debug : false, maxRetries: reconnectAttempts !== null && reconnectAttempts !== void 0 ? reconnectAttempts : 30 },
            });
            return new Socket_js_1.SpeechToTextStreamingSocket({ socket });
        });
    }
}
exports.SpeechToTextStreamingClient = SpeechToTextStreamingClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"./Socket.js":38}],38:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextStreamingSocket = void 0;
const core = __importStar(require("../../../../core/index.js"));
const json_js_1 = require("../../../../core/json.js");
class SpeechToTextStreamingSocket {
    constructor(args) {
        this.eventHandlers = {};
        this.handleOpen = () => {
            var _a, _b;
            (_b = (_a = this.eventHandlers).open) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        this.handleMessage = (event) => {
            var _a, _b;
            const data = (0, json_js_1.fromJson)(event.data);
            (_b = (_a = this.eventHandlers).message) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        };
        this.handleClose = (event) => {
            var _a, _b;
            (_b = (_a = this.eventHandlers).close) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        this.handleError = (event) => {
            var _a, _b;
            const message = event.message;
            (_b = (_a = this.eventHandlers).error) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(message));
        };
        this.socket = args.socket;
        this.socket.addEventListener("open", this.handleOpen);
        this.socket.addEventListener("message", this.handleMessage);
        this.socket.addEventListener("close", this.handleClose);
        this.socket.addEventListener("error", this.handleError);
    }
    /** The current state of the connection; this is one of the readyState constants. */
    get readyState() {
        return this.socket.readyState;
    }
    /**
     * @param event - The event to attach to.
     * @param callback - The callback to run when the event is triggered.
     * Usage:
     * ```typescript
     * this.on('open', () => {
     *     console.log('The websocket is open');
     * });
     * ```
     */
    on(event, callback) {
        this.eventHandlers[event] = callback;
    }
    /** @param params - Object containing audio (base64), sample_rate, and encoding*/
    transcribe(params) {
        var _a, _b;
        this.assertSocketIsOpen();
        const message = {
            audio: {
                data: params.audio,
                sample_rate: (_a = params.sample_rate) !== null && _a !== void 0 ? _a : 16000,
                encoding: (_b = params.encoding) !== null && _b !== void 0 ? _b : "audio/wav",
            },
        };
        this.sendJson(message);
    }
    sendConfigMessage(message) {
        this.assertSocketIsOpen();
        this.sendJson(message);
    }
    /** Signal to flush the audio buffer and force finalize partial transcriptions */
    flush() {
        this.assertSocketIsOpen();
        const flushMessage = {
            type: "flush",
        };
        this.sendJson(flushMessage);
    }
    /** Connect to the websocket and register event handlers. */
    connect() {
        this.socket.reconnect();
        this.socket.addEventListener("open", this.handleOpen);
        this.socket.addEventListener("message", this.handleMessage);
        this.socket.addEventListener("close", this.handleClose);
        this.socket.addEventListener("error", this.handleError);
        return this;
    }
    /** Close the websocket and unregister event handlers. */
    close() {
        this.socket.close();
        this.handleClose({ code: 1000 });
        this.socket.removeEventListener("open", this.handleOpen);
        this.socket.removeEventListener("message", this.handleMessage);
        this.socket.removeEventListener("close", this.handleClose);
        this.socket.removeEventListener("error", this.handleError);
    }
    /** Returns a promise that resolves when the websocket is open. */
    waitForOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.socket.readyState === core.ReconnectingWebSocket.OPEN) {
                return this.socket;
            }
            return new Promise((resolve, reject) => {
                this.socket.addEventListener("open", () => {
                    resolve(this.socket);
                });
                this.socket.addEventListener("error", (event) => {
                    reject(event);
                });
            });
        });
    }
    /** Asserts that the websocket is open. */
    assertSocketIsOpen() {
        if (!this.socket) {
            throw new Error("Socket is not connected.");
        }
        if (this.socket.readyState !== core.ReconnectingWebSocket.OPEN) {
            throw new Error("Socket is not open.");
        }
    }
    /** Send a binary payload to the websocket. */
    sendBinary(payload) {
        this.socket.send(payload);
    }
    /** Send a JSON payload to the websocket. */
    sendJson(payload) {
        const jsonPayload = (0, json_js_1.toJson)(payload);
        this.socket.send(jsonPayload);
    }
}
exports.SpeechToTextStreamingSocket = SpeechToTextStreamingSocket;

},{"../../../../core/index.js":234,"../../../../core/json.js":235}],39:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],40:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./client/index.js"), exports);
__exportStar(require("./types/index.js"), exports);

},{"./client/index.js":39,"./types/index.js":48}],41:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextStreamingFlushSignal = void 0;
/** Signal to flush the audio buffer and finalize transcription */
exports.SpeechToTextStreamingFlushSignal = {
    True: "true",
    False: "false",
};

},{}],42:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextStreamingHighVadSensitivity = void 0;
/** Enable high VAD (Voice Activity Detection) sensitivity */
exports.SpeechToTextStreamingHighVadSensitivity = {
    True: "true",
    False: "false",
};

},{}],43:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextStreamingInputAudioCodec = void 0;
/**
 * Audio codec/format of the input stream. Use this when sending raw PCM audio.
 * Supported values: wav, pcm_s16le, pcm_l16, pcm_raw.
 */
exports.SpeechToTextStreamingInputAudioCodec = {
    Wav: "wav",
    PcmS16Le: "pcm_s16le",
    PcmL16: "pcm_l16",
    PcmRaw: "pcm_raw",
};

},{}],44:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextStreamingLanguageCode = void 0;
/**
 * Specifies the language of the input audio in BCP-47 format.
 *
 * **Available Options (saarika:v2.5, legacy):**
 * - `unknown` (default): Use when the language is not known; the API will auto-detect.
 * - `hi-IN`: Hindi
 * - `bn-IN`: Bengali
 * - `gu-IN`: Gujarati
 * - `kn-IN`: Kannada
 * - `ml-IN`: Malayalam
 * - `mr-IN`: Marathi
 * - `od-IN`: Odia
 * - `pa-IN`: Punjabi
 * - `ta-IN`: Tamil
 * - `te-IN`: Telugu
 * - `en-IN`: English
 *
 * **Additional Options (saaras:v3, recommended):**
 * - `as-IN`: Assamese
 * - `ur-IN`: Urdu
 * - `ne-IN`: Nepali
 * - `kok-IN`: Konkani
 * - `ks-IN`: Kashmiri
 * - `sd-IN`: Sindhi
 * - `sa-IN`: Sanskrit
 * - `sat-IN`: Santali
 * - `mni-IN`: Manipuri
 * - `brx-IN`: Bodo
 * - `mai-IN`: Maithili
 * - `doi-IN`: Dogri
 */
exports.SpeechToTextStreamingLanguageCode = {
    Unknown: "unknown",
    EnIn: "en-IN",
    HiIn: "hi-IN",
    BnIn: "bn-IN",
    GuIn: "gu-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    AsIn: "as-IN",
    UrIn: "ur-IN",
    NeIn: "ne-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    SdIn: "sd-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    MniIn: "mni-IN",
    BrxIn: "brx-IN",
    MaiIn: "mai-IN",
    DoiIn: "doi-IN",
};

},{}],45:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextStreamingMode = void 0;
/**
 * Mode of operation. **Only applicable when using saaras:v3 model.**
 *
 * Example audio: 'मेरा फोन नंबर है 9840950950'
 *
 * - **transcribe** (default): Standard transcription in the original language with proper formatting and number normalization.
 *   - Output: `मेरा फोन नंबर है 9840950950`
 *
 * - **translate**: Translates speech from any supported Indic language to English.
 *   - Output: `My phone number is 9840950950`
 *
 * - **verbatim**: Exact word-for-word transcription without normalization, preserving filler words and spoken numbers as-is.
 *   - Output: `मेरा फोन नंबर है नौ आठ चार zero नौ पांच zero नौ पांच zero`
 *
 * - **translit**: Romanization - Transliterates speech to Latin/Roman script only.
 *   - Output: `mera phone number hai 9840950950`
 *
 * - **codemix**: Code-mixed text with English words in English and Indic words in native script.
 *   - Output: `मेरा phone number है 9840950950`
 */
exports.SpeechToTextStreamingMode = {
    Transcribe: "transcribe",
    Translate: "translate",
    Verbatim: "verbatim",
    Translit: "translit",
    Codemix: "codemix",
};

},{}],46:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextStreamingModel = void 0;
/**
 * Specifies the model to use for speech-to-text conversion.
 *
 * - **saaras:v3** (default, recommended): State-of-the-art model with flexible output formats. Supports multiple modes via the `mode` parameter: transcribe, translate, verbatim, translit, codemix.
 *
 * - **saarika:v2.5** (legacy): Transcribes audio in the spoken language. Kept for backward compatibility.
 */
exports.SpeechToTextStreamingModel = {
    SaarasV3: "saaras:v3",
    SaarikaV25: "saarika:v2.5",
};

},{}],47:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextStreamingVadSignals = void 0;
/** Enable VAD signals in response */
exports.SpeechToTextStreamingVadSignals = {
    True: "true",
    False: "false",
};

},{}],48:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./SpeechToTextStreamingFlushSignal.js"), exports);
__exportStar(require("./SpeechToTextStreamingHighVadSensitivity.js"), exports);
__exportStar(require("./SpeechToTextStreamingInputAudioCodec.js"), exports);
__exportStar(require("./SpeechToTextStreamingLanguageCode.js"), exports);
__exportStar(require("./SpeechToTextStreamingMode.js"), exports);
__exportStar(require("./SpeechToTextStreamingModel.js"), exports);
__exportStar(require("./SpeechToTextStreamingVadSignals.js"), exports);

},{"./SpeechToTextStreamingFlushSignal.js":41,"./SpeechToTextStreamingHighVadSensitivity.js":42,"./SpeechToTextStreamingInputAudioCodec.js":43,"./SpeechToTextStreamingLanguageCode.js":44,"./SpeechToTextStreamingMode.js":45,"./SpeechToTextStreamingModel.js":46,"./SpeechToTextStreamingVadSignals.js":47}],49:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateJobClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const errors = __importStar(require("../../../../errors/index.js"));
const SarvamAI = __importStar(require("../../../index.js"));
const SpeechToTextTranslateJobInstance_js_1 = require("./SpeechToTextTranslateJobInstance.js");
class SpeechToTextTranslateJobClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    /**
     * Create a new speech to text translate bulk job and receive a job UUID and storage folder details for processing multiple audio files with translation
     *
     * @param {SarvamAI.SpeechToTextTranslateJobRequest} request
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.initialise({
     *         ptu_id: 1,
     *         job_parameters: {}
     *     })
     */
    initialise(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__initialise(request, requestOptions));
    }
    __initialise(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const { ptu_id: ptuId } = request, _body = __rest(request, ["ptu_id"]);
            const _queryParams = {};
            if (ptuId != null) {
                _queryParams.ptu_id = ptuId.toString();
            }
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "speech-to-text-translate/job/v1"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
                requestType: "json",
                body: _body,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text-translate/job/v1.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Retrieve the current status and details of a speech to text translate bulk job, including progress and file-level information.
     *
     * **Rate Limiting Best Practice:** To prevent rate limit errors and ensure optimal server performance, we recommend implementing a minimum 5-millisecond delay between consecutive status polling requests. This helps maintain system stability while still providing timely status updates.
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.getStatus("job_id")
     */
    getStatus(job_id, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__getStatus(job_id, requestOptions));
    }
    __getStatus(job_id, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, `speech-to-text-translate/job/v1/${core.url.encodePathParam(job_id)}/status`),
                method: "GET",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling GET /speech-to-text-translate/job/v1/{job_id}/status.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Start processing a speech to text translate bulk job after all audio files have been uploaded
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {SarvamAI.SpeechToTextTranslateJobStartRequest} request
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.start("job_id", {
     *         ptu_id: 1
     *     })
     */
    start(job_id, request = {}, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__start(job_id, request, requestOptions));
    }
    __start(job_id_1) {
        return __awaiter(this, arguments, void 0, function* (job_id, request = {}, requestOptions) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const { ptu_id: ptuId } = request;
            const _queryParams = {};
            if (ptuId != null) {
                _queryParams.ptu_id = ptuId.toString();
            }
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, `speech-to-text-translate/job/v1/${core.url.encodePathParam(job_id)}/start`),
                method: "POST",
                headers: _headers,
                queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text-translate/job/v1/{job_id}/start.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Generate presigned upload URLs for audio files that will be processed in a speech to text translate bulk job
     *
     * @param {SarvamAI.SpeechToTextTranslateJobGetUploadLinksRequest} request
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.getUploadLinks({
     *         ptu_id: 1,
     *         body: {
     *             job_id: "job_id",
     *             files: ["files"]
     *         }
     *     })
     */
    getUploadLinks(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__getUploadLinks(request, requestOptions));
    }
    __getUploadLinks(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const { ptu_id: ptuId, body: _body } = request;
            const _queryParams = {};
            if (ptuId != null) {
                _queryParams.ptu_id = ptuId.toString();
            }
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "speech-to-text-translate/job/v1/upload-files"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
                requestType: "json",
                body: _body,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text-translate/job/v1/upload-files.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Generate presigned download URLs for the translated transcription output files of a completed speech to text translate bulk job
     *
     * @param {SarvamAI.SpeechToTextTranslateJobGetDownloadLinksRequest} request
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.getDownloadLinks({
     *         ptu_id: 1,
     *         body: {
     *             job_id: "job_id",
     *             files: ["files"]
     *         }
     *     })
     */
    getDownloadLinks(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__getDownloadLinks(request, requestOptions));
    }
    __getDownloadLinks(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const { ptu_id: ptuId, body: _body } = request;
            const _queryParams = {};
            if (ptuId != null) {
                _queryParams.ptu_id = ptuId.toString();
            }
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "speech-to-text-translate/job/v1/download-files"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
                requestType: "json",
                body: _body,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                        rawResponse: _response.rawResponse,
                    });
                case "body-is-null":
                    throw new errors.SarvamAIError({
                        statusCode: _response.error.statusCode,
                        rawResponse: _response.rawResponse,
                    });
                case "timeout":
                    throw new errors.SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text-translate/job/v1/download-files.");
                case "unknown":
                    throw new errors.SarvamAIError({
                        message: _response.error.errorMessage,
                        rawResponse: _response.rawResponse,
                    });
            }
        });
    }
    /**
     * Create a new Speech-to-Text-Translate bulk job.
     *
     * @param params - Job creation parameters
     * @param params.model - The model to use for speech-to-text translation (default: "saaras:v2.5")
     * @param params.withDiarization - Whether to enable speaker diarization (default: false)
     * @param params.prompt - An optional prompt to guide the transcription and translation model
     * @param params.numSpeakers - The number of distinct speakers in the audio, if known
     * @param params.callback - Optional callback configuration to receive job completion events
     * @param requestOptions - Request-specific configuration
     * @returns A handle to the newly created Speech-to-Text-Translate job
     */
    createJob() {
        return __awaiter(this, arguments, void 0, function* (params = {}, requestOptions) {
            const { model = "saaras:v2.5", withDiarization = false, prompt, numSpeakers, callback } = params;
            const response = yield this.initialise({
                job_parameters: {
                    prompt: prompt,
                    model: model,
                    num_speakers: numSpeakers,
                    with_diarization: withDiarization,
                },
                callback: callback,
            }, requestOptions);
            return new SpeechToTextTranslateJobInstance_js_1.SpeechToTextTranslateJobInstance(response.job_id, this);
        });
    }
    /**
     * Get an existing Speech-to-Text-Translate job handle by job ID.
     *
     * @param jobId - The job ID of the previously created Speech-to-Text-Translate job
     * @returns A job handle which can be used to check status or retrieve results
     */
    getJob(jobId) {
        return new SpeechToTextTranslateJobInstance_js_1.SpeechToTextTranslateJobInstance(jobId, this);
    }
}
exports.SpeechToTextTranslateJobClient = SpeechToTextTranslateJobClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"../../../../errors/index.js":253,"../../../index.js":17,"./SpeechToTextTranslateJobInstance.js":50}],50:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateJobInstance = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class SpeechToTextTranslateJobInstance {
    constructor(jobId, client) {
        this._jobId = jobId;
        this._client = client;
    }
    /**
     * Returns the job ID associated with this job instance.
     */
    get jobId() {
        return this._jobId;
    }
    /**
     * Upload input audio files for the speech-to-text-translate job.
     *
     * @param filePaths - Array of full paths to local audio files
     * @param timeoutInSeconds - The maximum time to wait for the upload to complete (default: 60)
     * @returns Promise<boolean> - True if all files are uploaded successfully
     */
    uploadFiles(filePaths_1) {
        return __awaiter(this, arguments, void 0, function* (filePaths, _timeoutInSeconds = 60) {
            const fileNames = filePaths.map((p) => path.basename(p));
            const uploadLinksResponse = yield this._client.getUploadLinks({
                body: {
                    job_id: this._jobId,
                    files: fileNames,
                },
            });
            for (const filePath of filePaths) {
                const fileName = path.basename(filePath);
                const url = uploadLinksResponse.upload_urls[fileName].file_url;
                const fileBuffer = fs.readFileSync(filePath);
                const mimeType = this.getMimeType(filePath);
                const response = yield fetch(url, {
                    method: "PUT",
                    body: fileBuffer,
                    headers: {
                        "x-ms-blob-type": "BlockBlob",
                        "Content-Type": mimeType,
                    },
                });
                if (response.status < 200 || response.status > 226) {
                    throw new Error(`Upload failed for ${fileName}: ${response.status}`);
                }
            }
            return true;
        });
    }
    /**
     * Polls job status until it completes or fails.
     *
     * @param pollIntervalSeconds - Time in seconds between polling attempts (default: 5)
     * @param timeoutSeconds - Maximum time to wait for completion in seconds (default: 600)
     * @returns Promise<SarvamAI.JobStatusResponse> - Final job status
     * @throws Error if the job does not complete within the given timeout
     */
    waitUntilComplete() {
        return __awaiter(this, arguments, void 0, function* (pollIntervalSeconds = 5, timeoutSeconds = 600) {
            const startTime = Date.now();
            while (true) {
                const status = yield this.getStatus();
                const state = status.job_state.toLowerCase();
                if (state === "completed" || state === "failed") {
                    return status;
                }
                if (Date.now() - startTime > timeoutSeconds * 1000) {
                    throw new Error(`Job ${this._jobId} did not complete within ${timeoutSeconds} seconds.`);
                }
                yield new Promise((resolve) => setTimeout(resolve, pollIntervalSeconds * 1000));
            }
        });
    }
    /**
     * Get the mapping of input files to their corresponding output files.
     *
     * @returns Promise<Array<{input_file: string, output_file: string}>> - List of mappings
     */
    getOutputMappings() {
        return __awaiter(this, void 0, void 0, function* () {
            const jobStatus = yield this.getStatus();
            return (jobStatus.job_details || [])
                .filter(detail => detail.inputs && detail.outputs && detail.inputs.length > 0 && detail.outputs.length > 0 && detail.state === "Success")
                .map(detail => ({
                input_file: detail.inputs[0].file_name,
                output_file: detail.outputs[0].file_name
            }));
        });
    }
    /**
     * Get detailed results for each file in the batch job.
     *
     * @returns Promise<{successful: Array<FileResult>, failed: Array<FileResult>}>
     *   Object with 'successful' and 'failed' keys, each containing a list of file details.
     *   Each file detail includes:
     *   - file_name: Name of the input file
     *   - status: Status of processing ('Success' or other states)
     *   - error_message: Error message if failed (undefined if successful)
     *   - output_file: Name of output file if successful (undefined if failed)
     */
    getFileResults() {
        return __awaiter(this, void 0, void 0, function* () {
            const jobStatus = yield this.getStatus();
            const results = {
                successful: [],
                failed: [],
            };
            for (const detail of jobStatus.job_details || []) {
                // Check for empty lists explicitly
                if (!detail.inputs || detail.inputs.length === 0) {
                    continue;
                }
                try {
                    const fileInfo = {
                        file_name: detail.inputs[0].file_name,
                        status: detail.state || "Unknown",
                        error_message: detail.error_message,
                        output_file: detail.outputs && detail.outputs.length > 0
                            ? detail.outputs[0].file_name
                            : undefined,
                    };
                    if (detail.state === "Success") {
                        results.successful.push(fileInfo);
                    }
                    else {
                        results.failed.push(fileInfo);
                    }
                }
                catch (error) {
                    // Skip malformed job details
                    continue;
                }
            }
            return results;
        });
    }
    /**
     * Download output files to the specified directory.
     *
     * @param outputDir - Local directory where outputs will be saved
     * @returns Promise<boolean> - True if all files downloaded successfully
     * @throws Error if a file fails to download
     */
    downloadOutputs(outputDir) {
        return __awaiter(this, void 0, void 0, function* () {
            const mappings = yield this.getOutputMappings();
            const fileNames = mappings.map((m) => m.output_file);
            const downloadLinksResponse = yield this._client.getDownloadLinks({
                body: {
                    job_id: this._jobId,
                    files: fileNames,
                },
            });
            // Create output directory if it doesn't exist
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }
            for (const mapping of mappings) {
                const url = downloadLinksResponse.download_urls[mapping.output_file].file_url;
                const response = yield fetch(url);
                if (response.status < 200 || response.status > 226) {
                    throw new Error(`Download failed for ${mapping.output_file}: ${response.status}`);
                }
                const outputPath = path.join(outputDir, `${mapping.input_file}.json`);
                const buffer = yield response.arrayBuffer();
                fs.writeFileSync(outputPath, Buffer.from(buffer));
            }
            return true;
        });
    }
    /**
     * Retrieve the current status of the job.
     */
    getStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._client.getStatus(this._jobId);
            return response;
        });
    }
    /**
     * Start the speech-to-text-translate job processing.
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._client.start(this._jobId);
            return response;
        });
    }
    /**
     * Check if the job exists in the system.
     */
    exists() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getStatus();
                return true;
            }
            catch (error) {
                if (error.statusCode && (error.statusCode === 404 || error.statusCode === 400)) {
                    return false;
                }
                throw error;
            }
        });
    }
    /**
     * Check if the job is either completed or failed.
     */
    isComplete() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.getStatus();
            const state = status.job_state.toLowerCase();
            return state === "completed" || state === "failed";
        });
    }
    /**
     * Check if the job completed successfully.
     */
    isSuccessful() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.getStatus();
            return status.job_state.toLowerCase() === "completed";
        });
    }
    /**
     * Check if the job has failed.
     */
    isFailed() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.getStatus();
            return status.job_state.toLowerCase() === "failed";
        });
    }
    getMimeType(filePath) {
        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
            ".wav": "audio/wav",
            ".mp3": "audio/mpeg",
            ".m4a": "audio/mp4",
            ".aac": "audio/aac",
            ".ogg": "audio/ogg",
            ".flac": "audio/flac",
        };
        return mimeTypes[ext] || "audio/wav";
    }
}
exports.SpeechToTextTranslateJobInstance = SpeechToTextTranslateJobInstance;

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":3,"fs":2,"path":2}],51:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./requests/index.js":52,"dup":19}],52:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],53:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./client/index.js":51,"dup":21}],54:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateStreamingClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const Socket_js_1 = require("./Socket.js");
class SpeechToTextTranslateStreamingClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    connect(args) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const { model, input_audio_codec: inputAudioCodec, sample_rate: sampleRate, high_vad_sensitivity: highVadSensitivity, vad_signals: vadSignals, flush_signal: flushSignal, headers, debug, reconnectAttempts, } = args;
            const _queryParams = {};
            if (model != null) {
                _queryParams.model = model;
            }
            if (inputAudioCodec != null) {
                _queryParams.input_audio_codec = inputAudioCodec;
            }
            if (sampleRate != null) {
                _queryParams.sample_rate = sampleRate;
            }
            if (highVadSensitivity != null) {
                _queryParams.high_vad_sensitivity = highVadSensitivity;
            }
            if (vadSignals != null) {
                _queryParams.vad_signals = vadSignals;
            }
            if (flushSignal != null) {
                _queryParams.flush_signal = flushSignal;
            }
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (0, headers_js_1.mergeOnlyDefinedHeaders)({ "Api-Subscription-Key": args["Api-Subscription-Key"] }), headers);
            const apiSubscriptionKeyValue = _headers["api-subscription-key"];
            const socket = new core.ReconnectingWebSocket({
                url: core.url.join((_a = (yield core.Supplier.get(this._options.baseUrl))) !== null && _a !== void 0 ? _a : ((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.SarvamAIEnvironment.Production).production, "/speech-to-text-translate/ws"),
                protocols: [`api-subscription-key.${apiSubscriptionKeyValue}`],
                queryParameters: _queryParams,
                headers: _headers,
                options: { debug: debug !== null && debug !== void 0 ? debug : false, maxRetries: reconnectAttempts !== null && reconnectAttempts !== void 0 ? reconnectAttempts : 30 },
            });
            return new Socket_js_1.SpeechToTextTranslateStreamingSocket({ socket });
        });
    }
}
exports.SpeechToTextTranslateStreamingClient = SpeechToTextTranslateStreamingClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"./Socket.js":55}],55:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateStreamingSocket = void 0;
const core = __importStar(require("../../../../core/index.js"));
const json_js_1 = require("../../../../core/json.js");
class SpeechToTextTranslateStreamingSocket {
    constructor(args) {
        this.eventHandlers = {};
        this.handleOpen = () => {
            var _a, _b;
            (_b = (_a = this.eventHandlers).open) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        this.handleMessage = (event) => {
            var _a, _b;
            const data = (0, json_js_1.fromJson)(event.data);
            (_b = (_a = this.eventHandlers).message) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        };
        this.handleClose = (event) => {
            var _a, _b;
            (_b = (_a = this.eventHandlers).close) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        this.handleError = (event) => {
            var _a, _b;
            const message = event.message;
            (_b = (_a = this.eventHandlers).error) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(message));
        };
        this.socket = args.socket;
        this.socket.addEventListener("open", this.handleOpen);
        this.socket.addEventListener("message", this.handleMessage);
        this.socket.addEventListener("close", this.handleClose);
        this.socket.addEventListener("error", this.handleError);
    }
    /** The current state of the connection; this is one of the readyState constants. */
    get readyState() {
        return this.socket.readyState;
    }
    /**
     * @param event - The event to attach to.
     * @param callback - The callback to run when the event is triggered.
     * Usage:
     * ```typescript
     * this.on('open', () => {
     *     console.log('The websocket is open');
     * });
     * ```
     */
    on(event, callback) {
        this.eventHandlers[event] = callback;
    }
    /** @param params - Object containing audio (base64), sample_rate, and encoding */
    translate(params) {
        var _a, _b;
        this.assertSocketIsOpen();
        const message = {
            audio: {
                data: params.audio,
                sample_rate: (_a = params.sample_rate) !== null && _a !== void 0 ? _a : 16000,
                encoding: (_b = params.encoding) !== null && _b !== void 0 ? _b : "audio/wav",
            },
        };
        this.sendJson(message);
    }
    sendConfigMessage(message) {
        this.assertSocketIsOpen();
        this.sendJson(message);
    }
    /** Flush the audio buffer and finalize transcriptions and translations */
    flush() {
        this.assertSocketIsOpen();
        const flushMessage = {
            type: "flush",
        };
        this.sendJson(flushMessage);
    }
    /** Connect to the websocket and register event handlers. */
    connect() {
        this.socket.reconnect();
        this.socket.addEventListener("open", this.handleOpen);
        this.socket.addEventListener("message", this.handleMessage);
        this.socket.addEventListener("close", this.handleClose);
        this.socket.addEventListener("error", this.handleError);
        return this;
    }
    /** Close the websocket and unregister event handlers. */
    close() {
        this.socket.close();
        this.handleClose({ code: 1000 });
        this.socket.removeEventListener("open", this.handleOpen);
        this.socket.removeEventListener("message", this.handleMessage);
        this.socket.removeEventListener("close", this.handleClose);
        this.socket.removeEventListener("error", this.handleError);
    }
    /** Returns a promise that resolves when the websocket is open. */
    waitForOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.socket.readyState === core.ReconnectingWebSocket.OPEN) {
                return this.socket;
            }
            return new Promise((resolve, reject) => {
                this.socket.addEventListener("open", () => {
                    resolve(this.socket);
                });
                this.socket.addEventListener("error", (event) => {
                    reject(event);
                });
            });
        });
    }
    /** Asserts that the websocket is open. */
    assertSocketIsOpen() {
        if (!this.socket) {
            throw new Error("Socket is not connected.");
        }
        if (this.socket.readyState !== core.ReconnectingWebSocket.OPEN) {
            throw new Error("Socket is not open.");
        }
    }
    /** Send a binary payload to the websocket. */
    sendBinary(payload) {
        this.socket.send(payload);
    }
    /** Send a JSON payload to the websocket. */
    sendJson(payload) {
        const jsonPayload = (0, json_js_1.toJson)(payload);
        this.socket.send(jsonPayload);
    }
}
exports.SpeechToTextTranslateStreamingSocket = SpeechToTextTranslateStreamingSocket;

},{"../../../../core/index.js":234,"../../../../core/json.js":235}],56:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],57:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"./client/index.js":56,"./types/index.js":64,"dup":40}],58:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateStreamingFlushSignal = void 0;
/** Signal to flush the audio buffer and finalize transcription and translation */
exports.SpeechToTextTranslateStreamingFlushSignal = {
    True: "true",
    False: "false",
};

},{}],59:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateStreamingHighVadSensitivity = void 0;
/** Enable high VAD (Voice Activity Detection) sensitivity */
exports.SpeechToTextTranslateStreamingHighVadSensitivity = {
    True: "true",
    False: "false",
};

},{}],60:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateStreamingInputAudioCodec = void 0;
/**
 * Audio codec/format of the input stream. Use this when sending raw PCM audio.
 * Supported values: wav, pcm_s16le, pcm_l16, pcm_raw.
 */
exports.SpeechToTextTranslateStreamingInputAudioCodec = {
    Wav: "wav",
    PcmS16Le: "pcm_s16le",
    PcmL16: "pcm_l16",
    PcmRaw: "pcm_raw",
};

},{}],61:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateStreamingMode = void 0;
/**
 * Mode of operation. **Only applicable when using saaras:v3 model.**
 *
 * - **translate** (default): Translates speech from any supported Indic language to English.
 *   - Example: Hindi audio → English text output
 *
 * - **transcribe**: Standard transcription in the original language.
 *
 * - **verbatim**: Exact word-for-word transcription without normalization.
 *
 * - **translit**: Romanization - Transliterates speech to Latin/Roman script only.
 *
 * - **codemix**: Code-mixed text with English words in English and Indic words in native script.
 */
exports.SpeechToTextTranslateStreamingMode = {
    Translate: "translate",
    Transcribe: "transcribe",
    Verbatim: "verbatim",
    Translit: "translit",
    Codemix: "codemix",
};

},{}],62:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateStreamingModel = void 0;
/**
 * Model to be used for speech to text translation.
 *
 * - **saaras:v3** (default, recommended): State-of-the-art translation model that translates audio from any spoken Indic language to English with flexible output formats via the `mode` parameter.
 *
 * - **saaras:v2.5** (legacy): Translation model that translates audio from any spoken Indic language to English. Kept for backward compatibility.
 *   - Example: Hindi audio → English text output
 */
exports.SpeechToTextTranslateStreamingModel = {
    SaarasV3: "saaras:v3",
    SaarasV25: "saaras:v2.5",
};

},{}],63:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateStreamingVadSignals = void 0;
/** Enable VAD signals in response */
exports.SpeechToTextTranslateStreamingVadSignals = {
    True: "true",
    False: "false",
};

},{}],64:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./SpeechToTextTranslateStreamingFlushSignal.js"), exports);
__exportStar(require("./SpeechToTextTranslateStreamingHighVadSensitivity.js"), exports);
__exportStar(require("./SpeechToTextTranslateStreamingInputAudioCodec.js"), exports);
__exportStar(require("./SpeechToTextTranslateStreamingMode.js"), exports);
__exportStar(require("./SpeechToTextTranslateStreamingModel.js"), exports);
__exportStar(require("./SpeechToTextTranslateStreamingVadSignals.js"), exports);

},{"./SpeechToTextTranslateStreamingFlushSignal.js":58,"./SpeechToTextTranslateStreamingHighVadSensitivity.js":59,"./SpeechToTextTranslateStreamingInputAudioCodec.js":60,"./SpeechToTextTranslateStreamingMode.js":61,"./SpeechToTextTranslateStreamingModel.js":62,"./SpeechToTextTranslateStreamingVadSignals.js":63}],65:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const handleNonStatusCodeError_js_1 = require("../../../../errors/handleNonStatusCodeError.js");
const errors = __importStar(require("../../../../errors/index.js"));
const SarvamAI = __importStar(require("../../../index.js"));
class SpeechToTextClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    /**
     * ## Speech to Text API
     *
     * This API transcribes speech to text in multiple Indian languages and English. Supports transcription for interactive applications.
     *
     * ### Available Options:
     * - **REST API** (Current Endpoint): For quick responses under 30 seconds with immediate results
     * - **Batch API**: For longer audio files, [Follow This Documentation](https://docs.sarvam.ai/api-reference-docs/api-guides-tutorials/speech-to-text/batch-api)
     *   - Supports diarization (speaker identification)
     *
     * ### Note:
     * - Pricing differs for REST and Batch APIs
     * - Diarization is only available in Batch API with separate pricing
     * - Please refer to [here](https://docs.sarvam.ai/api-reference-docs/getting-started/pricing) for detailed pricing information
     *
     * @param {SarvamAI.SpeechToTextTranscriptionRequest} request
     * @param {SpeechToTextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.speechToText.transcribe({
     *         file: fs.createReadStream("/path/to/your/file")
     *     })
     */
    transcribe(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__transcribe(request, requestOptions));
    }
    __transcribe(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _body = yield core.newFormData();
            yield _body.appendFile("file", request.file);
            if (request.model != null) {
                _body.append("model", request.model);
            }
            if (request.mode != null) {
                _body.append("mode", request.mode);
            }
            if (request.language_code != null) {
                _body.append("language_code", request.language_code);
            }
            if (request.input_audio_codec != null) {
                _body.append("input_audio_codec", request.input_audio_codec);
            }
            const _maybeEncodedRequest = yield _body.getRequest();
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, (0, headers_js_1.mergeOnlyDefinedHeaders)(Object.assign({}, _maybeEncodedRequest.headers)), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "speech-to-text"),
                method: "POST",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "file",
                duplex: _maybeEncodedRequest.duplex,
                body: _maybeEncodedRequest.body,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "POST", "/speech-to-text");
        });
    }
    /**
     * ## Speech to Text Translation API
     *
     * This API automatically detects the input language, transcribes the speech, and translates the text to English.
     *
     * ### Available Options:
     * - **REST API** (Current Endpoint): For quick responses under 30 seconds with immediate results
     * - **Batch API**: For longer audio files [Follow this documentation](https://docs.sarvam.ai/api-reference-docs/api-guides-tutorials/speech-to-text/batch-api)
     *   - Supports diarization (speaker identification)
     *
     * ### Note:
     * - Pricing differs for REST and Batch APIs
     * - Diarization is only available in Batch API with separate pricing
     * - Please refer to [here](https://docs.sarvam.ai/api-reference-docs/getting-started/pricing) for detailed pricing information
     *
     * @param {SarvamAI.SpeechToTextTranslationRequest} request
     * @param {SpeechToTextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.speechToText.translate({
     *         file: fs.createReadStream("/path/to/your/file")
     *     })
     */
    translate(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__translate(request, requestOptions));
    }
    __translate(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _body = yield core.newFormData();
            yield _body.appendFile("file", request.file);
            if (request.prompt != null) {
                _body.append("prompt", request.prompt);
            }
            if (request.model != null) {
                _body.append("model", request.model);
            }
            if (request.input_audio_codec != null) {
                _body.append("input_audio_codec", request.input_audio_codec);
            }
            const _maybeEncodedRequest = yield _body.getRequest();
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, (0, headers_js_1.mergeOnlyDefinedHeaders)(Object.assign({}, _maybeEncodedRequest.headers)), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "speech-to-text-translate"),
                method: "POST",
                headers: _headers,
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "file",
                duplex: _maybeEncodedRequest.duplex,
                body: _maybeEncodedRequest.body,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    case 503:
                        throw new SarvamAI.ServiceUnavailableError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "POST", "/speech-to-text-translate");
        });
    }
}
exports.SpeechToTextClient = SpeechToTextClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"../../../../errors/handleNonStatusCodeError.js":252,"../../../../errors/index.js":253,"../../../index.js":17}],66:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./requests/index.js":67,"dup":19}],67:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],68:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./client/index.js":66,"dup":21}],69:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechStreamingClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const Socket_js_1 = require("./Socket.js");
class TextToSpeechStreamingClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    connect(args) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const { model, send_completion_event: sendCompletionEvent, headers, debug, reconnectAttempts } = args;
            const _queryParams = {};
            if (model != null) {
                _queryParams.model = model;
            }
            if (sendCompletionEvent != null) {
                _queryParams.send_completion_event = sendCompletionEvent;
            }
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (0, headers_js_1.mergeOnlyDefinedHeaders)({ "Api-Subscription-Key": args["Api-Subscription-Key"] }), headers);
            const apiSubscriptionKeyValue = _headers["api-subscription-key"];
            const socket = new core.ReconnectingWebSocket({
                url: core.url.join((_a = (yield core.Supplier.get(this._options.baseUrl))) !== null && _a !== void 0 ? _a : ((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.SarvamAIEnvironment.Production).production, "/text-to-speech/ws"),
                protocols: [`api-subscription-key.${apiSubscriptionKeyValue}`],
                queryParameters: _queryParams,
                headers: _headers,
                options: { debug: debug !== null && debug !== void 0 ? debug : false, maxRetries: reconnectAttempts !== null && reconnectAttempts !== void 0 ? reconnectAttempts : 30 },
            });
            return new Socket_js_1.TextToSpeechStreamingSocket({ socket });
        });
    }
}
exports.TextToSpeechStreamingClient = TextToSpeechStreamingClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"./Socket.js":70}],70:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechStreamingSocket = void 0;
const core = __importStar(require("../../../../core/index.js"));
const json_js_1 = require("../../../../core/json.js");
class TextToSpeechStreamingSocket {
    constructor(args) {
        this.eventHandlers = {};
        this.handleOpen = () => {
            var _a, _b;
            (_b = (_a = this.eventHandlers).open) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        this.handleMessage = (event) => {
            var _a, _b;
            const data = (0, json_js_1.fromJson)(event.data);
            (_b = (_a = this.eventHandlers).message) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        };
        this.handleClose = (event) => {
            var _a, _b;
            (_b = (_a = this.eventHandlers).close) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        this.handleError = (event) => {
            var _a, _b;
            const message = event.message;
            (_b = (_a = this.eventHandlers).error) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(message));
        };
        this.socket = args.socket;
        this.socket.addEventListener("open", this.handleOpen);
        this.socket.addEventListener("message", this.handleMessage);
        this.socket.addEventListener("close", this.handleClose);
        this.socket.addEventListener("error", this.handleError);
    }
    /** The current state of the connection; this is one of the readyState constants. */
    get readyState() {
        return this.socket.readyState;
    }
    /**
     * @param event - The event to attach to.
     * @param callback - The callback to run when the event is triggered.
     * Usage:
     * ```typescript
     * this.on('open', () => {
     *     console.log('The websocket is open');
     * });
     * ```
     */
    on(event, callback) {
        this.eventHandlers[event] = callback;
    }
    /**
     * Configure the connection with various options including output audio codec.
     * Accepts both formats:
     * - Flat params: { speaker: "anushka", target_language_code: "hi-IN", ... }
     * - Wire format: { type: "config", data: { speaker: "anushka", target_language_code: "hi-IN", ... } }
     */
    configureConnection(config) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.assertSocketIsOpen();
        // Detect if user passed { type: "config", data: {...} } or flat params
        let data;
        if ("type" in config && config.type === "config" && "data" in config) {
            // Wire format: { type: "config", data: {...} }
            data = config.data;
        }
        else {
            // Flat params format
            data = config;
        }
        // Backward compatibility: default to "anushka" but warn if not specified
        const speaker = (_a = data.speaker) !== null && _a !== void 0 ? _a : "anushka";
        const message = {
            type: "config",
            data: {
                target_language_code: data.target_language_code,
                speaker,
                pitch: (_b = data.pitch) !== null && _b !== void 0 ? _b : 0.0,
                pace: (_c = data.pace) !== null && _c !== void 0 ? _c : 1.0,
                loudness: (_d = data.loudness) !== null && _d !== void 0 ? _d : 1.0,
                speech_sample_rate: (_e = data.speech_sample_rate) !== null && _e !== void 0 ? _e : 22050,
                enable_preprocessing: (_f = data.enable_preprocessing) !== null && _f !== void 0 ? _f : false,
                output_audio_codec: (_g = data.output_audio_codec) !== null && _g !== void 0 ? _g : "mp3",
                output_audio_bitrate: (_h = data.output_audio_bitrate) !== null && _h !== void 0 ? _h : "128k",
                dict_id: data.dict_id,
                min_buffer_size: (_j = data.min_buffer_size) !== null && _j !== void 0 ? _j : 50,
                max_chunk_length: (_k = data.max_chunk_length) !== null && _k !== void 0 ? _k : 150,
            },
        };
        this.sendJson(message);
    }
    convert(text) {
        this.assertSocketIsOpen();
        const message = {
            type: "text",
            data: { text },
        };
        this.sendJson(message);
    }
    flush() {
        this.assertSocketIsOpen();
        const message = { type: "flush" };
        this.sendJson(message);
    }
    ping() {
        this.assertSocketIsOpen();
        const message = { type: "ping" };
        this.sendJson(message);
    }
    /** Connect to the websocket and register event handlers. */
    connect() {
        this.socket.reconnect();
        this.socket.addEventListener("open", this.handleOpen);
        this.socket.addEventListener("message", this.handleMessage);
        this.socket.addEventListener("close", this.handleClose);
        this.socket.addEventListener("error", this.handleError);
        return this;
    }
    /** Close the websocket and unregister event handlers. */
    close() {
        this.socket.close();
        this.handleClose({ code: 1000 });
        this.socket.removeEventListener("open", this.handleOpen);
        this.socket.removeEventListener("message", this.handleMessage);
        this.socket.removeEventListener("close", this.handleClose);
        this.socket.removeEventListener("error", this.handleError);
    }
    /** Returns a promise that resolves when the websocket is open. */
    waitForOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.socket.readyState === core.ReconnectingWebSocket.OPEN) {
                return this.socket;
            }
            return new Promise((resolve, reject) => {
                this.socket.addEventListener("open", () => {
                    resolve(this.socket);
                });
                this.socket.addEventListener("error", (event) => {
                    reject(event);
                });
            });
        });
    }
    /** Asserts that the websocket is open. */
    assertSocketIsOpen() {
        if (!this.socket) {
            throw new Error("Socket is not connected.");
        }
        if (this.socket.readyState !== core.ReconnectingWebSocket.OPEN) {
            throw new Error("Socket is not open.");
        }
    }
    /** Send a binary payload to the websocket. */
    sendBinary(payload) {
        this.socket.send(payload);
    }
    /** Send a JSON payload to the websocket. */
    sendJson(payload) {
        const jsonPayload = (0, json_js_1.toJson)(payload);
        this.socket.send(jsonPayload);
    }
}
exports.TextToSpeechStreamingSocket = TextToSpeechStreamingSocket;

},{"../../../../core/index.js":234,"../../../../core/json.js":235}],71:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],72:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"./client/index.js":71,"./types/index.js":75,"dup":40}],73:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechStreamingModel = void 0;
/**
 * Text to speech model to use.
 * - **bulbul:v2** (default): Standard TTS model with pitch/loudness support
 * - **bulbul:v3**: Advanced model with temperature control (no pitch/loudness)
 */
exports.TextToSpeechStreamingModel = {
    BulbulV2: "bulbul:v2",
    BulbulV3: "bulbul:v3",
};

},{}],74:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechStreamingSendCompletionEvent = void 0;
/** Enable completion event notifications when TTS generation finishes. When set to true, an event message will be sent when the final audio chunk has been generated. */
exports.TextToSpeechStreamingSendCompletionEvent = {
    True: "true",
    False: "false",
};

},{}],75:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./TextToSpeechStreamingModel.js"), exports);
__exportStar(require("./TextToSpeechStreamingSendCompletionEvent.js"), exports);

},{"./TextToSpeechStreamingModel.js":73,"./TextToSpeechStreamingSendCompletionEvent.js":74}],76:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const handleNonStatusCodeError_js_1 = require("../../../../errors/handleNonStatusCodeError.js");
const errors = __importStar(require("../../../../errors/index.js"));
const SarvamAI = __importStar(require("../../../index.js"));
class TextToSpeechClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    /**
     * Convert text into spoken audio. The output is a base64-encoded audio string that must be decoded before use.
     *
     * **Available Models:**
     * - **bulbul:v3**: Latest model with improved quality, 30+ voices, and temperature control
     * - **bulbul:v2**: Legacy model with pitch and loudness controls
     *
     * **Important Notes for bulbul:v3:**
     * - Pitch and loudness parameters are NOT supported
     * - Pace range: 0.5 to 2.0
     * - Preprocessing is automatically enabled
     * - Default sample rate is 24000 Hz
     * - Supports sample rates: 8000, 16000, 22050, 24000 Hz (REST API also supports 32000, 44100, 48000 Hz)
     *
     * @param {SarvamAI.TextToSpeechRequest} request
     * @param {TextToSpeechClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.textToSpeech.convert({
     *         text: "text",
     *         target_language_code: "bn-IN"
     *     })
     */
    convert(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__convert(request, requestOptions));
    }
    __convert(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "text-to-speech"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "POST", "/text-to-speech");
        });
    }
    /**
     * Converts the input text into a streamed spoken audio response.
     *
     * This endpoint supports streaming audio using the specified output codec (e.g., `audio/mpeg` for MP3). The response is returned as a binary audio stream, which can be played or saved directly by the client.
     *
     * Supports the `dict_id` parameter to apply a [pronunciation dictionary](https://docs.sarvam.ai/api-reference-docs/pronunciation-dictionary/create) during synthesis.
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     */
    convertStream(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__convertStream(request, requestOptions));
    }
    __convertStream(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "text-to-speech/stream"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                responseType: "binary-response",
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "POST", "/text-to-speech/stream");
        });
    }
}
exports.TextToSpeechClient = TextToSpeechClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"../../../../errors/handleNonStatusCodeError.js":252,"../../../../errors/index.js":253,"../../../index.js":17}],77:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./requests/index.js":78,"dup":19}],78:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],79:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./client/index.js":77,"dup":21}],80:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextClient = void 0;
const BaseClient_js_1 = require("../../../../BaseClient.js");
const headers_js_1 = require("../../../../core/headers.js");
const core = __importStar(require("../../../../core/index.js"));
const environments = __importStar(require("../../../../environments.js"));
const handleNonStatusCodeError_js_1 = require("../../../../errors/handleNonStatusCodeError.js");
const errors = __importStar(require("../../../../errors/index.js"));
const SarvamAI = __importStar(require("../../../index.js"));
class TextClient {
    constructor(options = {}) {
        this._options = (0, BaseClient_js_1.normalizeClientOptionsWithAuth)(options);
    }
    /**
     * **Translation** converts text from one language to another while preserving its meaning.
     * For Example: **'मैं ऑफिस जा रहा हूँ'** translates to **'I am going to the office'** in English, where the script and language change, but the original meaning remains the same.
     *
     * Available languages:
     * - **`bn-IN`**: Bengali
     * - **`en-IN`**: English
     * - **`gu-IN`**: Gujarati
     * - **`hi-IN`**: Hindi
     * - **`kn-IN`**: Kannada
     * - **`ml-IN`**: Malayalam
     * - **`mr-IN`**: Marathi
     * - **`od-IN`**: Odia
     * - **`pa-IN`**: Punjabi
     * - **`ta-IN`**: Tamil
     * - **`te-IN`**: Telugu
     *
     * ### Newly added languages:
     * - **`as-IN`**: Assamese
     * - **`brx-IN`**: Bodo
     * - **`doi-IN`**: Dogri
     * - **`kok-IN`**: Konkani
     * - **`ks-IN`**: Kashmiri
     * - **`mai-IN`**: Maithili
     * - **`mni-IN`**: Manipuri (Meiteilon)
     * - **`ne-IN`**: Nepali
     * - **`sa-IN`**: Sanskrit
     * - **`sat-IN`**: Santali
     * - **`sd-IN`**: Sindhi
     * - **`ur-IN`**: Urdu
     *
     * For hands-on practice, you can explore the notebook tutorial on [Translate API Tutorial](https://github.com/sarvamai/sarvam-ai-cookbook/blob/main/notebooks/translate/Translate_API_Tutorial.ipynb).
     *
     * @param {SarvamAI.TranslationRequest} request
     * @param {TextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.text.translate({
     *         input: "input",
     *         source_language_code: "auto",
     *         target_language_code: "bn-IN"
     *     })
     */
    translate(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__translate(request, requestOptions));
    }
    __translate(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "translate"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "POST", "/translate");
        });
    }
    /**
     * Identifies the language (e.g., en-IN, hi-IN) and script (e.g., Latin, Devanagari) of the input text, supporting multiple languages.
     *
     * @param {SarvamAI.LanguageIdentificationRequest} request
     * @param {TextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.text.identifyLanguage({
     *         input: "input"
     *     })
     */
    identifyLanguage(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__identifyLanguage(request, requestOptions));
    }
    __identifyLanguage(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "text-lid"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return {
                    data: _response.body,
                    rawResponse: _response.rawResponse,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "POST", "/text-lid");
        });
    }
    /**
     * **Transliteration** converts text from one script to another while preserving the original pronunciation. For example, **'नमस्ते'** becomes **'namaste'** in English, and **'how are you'** can be written as **'हाउ आर यू'** in Devanagari. This process ensures that the sound of the original text remains intact, even when written in a different script.
     *
     * Transliteration is useful when you want to represent words phonetically across different writing systems, such as converting **'मैं ऑफिस जा रहा हूँ'** to **'main office ja raha hun'** in English letters.
     *
     * **Translation**, on the other hand, converts text from one language to another while preserving the meaning rather than pronunciation. For example, **'मैं ऑफिस जा रहा हूँ'** translates to **'I am going to the office'** in English, changing both the script and the language while conveying the intended message.
     * ### Examples of **Transliteration**:
     * - **'Good morning'** becomes **'गुड मॉर्निंग'** in Hindi, where the pronunciation is preserved but the meaning is not translated.
     * - **'सुप्रभात'** becomes **'suprabhat'** in English.
     *
     * Available languages:
     * - **`en-IN`**: English
     * - **`hi-IN`**: Hindi
     * - **`bn-IN`**: Bengali
     * - **`gu-IN`**: Gujarati
     * - **`kn-IN`**: Kannada
     * - **`ml-IN`**: Malayalam
     * - **`mr-IN`**: Marathi
     * - **`od-IN`**: Odia
     * - **`pa-IN`**: Punjabi
     * - **`ta-IN`**: Tamil
     * - **`te-IN`**: Telugu
     *
     * For hands-on practice, you can explore the notebook tutorial on [Transliterate API Tutorial](https://github.com/sarvamai/sarvam-ai-cookbook/blob/main/notebooks/transliterate/Transliterate_API_Tutorial.ipynb).
     *
     * @param {SarvamAI.TransliterationRequest} request
     * @param {TextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.text.transliterate({
     *         input: "input",
     *         source_language_code: "auto",
     *         target_language_code: "bn-IN"
     *     })
     */
    transliterate(request, requestOptions) {
        return core.HttpResponsePromise.fromPromise(this.__transliterate(request, requestOptions));
    }
    __transliterate(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const _authRequest = yield this._options.authProvider.getAuthRequest();
            const _headers = (0, headers_js_1.mergeHeaders)(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
            const _response = yield core.fetcher({
                url: core.url.join((_b = (yield core.Supplier.get(this._options.baseUrl))) !== null && _b !== void 0 ? _b : ((_c = (yield core.Supplier.get(this._options.environment))) !== null && _c !== void 0 ? _c : environments.SarvamAIEnvironment.Production).base, "transliterate"),
                method: "POST",
                headers: _headers,
                contentType: "application/json",
                queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
                requestType: "json",
                body: request,
                timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1000,
                maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
                fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
                logging: this._options.logging,
            });
            if (_response.ok) {
                return { data: _response.body, rawResponse: _response.rawResponse };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SarvamAI.BadRequestError(_response.error.body, _response.rawResponse);
                    case 403:
                        throw new SarvamAI.ForbiddenError(_response.error.body, _response.rawResponse);
                    case 422:
                        throw new SarvamAI.UnprocessableEntityError(_response.error.body, _response.rawResponse);
                    case 429:
                        throw new SarvamAI.TooManyRequestsError(_response.error.body, _response.rawResponse);
                    case 500:
                        throw new SarvamAI.InternalServerError(_response.error.body, _response.rawResponse);
                    default:
                        throw new errors.SarvamAIError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                            rawResponse: _response.rawResponse,
                        });
                }
            }
            return (0, handleNonStatusCodeError_js_1.handleNonStatusCodeError)(_response.error, _response.rawResponse, "POST", "/transliterate");
        });
    }
}
exports.TextClient = TextClient;

},{"../../../../BaseClient.js":6,"../../../../core/headers.js":233,"../../../../core/index.js":234,"../../../../environments.js":249,"../../../../errors/handleNonStatusCodeError.js":252,"../../../../errors/index.js":253,"../../../index.js":17}],81:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./requests/index.js":82,"dup":19}],82:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],83:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./client/index.js":81,"dup":21}],84:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });

},{}],85:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],86:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],87:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],88:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],89:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],90:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],91:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],92:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],93:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],94:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],95:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],96:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],97:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],98:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],99:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],100:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],101:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionEventFlag = void 0;
/** Enable completion event notifications when TTS generation finishes. When set to true, an event message will be sent when the final audio chunk has been generated. */
exports.CompletionEventFlag = {
    True: "true",
    False: "false",
};

},{}],102:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],103:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],104:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureConnection = void 0;
var ConfigureConnection;
(function (ConfigureConnection) {
    let Data;
    (function (Data) {
        /**
         * Specifies the model to use for text-to-speech conversion.
         * - **bulbul:v2** (default): Standard TTS model with pitch/loudness support
         * - **bulbul:v3**: Advanced model with temperature control (no pitch/loudness)
         */
        Data.Model = {
            BulbulV2: "bulbul:v2",
            BulbulV3: "bulbul:v3",
        };
        /** The language of the text in BCP-47 format */
        Data.TargetLanguageCode = {
            BnIn: "bn-IN",
            EnIn: "en-IN",
            GuIn: "gu-IN",
            HiIn: "hi-IN",
            KnIn: "kn-IN",
            MlIn: "ml-IN",
            MrIn: "mr-IN",
            OdIn: "od-IN",
            PaIn: "pa-IN",
            TaIn: "ta-IN",
            TeIn: "te-IN",
        };
        /**
         * The speaker voice to be used for the output audio.
         *
         * **Model Compatibility:**
         * - **bulbul:v2:** anushka (default), abhilash, manisha, vidya, arya, karun, hitesh
         * - **bulbul:v3:** aditya (default), ritu, priya, neha, rahul, pooja, rohan, simran, kavya, amit, dev, ishita, shreya, ratan, varun, manan, sumit, roopa, kabir, aayan, shubh, ashutosh, advait, amelia, sophia
         *
         * **Note:** Speaker selection must match the chosen model version.
         */
        Data.Speaker = {
            Anushka: "anushka",
            Abhilash: "abhilash",
            Manisha: "manisha",
            Vidya: "vidya",
            Arya: "arya",
            Karun: "karun",
            Hitesh: "hitesh",
            Aditya: "aditya",
            Ritu: "ritu",
            Priya: "priya",
            Neha: "neha",
            Rahul: "rahul",
            Pooja: "pooja",
            Rohan: "rohan",
            Simran: "simran",
            Kavya: "kavya",
            Amit: "amit",
            Dev: "dev",
            Ishita: "ishita",
            Shreya: "shreya",
            Ratan: "ratan",
            Varun: "varun",
            Manan: "manan",
            Sumit: "sumit",
            Roopa: "roopa",
            Kabir: "kabir",
            Aayan: "aayan",
            Shubh: "shubh",
            Ashutosh: "ashutosh",
            Advait: "advait",
            Amelia: "amelia",
            Sophia: "sophia",
        };
        /** Audio codec (currently supports MP3 only, optimized for real-time playback) */
        Data.OutputAudioCodec = {
            Linear16: "linear16",
            Mulaw: "mulaw",
            Alaw: "alaw",
            Opus: "opus",
            Flac: "flac",
            Aac: "aac",
            Wav: "wav",
            Mp3: "mp3",
        };
        /** Audio bitrate (choose from 5 supported bitrate options) */
        Data.OutputAudioBitrate = {
            ThirtyTwoK: "32k",
            SixtyFourK: "64k",
            NinetySixK: "96k",
            OneHundredTwentyEightK: "128k",
            OneHundredNinetyTwoK: "192k",
        };
    })(Data = ConfigureConnection.Data || (ConfigureConnection.Data = {}));
})(ConfigureConnection || (exports.ConfigureConnection = ConfigureConnection = {}));

},{}],105:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],106:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],107:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],108:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],109:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],110:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],111:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocDigitizationErrorCode = void 0;
exports.DocDigitizationErrorCode = {
    InvalidRequestError: "invalid_request_error",
    InternalServerError: "internal_server_error",
    InsufficientQuotaError: "insufficient_quota_error",
    InvalidApiKeyError: "invalid_api_key_error",
    RateLimitExceededError: "rate_limit_exceeded_error",
    HighLoadError: "high_load_error",
};

},{}],112:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],113:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],114:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],115:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocDigitizationJobDetailState = void 0;
/** Processing state for individual file */
exports.DocDigitizationJobDetailState = {
    Pending: "Pending",
    Running: "Running",
    Success: "Success",
    PartialSuccess: "PartialSuccess",
    Failed: "Failed",
};

},{}],116:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],117:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocDigitizationJobState = void 0;
/** Current state of the document intelligence job */
exports.DocDigitizationJobState = {
    Accepted: "Accepted",
    Pending: "Pending",
    Running: "Running",
    Completed: "Completed",
    PartiallyCompleted: "PartiallyCompleted",
    Failed: "Failed",
};

},{}],118:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],119:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocDigitizationOutputFormat = void 0;
/**  Output format for extracted document content, delivered as a ZIP file. 'html' returns structured HTML files, 'md' returns human-readable Markdown files, 'json' returns structured JSON files for programmatic processing. */
exports.DocDigitizationOutputFormat = {
    Html: "html",
    Md: "md",
    Json: "json",
};

},{}],120:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],121:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocDigitizationSupportedLanguage = void 0;
/** BCP-47 language code specifying the primary language of the document. Supports 23 languages: 22 Indian languages (Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, Urdu, Sanskrit, Nepali, Konkani, Maithili, Sindhi, Kashmiri, Dogri, Manipuri, Bodo, Santali) and English language. */
exports.DocDigitizationSupportedLanguage = {
    HiIn: "hi-IN",
    EnIn: "en-IN",
    BnIn: "bn-IN",
    GuIn: "gu-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OrIn: "or-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    UrIn: "ur-IN",
    AsIn: "as-IN",
    BodoIn: "bodo-IN",
    DoiIn: "doi-IN",
    KsIn: "ks-IN",
    KokIn: "kok-IN",
    MaiIn: "mai-IN",
    MniIn: "mni-IN",
    NeIn: "ne-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    SdIn: "sd-IN",
};

},{}],122:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],123:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],124:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
exports.ErrorCode = {
    InvalidRequestError: "invalid_request_error",
    InternalServerError: "internal_server_error",
    UnprocessableEntityError: "unprocessable_entity_error",
    InsufficientQuotaError: "insufficient_quota_error",
    InvalidApiKeyError: "invalid_api_key_error",
    AuthenticationError: "authentication_error",
    NotFoundError: "not_found_error",
    RateLimitExceededError: "rate_limit_exceeded_error",
};

},{}],125:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode2 = void 0;
exports.ErrorCode2 = {
    InvalidRequestError: "invalid_request_error",
    InternalServerError: "internal_server_error",
    UnprocessableEntityError: "unprocessable_entity_error",
    InsufficientQuotaError: "insufficient_quota_error",
    InvalidApiKeyError: "invalid_api_key_error",
    AuthenticationError: "authentication_error",
    RateLimitExceededError: "rate_limit_exceeded_error",
    NotFoundError: "not_found_error",
};

},{}],126:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],127:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],128:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],129:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],130:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],131:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],132:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],133:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsData = void 0;
var EventsData;
(function (EventsData) {
    /** VAD signal type */
    EventsData.SignalType = {
        StartSpeech: "START_SPEECH",
        EndSpeech: "END_SPEECH",
    };
})(EventsData || (exports.EventsData = EventsData = {}));

},{}],134:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],135:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],136:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],137:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],138:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishReason = void 0;
exports.FinishReason = {
    Stop: "stop",
    Length: "length",
    ToolCalls: "tool_calls",
    ContentFilter: "content_filter",
    FunctionCall: "function_call",
};

},{}],139:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],140:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],141:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],142:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputAudioCodec = void 0;
/** Audio codec/format of the input file. Our API automatically detects all codec formats, but for PCM files specifically (pcm_s16le, pcm_l16, pcm_raw), you must pass this parameter. PCM files are supported only at 16kHz sample rate. */
exports.InputAudioCodec = {
    Wav: "wav",
    XWav: "x-wav",
    Wave: "wave",
    Mp3: "mp3",
    Mpeg: "mpeg",
    Mpeg3: "mpeg3",
    XMp3: "x-mp3",
    XMpeg3: "x-mpeg-3",
    Aac: "aac",
    XAac: "x-aac",
    Aiff: "aiff",
    XAiff: "x-aiff",
    Ogg: "ogg",
    Opus: "opus",
    Flac: "flac",
    XFlac: "x-flac",
    Mp4: "mp4",
    Xm4A: "x-m4a",
    Amr: "amr",
    XMsWma: "x-ms-wma",
    Webm: "webm",
    PcmS16Le: "pcm_s16le",
    PcmL16: "pcm_l16",
    PcmRaw: "pcm_raw",
};

},{}],143:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobState = void 0;
exports.JobState = {
    Accepted: "Accepted",
    Pending: "Pending",
    Running: "Running",
    Completed: "Completed",
    Failed: "Failed",
};

},{}],144:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],145:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],146:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mode = void 0;
/**
 * Mode of operation for saaras:v3 model.
 *
 * Example audio: 'मेरा फोन नंबर है 9840950950'
 *
 * - **transcribe** (default): Standard transcription in the original language with proper formatting and number normalization.
 *   - Output: `मेरा फोन नंबर है 9840950950`
 *
 * - **translate**: Translates speech from any supported Indic language to English.
 *   - Output: `My phone number is 9840950950`
 *
 * - **verbatim**: Exact word-for-word transcription without normalization, preserving filler words and spoken numbers as-is.
 *   - Output: `मेरा फोन नंबर है नौ आठ चार zero नौ पांच zero नौ पांच zero`
 *
 * - **translit**: Romanization - Transliterates speech to Latin/Roman script only.
 *   - Output: `mera phone number hai 9840950950`
 *
 * - **codemix**: Code-mixed text with English words in English and Indic words in native script.
 *   - Output: `मेरा phone number है 9840950950`
 */
exports.Mode = {
    Transcribe: "transcribe",
    Translate: "translate",
    Verbatim: "verbatim",
    Translit: "translit",
    Codemix: "codemix",
};

},{}],147:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeralsFormat = void 0;
exports.NumeralsFormat = {
    International: "international",
    Native: "native",
};

},{}],148:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],149:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],150:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],151:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],152:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],153:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],154:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReasoningEffort = void 0;
exports.ReasoningEffort = {
    Low: "low",
    Medium: "medium",
    High: "high",
};

},{}],155:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseType = void 0;
/** Type of WebSocket response */
exports.ResponseType = {
    Data: "data",
    Error: "error",
    Events: "events",
};

},{}],156:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],157:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SarvamModelIds = void 0;
/** Supported chat completion model IDs. Primary models: `sarvam-30b`, `sarvam-105b`. Legacy: `sarvam-m` (24B); prefer Sarvam-30B or Sarvam-105B for new integrations. */
exports.SarvamModelIds = {
    Sarvam105B: "sarvam-105b",
    Sarvam30B: "sarvam-30b",
    SarvamM: "sarvam-m",
};

},{}],158:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],159:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],160:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechStreamBitrate = void 0;
exports.SpeechStreamBitrate = {
    ThirtyTwoK: "32k",
    SixtyFourK: "64k",
    NinetySixK: "96k",
    OneHundredTwentyEightK: "128k",
    OneHundredNinetyTwoK: "192k",
};

},{}],161:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechStreamCodec = void 0;
exports.SpeechStreamCodec = {
    Mp3: "mp3",
    Linear16: "linear16",
    Mulaw: "mulaw",
    Alaw: "alaw",
    Opus: "opus",
    Flac: "flac",
    Aac: "aac",
    Wav: "wav",
};

},{}],162:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],163:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextLanguage = void 0;
/**
 * Languages supported for Speech-to-Text.
 *
 * **saarika:v2.5 supports (12 languages):** unknown, hi-IN, bn-IN, kn-IN, ml-IN, mr-IN, od-IN, pa-IN, ta-IN, te-IN, en-IN, gu-IN
 *
 * **saaras:v3 supports all 23 languages** including: as-IN, ur-IN, ne-IN, kok-IN, ks-IN, sd-IN, sa-IN, sat-IN, mni-IN, brx-IN, mai-IN, doi-IN
 */
exports.SpeechToTextLanguage = {
    Unknown: "unknown",
    HiIn: "hi-IN",
    BnIn: "bn-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    AsIn: "as-IN",
    UrIn: "ur-IN",
    NeIn: "ne-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    SdIn: "sd-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    MniIn: "mni-IN",
    BrxIn: "brx-IN",
    MaiIn: "mai-IN",
    DoiIn: "doi-IN",
};

},{}],164:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextModel = void 0;
/**
 * Model to be used for speech to text.
 *
 * - **saarika:v2.5** (default): Transcribes audio in the spoken language.
 *
 * - **saaras:v3**: State-of-the-art model with flexible output formats. Supports multiple modes via the `mode` parameter: transcribe, translate, verbatim, translit, codemix.
 */
exports.SpeechToTextModel = {
    SaarikaV25: "saarika:v2.5",
    SaarasV3: "saaras:v3",
};

},{}],165:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],166:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],167:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],168:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],169:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],170:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechToTextTranslateLanguage = void 0;
/**
 * Languages supported for Speech-to-Text-Translate (detected source language).
 *
 * **saaras:v2.5 supports (11 languages):** hi-IN, bn-IN, kn-IN, ml-IN, mr-IN, od-IN, pa-IN, ta-IN, te-IN, gu-IN, en-IN
 *
 * **All 22 languages available** including: as-IN, ur-IN, ne-IN, kok-IN, ks-IN, sd-IN, sa-IN, sat-IN, mni-IN, brx-IN, mai-IN, doi-IN
 */
exports.SpeechToTextTranslateLanguage = {
    HiIn: "hi-IN",
    BnIn: "bn-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    GuIn: "gu-IN",
    EnIn: "en-IN",
    AsIn: "as-IN",
    UrIn: "ur-IN",
    NeIn: "ne-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    SdIn: "sd-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    MniIn: "mni-IN",
    BrxIn: "brx-IN",
    MaiIn: "mai-IN",
    DoiIn: "doi-IN",
};

},{}],171:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],172:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],173:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],174:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],175:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],176:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpokenFormNumeralsFormat = void 0;
exports.SpokenFormNumeralsFormat = {
    English: "english",
    Native: "native",
};

},{}],177:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],178:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageContainerType = void 0;
exports.StorageContainerType = {
    Azure: "Azure",
    Local: "Local",
    Google: "Google",
    AzureV1: "Azure_V1",
};

},{}],179:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],180:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],181:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],182:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskState = void 0;
exports.TaskState = {
    Success: "Success",
    ApiError: "API Error",
    InternalServerError: "Internal Server Error",
};

},{}],183:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechLanguage = void 0;
exports.TextToSpeechLanguage = {
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
};

},{}],184:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechModel = void 0;
exports.TextToSpeechModel = {
    BulbulV2: "bulbul:v2",
    BulbulV3: "bulbul:v3",
};

},{}],185:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechOutputAudioCodec = void 0;
/** Audio codec options for the non-streaming /text-to-speech endpoint */
exports.TextToSpeechOutputAudioCodec = {
    Mp3: "mp3",
    Linear16: "linear16",
    Mulaw: "mulaw",
    Alaw: "alaw",
    Opus: "opus",
    Flac: "flac",
    Aac: "aac",
    Wav: "wav",
};

},{}],186:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],187:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechSpeaker = void 0;
exports.TextToSpeechSpeaker = {
    Anushka: "anushka",
    Abhilash: "abhilash",
    Manisha: "manisha",
    Vidya: "vidya",
    Arya: "arya",
    Karun: "karun",
    Hitesh: "hitesh",
    Aditya: "aditya",
    Ritu: "ritu",
    Priya: "priya",
    Neha: "neha",
    Rahul: "rahul",
    Pooja: "pooja",
    Rohan: "rohan",
    Simran: "simran",
    Kavya: "kavya",
    Amit: "amit",
    Dev: "dev",
    Ishita: "ishita",
    Shreya: "shreya",
    Ratan: "ratan",
    Varun: "varun",
    Manan: "manan",
    Sumit: "sumit",
    Roopa: "roopa",
    Kabir: "kabir",
    Aayan: "aayan",
    Shubh: "shubh",
    Ashutosh: "ashutosh",
    Advait: "advait",
    Anand: "anand",
    Tanya: "tanya",
    Tarun: "tarun",
    Sunny: "sunny",
    Mani: "mani",
    Gokul: "gokul",
    Vijay: "vijay",
    Shruti: "shruti",
    Suhani: "suhani",
    Mohit: "mohit",
    Kavitha: "kavitha",
    Rehan: "rehan",
    Soham: "soham",
    Rupali: "rupali",
};

},{}],188:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],189:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],190:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],191:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateMode = void 0;
exports.TranslateMode = {
    Formal: "formal",
    ModernColloquial: "modern-colloquial",
    ClassicColloquial: "classic-colloquial",
    CodeMixed: "code-mixed",
};

},{}],192:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateModel = void 0;
exports.TranslateModel = {
    MayuraV1: "mayura:v1",
    SarvamTranslateV1: "sarvam-translate:v1",
};

},{}],193:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateSourceLanguage = void 0;
exports.TranslateSourceLanguage = {
    Auto: "auto",
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    AsIn: "as-IN",
    BrxIn: "brx-IN",
    DoiIn: "doi-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    MaiIn: "mai-IN",
    MniIn: "mni-IN",
    NeIn: "ne-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    SdIn: "sd-IN",
    UrIn: "ur-IN",
};

},{}],194:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateSpeakerGender = void 0;
exports.TranslateSpeakerGender = {
    Male: "Male",
    Female: "Female",
};

},{}],195:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateTargetLanguage = void 0;
exports.TranslateTargetLanguage = {
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    AsIn: "as-IN",
    BrxIn: "brx-IN",
    DoiIn: "doi-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    MaiIn: "mai-IN",
    MniIn: "mni-IN",
    NeIn: "ne-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    SdIn: "sd-IN",
    UrIn: "ur-IN",
};

},{}],196:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],197:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatiterateTargetLanguage = void 0;
exports.TranslatiterateTargetLanguage = {
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
};

},{}],198:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransliterateMode = void 0;
exports.TransliterateMode = {
    Roman: "roman",
    FullyNative: "fully-native",
    SpokenFormInNative: "spoken-form-in-native",
};

},{}],199:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransliterateSourceLanguage = void 0;
exports.TransliterateSourceLanguage = {
    Auto: "auto",
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
};

},{}],200:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"dup":84}],201:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./AudioData.js"), exports);
__exportStar(require("./AudioMessage.js"), exports);
__exportStar(require("./AudioOutput.js"), exports);
__exportStar(require("./BaseJobParameters.js"), exports);
__exportStar(require("./BulkJobCallback.js"), exports);
__exportStar(require("./BulkJobInitResponse.js"), exports);
__exportStar(require("./ChatCompletionMessageToolCall.js"), exports);
__exportStar(require("./ChatCompletionNamedToolChoice.js"), exports);
__exportStar(require("./ChatCompletionNamedToolChoiceFunction.js"), exports);
__exportStar(require("./ChatCompletionRequestAssistantMessage.js"), exports);
__exportStar(require("./ChatCompletionRequestMessage.js"), exports);
__exportStar(require("./ChatCompletionRequestSystemMessage.js"), exports);
__exportStar(require("./ChatCompletionRequestToolMessage.js"), exports);
__exportStar(require("./ChatCompletionRequestUserMessage.js"), exports);
__exportStar(require("./ChatCompletionResponseMessage.js"), exports);
__exportStar(require("./ChatCompletionTool.js"), exports);
__exportStar(require("./Choice.js"), exports);
__exportStar(require("./CompletionEventFlag.js"), exports);
__exportStar(require("./CompletionUsage.js"), exports);
__exportStar(require("./ConfigMessage.js"), exports);
__exportStar(require("./ConfigureConnection.js"), exports);
__exportStar(require("./ConnectionSampleRate.js"), exports);
__exportStar(require("./CreateChatCompletionResponse.js"), exports);
__exportStar(require("./DiarizedEntry.js"), exports);
__exportStar(require("./DiarizedTranscript.js"), exports);
__exportStar(require("./DocDigitizationCreateJobResponse.js"), exports);
__exportStar(require("./DocDigitizationDownloadFilesResponse.js"), exports);
__exportStar(require("./DocDigitizationErrorCode.js"), exports);
__exportStar(require("./DocDigitizationErrorDetails.js"), exports);
__exportStar(require("./DocDigitizationErrorMessage.js"), exports);
__exportStar(require("./DocDigitizationJobDetail.js"), exports);
__exportStar(require("./DocDigitizationJobDetailState.js"), exports);
__exportStar(require("./DocDigitizationJobParameters.js"), exports);
__exportStar(require("./DocDigitizationJobState.js"), exports);
__exportStar(require("./DocDigitizationJobStatusResponse.js"), exports);
__exportStar(require("./DocDigitizationOutputFormat.js"), exports);
__exportStar(require("./DocDigitizationPageError.js"), exports);
__exportStar(require("./DocDigitizationSupportedLanguage.js"), exports);
__exportStar(require("./DocDigitizationUploadFilesResponse.js"), exports);
__exportStar(require("./DocDigitizationWebhookCallback.js"), exports);
__exportStar(require("./ErrorCode.js"), exports);
__exportStar(require("./ErrorCode2.js"), exports);
__exportStar(require("./ErrorData.js"), exports);
__exportStar(require("./ErrorDetails.js"), exports);
__exportStar(require("./ErrorDetails2.js"), exports);
__exportStar(require("./ErrorMessage.js"), exports);
__exportStar(require("./ErrorMessage2.js"), exports);
__exportStar(require("./ErrorResponse.js"), exports);
__exportStar(require("./EventResponse.js"), exports);
__exportStar(require("./EventsData.js"), exports);
__exportStar(require("./FileSignedUrlDetails.js"), exports);
__exportStar(require("./FilesDownloadResponse.js"), exports);
__exportStar(require("./FilesRequest.js"), exports);
__exportStar(require("./FilesUploadResponse.js"), exports);
__exportStar(require("./FinishReason.js"), exports);
__exportStar(require("./FlushSignal.js"), exports);
__exportStar(require("./FunctionCall.js"), exports);
__exportStar(require("./FunctionDefinition.js"), exports);
__exportStar(require("./InputAudioCodec.js"), exports);
__exportStar(require("./JobState.js"), exports);
__exportStar(require("./JobStatusResponse.js"), exports);
__exportStar(require("./LanguageIdentificationResponse.js"), exports);
__exportStar(require("./Mode.js"), exports);
__exportStar(require("./NumeralsFormat.js"), exports);
__exportStar(require("./PingSignal.js"), exports);
__exportStar(require("./PronunciationDictionaryData.js"), exports);
__exportStar(require("./PronunciationDictionaryDeleteResponse.js"), exports);
__exportStar(require("./PronunciationDictionaryGetResponse.js"), exports);
__exportStar(require("./PronunciationDictionaryResponse.js"), exports);
__exportStar(require("./PronunciationDictionaryUpdateResponse.js"), exports);
__exportStar(require("./ReasoningEffort.js"), exports);
__exportStar(require("./ResponseType.js"), exports);
__exportStar(require("./Role.js"), exports);
__exportStar(require("./SarvamModelIds.js"), exports);
__exportStar(require("./SendText.js"), exports);
__exportStar(require("./SpeechSampleRate.js"), exports);
__exportStar(require("./SpeechStreamBitrate.js"), exports);
__exportStar(require("./SpeechStreamCodec.js"), exports);
__exportStar(require("./SpeechToTextJobParameters.js"), exports);
__exportStar(require("./SpeechToTextLanguage.js"), exports);
__exportStar(require("./SpeechToTextModel.js"), exports);
__exportStar(require("./SpeechToTextResponse.js"), exports);
__exportStar(require("./SpeechToTextResponseData.js"), exports);
__exportStar(require("./SpeechToTextStreamingResponse.js"), exports);
__exportStar(require("./SpeechToTextTranscriptionData.js"), exports);
__exportStar(require("./SpeechToTextTranslateJobParameters.js"), exports);
__exportStar(require("./SpeechToTextTranslateLanguage.js"), exports);
__exportStar(require("./SpeechToTextTranslateModel.js"), exports);
__exportStar(require("./SpeechToTextTranslateResponse.js"), exports);
__exportStar(require("./SpeechToTextTranslateResponseData.js"), exports);
__exportStar(require("./SpeechToTextTranslateStreamingResponse.js"), exports);
__exportStar(require("./SpeechToTextTranslateTranscriptionData.js"), exports);
__exportStar(require("./SpokenFormNumeralsFormat.js"), exports);
__exportStar(require("./StopConfiguration.js"), exports);
__exportStar(require("./StorageContainerType.js"), exports);
__exportStar(require("./SttFlushSignal.js"), exports);
__exportStar(require("./TaskDetail.js"), exports);
__exportStar(require("./TaskFileDetails.js"), exports);
__exportStar(require("./TaskState.js"), exports);
__exportStar(require("./TextToSpeechLanguage.js"), exports);
__exportStar(require("./TextToSpeechModel.js"), exports);
__exportStar(require("./TextToSpeechOutputAudioCodec.js"), exports);
__exportStar(require("./TextToSpeechResponse.js"), exports);
__exportStar(require("./TextToSpeechSpeaker.js"), exports);
__exportStar(require("./TimestampsModel.js"), exports);
__exportStar(require("./ToolChoiceOption.js"), exports);
__exportStar(require("./TranscriptionMetrics.js"), exports);
__exportStar(require("./TranslateMode.js"), exports);
__exportStar(require("./TranslateModel.js"), exports);
__exportStar(require("./TranslateSourceLanguage.js"), exports);
__exportStar(require("./TranslateSpeakerGender.js"), exports);
__exportStar(require("./TranslateTargetLanguage.js"), exports);
__exportStar(require("./TranslationResponse.js"), exports);
__exportStar(require("./TranslatiterateTargetLanguage.js"), exports);
__exportStar(require("./TransliterateMode.js"), exports);
__exportStar(require("./TransliterateSourceLanguage.js"), exports);
__exportStar(require("./TransliterationResponse.js"), exports);

},{"./AudioData.js":84,"./AudioMessage.js":85,"./AudioOutput.js":86,"./BaseJobParameters.js":87,"./BulkJobCallback.js":88,"./BulkJobInitResponse.js":89,"./ChatCompletionMessageToolCall.js":90,"./ChatCompletionNamedToolChoice.js":91,"./ChatCompletionNamedToolChoiceFunction.js":92,"./ChatCompletionRequestAssistantMessage.js":93,"./ChatCompletionRequestMessage.js":94,"./ChatCompletionRequestSystemMessage.js":95,"./ChatCompletionRequestToolMessage.js":96,"./ChatCompletionRequestUserMessage.js":97,"./ChatCompletionResponseMessage.js":98,"./ChatCompletionTool.js":99,"./Choice.js":100,"./CompletionEventFlag.js":101,"./CompletionUsage.js":102,"./ConfigMessage.js":103,"./ConfigureConnection.js":104,"./ConnectionSampleRate.js":105,"./CreateChatCompletionResponse.js":106,"./DiarizedEntry.js":107,"./DiarizedTranscript.js":108,"./DocDigitizationCreateJobResponse.js":109,"./DocDigitizationDownloadFilesResponse.js":110,"./DocDigitizationErrorCode.js":111,"./DocDigitizationErrorDetails.js":112,"./DocDigitizationErrorMessage.js":113,"./DocDigitizationJobDetail.js":114,"./DocDigitizationJobDetailState.js":115,"./DocDigitizationJobParameters.js":116,"./DocDigitizationJobState.js":117,"./DocDigitizationJobStatusResponse.js":118,"./DocDigitizationOutputFormat.js":119,"./DocDigitizationPageError.js":120,"./DocDigitizationSupportedLanguage.js":121,"./DocDigitizationUploadFilesResponse.js":122,"./DocDigitizationWebhookCallback.js":123,"./ErrorCode.js":124,"./ErrorCode2.js":125,"./ErrorData.js":126,"./ErrorDetails.js":127,"./ErrorDetails2.js":128,"./ErrorMessage.js":129,"./ErrorMessage2.js":130,"./ErrorResponse.js":131,"./EventResponse.js":132,"./EventsData.js":133,"./FileSignedUrlDetails.js":134,"./FilesDownloadResponse.js":135,"./FilesRequest.js":136,"./FilesUploadResponse.js":137,"./FinishReason.js":138,"./FlushSignal.js":139,"./FunctionCall.js":140,"./FunctionDefinition.js":141,"./InputAudioCodec.js":142,"./JobState.js":143,"./JobStatusResponse.js":144,"./LanguageIdentificationResponse.js":145,"./Mode.js":146,"./NumeralsFormat.js":147,"./PingSignal.js":148,"./PronunciationDictionaryData.js":149,"./PronunciationDictionaryDeleteResponse.js":150,"./PronunciationDictionaryGetResponse.js":151,"./PronunciationDictionaryResponse.js":152,"./PronunciationDictionaryUpdateResponse.js":153,"./ReasoningEffort.js":154,"./ResponseType.js":155,"./Role.js":156,"./SarvamModelIds.js":157,"./SendText.js":158,"./SpeechSampleRate.js":159,"./SpeechStreamBitrate.js":160,"./SpeechStreamCodec.js":161,"./SpeechToTextJobParameters.js":162,"./SpeechToTextLanguage.js":163,"./SpeechToTextModel.js":164,"./SpeechToTextResponse.js":165,"./SpeechToTextResponseData.js":166,"./SpeechToTextStreamingResponse.js":167,"./SpeechToTextTranscriptionData.js":168,"./SpeechToTextTranslateJobParameters.js":169,"./SpeechToTextTranslateLanguage.js":170,"./SpeechToTextTranslateModel.js":171,"./SpeechToTextTranslateResponse.js":172,"./SpeechToTextTranslateResponseData.js":173,"./SpeechToTextTranslateStreamingResponse.js":174,"./SpeechToTextTranslateTranscriptionData.js":175,"./SpokenFormNumeralsFormat.js":176,"./StopConfiguration.js":177,"./StorageContainerType.js":178,"./SttFlushSignal.js":179,"./TaskDetail.js":180,"./TaskFileDetails.js":181,"./TaskState.js":182,"./TextToSpeechLanguage.js":183,"./TextToSpeechModel.js":184,"./TextToSpeechOutputAudioCodec.js":185,"./TextToSpeechResponse.js":186,"./TextToSpeechSpeaker.js":187,"./TimestampsModel.js":188,"./ToolChoiceOption.js":189,"./TranscriptionMetrics.js":190,"./TranslateMode.js":191,"./TranslateModel.js":192,"./TranslateSourceLanguage.js":193,"./TranslateSpeakerGender.js":194,"./TranslateTargetLanguage.js":195,"./TranslationResponse.js":196,"./TranslatiterateTargetLanguage.js":197,"./TransliterateMode.js":198,"./TransliterateSourceLanguage.js":199,"./TransliterationResponse.js":200}],202:[function(require,module,exports){
(function (process){(function (){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderAuthProvider = void 0;
const core = __importStar(require("../core/index.js"));
const errors = __importStar(require("../errors/index.js"));
const PARAM_KEY = "apiSubscriptionKey";
const ENV_HEADER_KEY = "SARVAM_API_KEY";
const HEADER_NAME = "api-subscription-key";
class HeaderAuthProvider {
    constructor(options) {
        this.options = options;
    }
    static canCreate(options) {
        var _a;
        return (options === null || options === void 0 ? void 0 : options[PARAM_KEY]) != null || ((_a = process.env) === null || _a === void 0 ? void 0 : _a[ENV_HEADER_KEY]) != null;
    }
    getAuthRequest() {
        return __awaiter(this, arguments, void 0, function* ({ endpointMetadata, } = {}) {
            var _a, _b;
            const headerValue = (_a = (yield core.Supplier.get(this.options[PARAM_KEY]))) !== null && _a !== void 0 ? _a : (_b = process.env) === null || _b === void 0 ? void 0 : _b[ENV_HEADER_KEY];
            if (headerValue == null) {
                throw new errors.SarvamAIError({
                    message: HeaderAuthProvider.AUTH_CONFIG_ERROR_MESSAGE,
                });
            }
            return {
                headers: { [HEADER_NAME]: headerValue },
            };
        });
    }
}
exports.HeaderAuthProvider = HeaderAuthProvider;
(function (HeaderAuthProvider) {
    HeaderAuthProvider.AUTH_SCHEME = "ApiKeyAuth";
    HeaderAuthProvider.AUTH_CONFIG_ERROR_MESSAGE = `Please provide '${PARAM_KEY}' when initializing the client, or set the '${ENV_HEADER_KEY}' environment variable`;
    function createInstance(options) {
        return new HeaderAuthProvider(options);
    }
    HeaderAuthProvider.createInstance = createInstance;
})(HeaderAuthProvider || (exports.HeaderAuthProvider = HeaderAuthProvider = {}));

}).call(this)}).call(this,require('_process'))
},{"../core/index.js":234,"../errors/index.js":253,"_process":5}],203:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuth = void 0;
const base64_js_1 = require("../base64.js");
const BASIC_AUTH_HEADER_PREFIX = /^Basic /i;
exports.BasicAuth = {
    toAuthorizationHeader: (basicAuth) => {
        if (basicAuth == null) {
            return undefined;
        }
        const token = (0, base64_js_1.base64Encode)(`${basicAuth.username}:${basicAuth.password}`);
        return `Basic ${token}`;
    },
    fromAuthorizationHeader: (header) => {
        const credentials = header.replace(BASIC_AUTH_HEADER_PREFIX, "");
        const decoded = (0, base64_js_1.base64Decode)(credentials);
        const [username, ...passwordParts] = decoded.split(":");
        const password = passwordParts.length > 0 ? passwordParts.join(":") : undefined;
        if (username == null || password == null) {
            throw new Error("Invalid basic auth");
        }
        return {
            username,
            password,
        };
    },
};

},{"../base64.js":207}],204:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BearerToken = void 0;
const BEARER_AUTH_HEADER_PREFIX = /^Bearer /i;
function toAuthorizationHeader(token) {
    if (token == null) {
        return undefined;
    }
    return `Bearer ${token}`;
}
exports.BearerToken = {
    toAuthorizationHeader: toAuthorizationHeader,
    fromAuthorizationHeader: (header) => {
        return header.replace(BEARER_AUTH_HEADER_PREFIX, "").trim();
    },
};

},{}],205:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoOpAuthProvider = void 0;
class NoOpAuthProvider {
    getAuthRequest() {
        return Promise.resolve({ headers: {} });
    }
}
exports.NoOpAuthProvider = NoOpAuthProvider;

},{}],206:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoOpAuthProvider = exports.BearerToken = exports.BasicAuth = void 0;
var BasicAuth_js_1 = require("./BasicAuth.js");
Object.defineProperty(exports, "BasicAuth", { enumerable: true, get: function () { return BasicAuth_js_1.BasicAuth; } });
var BearerToken_js_1 = require("./BearerToken.js");
Object.defineProperty(exports, "BearerToken", { enumerable: true, get: function () { return BearerToken_js_1.BearerToken; } });
var NoOpAuthProvider_js_1 = require("./NoOpAuthProvider.js");
Object.defineProperty(exports, "NoOpAuthProvider", { enumerable: true, get: function () { return NoOpAuthProvider_js_1.NoOpAuthProvider; } });

},{"./BasicAuth.js":203,"./BearerToken.js":204,"./NoOpAuthProvider.js":205}],207:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64Encode = base64Encode;
exports.base64Decode = base64Decode;
function base64ToBytes(base64) {
    const binString = atob(base64);
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
}
function bytesToBase64(bytes) {
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
}
function base64Encode(input) {
    if (typeof Buffer !== "undefined") {
        return Buffer.from(input, "utf8").toString("base64");
    }
    const bytes = new TextEncoder().encode(input);
    return bytesToBase64(bytes);
}
function base64Decode(input) {
    if (typeof Buffer !== "undefined") {
        return Buffer.from(input, "base64").toString("utf8");
    }
    const bytes = base64ToBytes(input);
    return new TextDecoder().decode(bytes);
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":3}],208:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./file/exports.js"), exports);
__exportStar(require("./logging/exports.js"), exports);
__exportStar(require("./websocket/exports.js"), exports);

},{"./file/exports.js":226,"./logging/exports.js":236,"./websocket/exports.js":246}],209:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBinaryResponse = getBinaryResponse;
function getBinaryResponse(response) {
    const binaryResponse = {
        get bodyUsed() {
            return response.bodyUsed;
        },
        stream: () => response.body,
        arrayBuffer: response.arrayBuffer.bind(response),
        blob: response.blob.bind(response),
    };
    if ("bytes" in response && typeof response.bytes === "function") {
        binaryResponse.bytes = response.bytes.bind(response);
    }
    return binaryResponse;
}

},{}],210:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointSupplier = void 0;
exports.EndpointSupplier = {
    get: (supplier, arg) => __awaiter(void 0, void 0, void 0, function* () {
        if (typeof supplier === "function") {
            return supplier(arg);
        }
        else {
            return supplier;
        }
    }),
};

},{}],211:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetcher = void 0;
exports.fetcherImpl = fetcherImpl;
const json_js_1 = require("../json.js");
const logger_js_1 = require("../logging/logger.js");
const createRequestUrl_js_1 = require("./createRequestUrl.js");
const EndpointSupplier_js_1 = require("./EndpointSupplier.js");
const getErrorResponseBody_js_1 = require("./getErrorResponseBody.js");
const getFetchFn_js_1 = require("./getFetchFn.js");
const getRequestBody_js_1 = require("./getRequestBody.js");
const getResponseBody_js_1 = require("./getResponseBody.js");
const Headers_js_1 = require("./Headers.js");
const makeRequest_js_1 = require("./makeRequest.js");
const RawResponse_js_1 = require("./RawResponse.js");
const requestWithRetries_js_1 = require("./requestWithRetries.js");
const SENSITIVE_HEADERS = new Set([
    "authorization",
    "www-authenticate",
    "x-api-key",
    "api-key",
    "apikey",
    "x-api-token",
    "x-auth-token",
    "auth-token",
    "cookie",
    "set-cookie",
    "proxy-authorization",
    "proxy-authenticate",
    "x-csrf-token",
    "x-xsrf-token",
    "x-session-token",
    "x-access-token",
]);
function redactHeaders(headers) {
    const filtered = {};
    for (const [key, value] of headers instanceof Headers_js_1.Headers ? headers.entries() : Object.entries(headers)) {
        if (SENSITIVE_HEADERS.has(key.toLowerCase())) {
            filtered[key] = "[REDACTED]";
        }
        else {
            filtered[key] = value;
        }
    }
    return filtered;
}
const SENSITIVE_QUERY_PARAMS = new Set([
    "api_key",
    "api-key",
    "apikey",
    "token",
    "access_token",
    "access-token",
    "auth_token",
    "auth-token",
    "password",
    "passwd",
    "secret",
    "api_secret",
    "api-secret",
    "apisecret",
    "key",
    "session",
    "session_id",
    "session-id",
]);
function redactQueryParameters(queryParameters) {
    if (queryParameters == null) {
        return queryParameters;
    }
    const redacted = {};
    for (const [key, value] of Object.entries(queryParameters)) {
        if (SENSITIVE_QUERY_PARAMS.has(key.toLowerCase())) {
            redacted[key] = "[REDACTED]";
        }
        else {
            redacted[key] = value;
        }
    }
    return redacted;
}
function redactUrl(url) {
    const protocolIndex = url.indexOf("://");
    if (protocolIndex === -1)
        return url;
    const afterProtocol = protocolIndex + 3;
    // Find the first delimiter that marks the end of the authority section
    const pathStart = url.indexOf("/", afterProtocol);
    let queryStart = url.indexOf("?", afterProtocol);
    let fragmentStart = url.indexOf("#", afterProtocol);
    const firstDelimiter = Math.min(pathStart === -1 ? url.length : pathStart, queryStart === -1 ? url.length : queryStart, fragmentStart === -1 ? url.length : fragmentStart);
    // Find the LAST @ before the delimiter (handles multiple @ in credentials)
    let atIndex = -1;
    for (let i = afterProtocol; i < firstDelimiter; i++) {
        if (url[i] === "@") {
            atIndex = i;
        }
    }
    if (atIndex !== -1) {
        url = `${url.slice(0, afterProtocol)}[REDACTED]@${url.slice(atIndex + 1)}`;
    }
    // Recalculate queryStart since url might have changed
    queryStart = url.indexOf("?");
    if (queryStart === -1)
        return url;
    fragmentStart = url.indexOf("#", queryStart);
    const queryEnd = fragmentStart !== -1 ? fragmentStart : url.length;
    const queryString = url.slice(queryStart + 1, queryEnd);
    if (queryString.length === 0)
        return url;
    // FAST PATH: Quick check if any sensitive keywords present
    // Using indexOf is faster than regex for simple substring matching
    const lower = queryString.toLowerCase();
    const hasSensitive = lower.includes("token") ||
        lower.includes("key") ||
        lower.includes("password") ||
        lower.includes("passwd") ||
        lower.includes("secret") ||
        lower.includes("session") ||
        lower.includes("auth");
    if (!hasSensitive) {
        return url;
    }
    // SLOW PATH: Parse and redact
    const redactedParams = [];
    const params = queryString.split("&");
    for (const param of params) {
        const equalIndex = param.indexOf("=");
        if (equalIndex === -1) {
            redactedParams.push(param);
            continue;
        }
        const key = param.slice(0, equalIndex);
        let shouldRedact = SENSITIVE_QUERY_PARAMS.has(key.toLowerCase());
        if (!shouldRedact && key.includes("%")) {
            try {
                const decodedKey = decodeURIComponent(key);
                shouldRedact = SENSITIVE_QUERY_PARAMS.has(decodedKey.toLowerCase());
            }
            catch (_a) { }
        }
        redactedParams.push(shouldRedact ? `${key}=[REDACTED]` : param);
    }
    return url.slice(0, queryStart + 1) + redactedParams.join("&") + url.slice(queryEnd);
}
function getHeaders(args) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const newHeaders = new Headers_js_1.Headers();
        newHeaders.set("Accept", args.responseType === "json"
            ? "application/json"
            : args.responseType === "text"
                ? "text/plain"
                : args.responseType === "sse"
                    ? "text/event-stream"
                    : "*/*");
        if (args.body !== undefined && args.contentType != null) {
            newHeaders.set("Content-Type", args.contentType);
        }
        if (args.headers == null) {
            return newHeaders;
        }
        for (const [key, value] of Object.entries(args.headers)) {
            const result = yield EndpointSupplier_js_1.EndpointSupplier.get(value, { endpointMetadata: (_a = args.endpointMetadata) !== null && _a !== void 0 ? _a : {} });
            if (typeof result === "string") {
                newHeaders.set(key, result);
                continue;
            }
            if (result == null) {
                continue;
            }
            newHeaders.set(key, `${result}`);
        }
        return newHeaders;
    });
}
function fetcherImpl(args) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const url = (0, createRequestUrl_js_1.createRequestUrl)(args.url, args.queryParameters);
        const requestBody = yield (0, getRequestBody_js_1.getRequestBody)({
            body: args.body,
            type: (_a = args.requestType) !== null && _a !== void 0 ? _a : "other",
        });
        const fetchFn = (_b = args.fetchFn) !== null && _b !== void 0 ? _b : (yield (0, getFetchFn_js_1.getFetchFn)());
        const headers = yield getHeaders(args);
        const logger = (0, logger_js_1.createLogger)(args.logging);
        if (logger.isDebug()) {
            const metadata = {
                method: args.method,
                url: redactUrl(url),
                headers: redactHeaders(headers),
                queryParameters: redactQueryParameters(args.queryParameters),
                hasBody: requestBody != null,
            };
            logger.debug("Making HTTP request", metadata);
        }
        try {
            const response = yield (0, requestWithRetries_js_1.requestWithRetries)(() => __awaiter(this, void 0, void 0, function* () {
                return (0, makeRequest_js_1.makeRequest)(fetchFn, url, args.method, headers, requestBody, args.timeoutMs, args.abortSignal, args.withCredentials, args.duplex, args.responseType === "streaming" || args.responseType === "sse");
            }), args.maxRetries);
            if (response.status >= 200 && response.status < 400) {
                if (logger.isDebug()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url),
                        statusCode: response.status,
                        responseHeaders: redactHeaders(response.headers),
                    };
                    logger.debug("HTTP request succeeded", metadata);
                }
                const body = yield (0, getResponseBody_js_1.getResponseBody)(response, args.responseType);
                return {
                    ok: true,
                    body: body,
                    headers: response.headers,
                    rawResponse: (0, RawResponse_js_1.toRawResponse)(response),
                };
            }
            else {
                if (logger.isError()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url),
                        statusCode: response.status,
                        responseHeaders: redactHeaders(Object.fromEntries(response.headers.entries())),
                    };
                    logger.error("HTTP request failed with error status", metadata);
                }
                return {
                    ok: false,
                    error: {
                        reason: "status-code",
                        statusCode: response.status,
                        body: yield (0, getErrorResponseBody_js_1.getErrorResponseBody)(response),
                    },
                    rawResponse: (0, RawResponse_js_1.toRawResponse)(response),
                };
            }
        }
        catch (error) {
            if ((_c = args.abortSignal) === null || _c === void 0 ? void 0 : _c.aborted) {
                if (logger.isError()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url),
                    };
                    logger.error("HTTP request was aborted", metadata);
                }
                return {
                    ok: false,
                    error: {
                        reason: "unknown",
                        errorMessage: "The user aborted a request",
                    },
                    rawResponse: RawResponse_js_1.abortRawResponse,
                };
            }
            else if (error instanceof Error && error.name === "AbortError") {
                if (logger.isError()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url),
                        timeoutMs: args.timeoutMs,
                    };
                    logger.error("HTTP request timed out", metadata);
                }
                return {
                    ok: false,
                    error: {
                        reason: "timeout",
                    },
                    rawResponse: RawResponse_js_1.abortRawResponse,
                };
            }
            else if (error instanceof Error) {
                if (logger.isError()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url),
                        errorMessage: error.message,
                    };
                    logger.error("HTTP request failed with error", metadata);
                }
                return {
                    ok: false,
                    error: {
                        reason: "unknown",
                        errorMessage: error.message,
                    },
                    rawResponse: RawResponse_js_1.unknownRawResponse,
                };
            }
            if (logger.isError()) {
                const metadata = {
                    method: args.method,
                    url: redactUrl(url),
                    error: (0, json_js_1.toJson)(error),
                };
                logger.error("HTTP request failed with unknown error", metadata);
            }
            return {
                ok: false,
                error: {
                    reason: "unknown",
                    errorMessage: (0, json_js_1.toJson)(error),
                },
                rawResponse: RawResponse_js_1.unknownRawResponse,
            };
        }
    });
}
exports.fetcher = fetcherImpl;

},{"../json.js":235,"../logging/logger.js":238,"./EndpointSupplier.js":210,"./Headers.js":212,"./RawResponse.js":214,"./createRequestUrl.js":216,"./getErrorResponseBody.js":217,"./getFetchFn.js":218,"./getRequestBody.js":220,"./getResponseBody.js":221,"./makeRequest.js":223,"./requestWithRetries.js":224}],212:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headers = void 0;
let Headers;
if (typeof globalThis.Headers !== "undefined") {
    exports.Headers = Headers = globalThis.Headers;
}
else {
    exports.Headers = Headers = class Headers {
        constructor(init) {
            this.headers = new Map();
            if (init) {
                if (init instanceof Headers) {
                    init.forEach((value, key) => this.append(key, value));
                }
                else if (Array.isArray(init)) {
                    for (const [key, value] of init) {
                        if (typeof key === "string" && typeof value === "string") {
                            this.append(key, value);
                        }
                        else {
                            throw new TypeError("Each header entry must be a [string, string] tuple");
                        }
                    }
                }
                else {
                    for (const [key, value] of Object.entries(init)) {
                        if (typeof value === "string") {
                            this.append(key, value);
                        }
                        else {
                            throw new TypeError("Header values must be strings");
                        }
                    }
                }
            }
        }
        append(name, value) {
            const key = name.toLowerCase();
            const existing = this.headers.get(key) || [];
            this.headers.set(key, [...existing, value]);
        }
        delete(name) {
            const key = name.toLowerCase();
            this.headers.delete(key);
        }
        get(name) {
            const key = name.toLowerCase();
            const values = this.headers.get(key);
            return values ? values.join(", ") : null;
        }
        has(name) {
            const key = name.toLowerCase();
            return this.headers.has(key);
        }
        set(name, value) {
            const key = name.toLowerCase();
            this.headers.set(key, [value]);
        }
        forEach(callbackfn, thisArg) {
            const boundCallback = thisArg ? callbackfn.bind(thisArg) : callbackfn;
            this.headers.forEach((values, key) => boundCallback(values.join(", "), key, this));
        }
        getSetCookie() {
            return this.headers.get("set-cookie") || [];
        }
        *entries() {
            for (const [key, values] of this.headers.entries()) {
                yield [key, values.join(", ")];
            }
        }
        *keys() {
            yield* this.headers.keys();
        }
        *values() {
            for (const values of this.headers.values()) {
                yield values.join(", ");
            }
        }
        [Symbol.iterator]() {
            return this.entries();
        }
    };
}

},{}],213:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponsePromise = void 0;
/**
 * A promise that returns the parsed response and lets you retrieve the raw response too.
 */
class HttpResponsePromise extends Promise {
    constructor(promise) {
        // Initialize with a no-op to avoid premature parsing
        super((resolve) => {
            resolve(undefined);
        });
        this.innerPromise = promise;
    }
    /**
     * Creates an `HttpResponsePromise` from a function that returns a promise.
     *
     * @param fn - A function that returns a promise resolving to a `WithRawResponse` object.
     * @param args - Arguments to pass to the function.
     * @returns An `HttpResponsePromise` instance.
     */
    static fromFunction(fn, ...args) {
        return new HttpResponsePromise(fn(...args));
    }
    /**
     * Creates a function that returns an `HttpResponsePromise` from a function that returns a promise.
     *
     * @param fn - A function that returns a promise resolving to a `WithRawResponse` object.
     * @returns A function that returns an `HttpResponsePromise` instance.
     */
    static interceptFunction(fn) {
        return (...args) => {
            return HttpResponsePromise.fromPromise(fn(...args));
        };
    }
    /**
     * Creates an `HttpResponsePromise` from an existing promise.
     *
     * @param promise - A promise resolving to a `WithRawResponse` object.
     * @returns An `HttpResponsePromise` instance.
     */
    static fromPromise(promise) {
        return new HttpResponsePromise(promise);
    }
    /**
     * Creates an `HttpResponsePromise` from an executor function.
     *
     * @param executor - A function that takes resolve and reject callbacks to create a promise.
     * @returns An `HttpResponsePromise` instance.
     */
    static fromExecutor(executor) {
        const promise = new Promise(executor);
        return new HttpResponsePromise(promise);
    }
    /**
     * Creates an `HttpResponsePromise` from a resolved result.
     *
     * @param result - A `WithRawResponse` object to resolve immediately.
     * @returns An `HttpResponsePromise` instance.
     */
    static fromResult(result) {
        const promise = Promise.resolve(result);
        return new HttpResponsePromise(promise);
    }
    unwrap() {
        if (!this.unwrappedPromise) {
            this.unwrappedPromise = this.innerPromise.then(({ data }) => data);
        }
        return this.unwrappedPromise;
    }
    /** @inheritdoc */
    then(onfulfilled, onrejected) {
        return this.unwrap().then(onfulfilled, onrejected);
    }
    /** @inheritdoc */
    catch(onrejected) {
        return this.unwrap().catch(onrejected);
    }
    /** @inheritdoc */
    finally(onfinally) {
        return this.unwrap().finally(onfinally);
    }
    /**
     * Retrieves the data and raw response.
     *
     * @returns A promise resolving to a `WithRawResponse` object.
     */
    withRawResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.innerPromise;
        });
    }
}
exports.HttpResponsePromise = HttpResponsePromise;

},{}],214:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownRawResponse = exports.abortRawResponse = void 0;
exports.toRawResponse = toRawResponse;
const Headers_js_1 = require("./Headers.js");
/**
 * A raw response indicating that the request was aborted.
 */
exports.abortRawResponse = {
    headers: new Headers_js_1.Headers(),
    redirected: false,
    status: 499,
    statusText: "Client Closed Request",
    type: "error",
    url: "",
};
/**
 * A raw response indicating an unknown error.
 */
exports.unknownRawResponse = {
    headers: new Headers_js_1.Headers(),
    redirected: false,
    status: 0,
    statusText: "Unknown Error",
    type: "error",
    url: "",
};
/**
 * Converts a `RawResponse` object into a `RawResponse` by extracting its properties,
 * excluding the `body` and `bodyUsed` fields.
 *
 * @param response - The `RawResponse` object to convert.
 * @returns A `RawResponse` object containing the extracted properties of the input response.
 */
function toRawResponse(response) {
    return {
        headers: response.headers,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
    };
}

},{"./Headers.js":212}],215:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
exports.Supplier = {
    get: (supplier) => __awaiter(void 0, void 0, void 0, function* () {
        if (typeof supplier === "function") {
            return supplier();
        }
        else {
            return supplier;
        }
    }),
};

},{}],216:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestUrl = createRequestUrl;
const qs_js_1 = require("../url/qs.js");
function createRequestUrl(baseUrl, queryParameters) {
    const queryString = (0, qs_js_1.toQueryString)(queryParameters, { arrayFormat: "repeat" });
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

},{"../url/qs.js":244}],217:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorResponseBody = getErrorResponseBody;
const json_js_1 = require("../json.js");
const getResponseBody_js_1 = require("./getResponseBody.js");
function getErrorResponseBody(response) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        let contentType = (_a = response.headers.get("Content-Type")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (contentType == null || contentType.length === 0) {
            return (0, getResponseBody_js_1.getResponseBody)(response);
        }
        if (contentType.indexOf(";") !== -1) {
            contentType = (_c = (_b = contentType.split(";")[0]) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : "";
        }
        switch (contentType) {
            case "application/hal+json":
            case "application/json":
            case "application/ld+json":
            case "application/problem+json":
            case "application/vnd.api+json":
            case "text/json": {
                const text = yield response.text();
                return text.length > 0 ? (0, json_js_1.fromJson)(text) : undefined;
            }
            default:
                if (contentType.startsWith("application/vnd.") && contentType.endsWith("+json")) {
                    const text = yield response.text();
                    return text.length > 0 ? (0, json_js_1.fromJson)(text) : undefined;
                }
                // Fallback to plain text if content type is not recognized
                // Even if no body is present, the response will be an empty string
                return yield response.text();
        }
    });
}

},{"../json.js":235,"./getResponseBody.js":221}],218:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFetchFn = getFetchFn;
function getFetchFn() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch;
    });
}

},{}],219:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeader = getHeader;
function getHeader(headers, header) {
    for (const [headerKey, headerValue] of Object.entries(headers)) {
        if (headerKey.toLowerCase() === header.toLowerCase()) {
            return headerValue;
        }
    }
    return undefined;
}

},{}],220:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestBody = getRequestBody;
const json_js_1 = require("../json.js");
const qs_js_1 = require("../url/qs.js");
function getRequestBody(_a) {
    return __awaiter(this, arguments, void 0, function* ({ body, type }) {
        if (type === "form") {
            return (0, qs_js_1.toQueryString)(body, { arrayFormat: "repeat", encode: true });
        }
        if (type.includes("json")) {
            return (0, json_js_1.toJson)(body);
        }
        else {
            return body;
        }
    });
}

},{"../json.js":235,"../url/qs.js":244}],221:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponseBody = getResponseBody;
const json_js_1 = require("../json.js");
const BinaryResponse_js_1 = require("./BinaryResponse.js");
function getResponseBody(response, responseType) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (responseType) {
            case "binary-response":
                return (0, BinaryResponse_js_1.getBinaryResponse)(response);
            case "blob":
                return yield response.blob();
            case "arrayBuffer":
                return yield response.arrayBuffer();
            case "sse":
                if (response.body == null) {
                    return {
                        ok: false,
                        error: {
                            reason: "body-is-null",
                            statusCode: response.status,
                        },
                    };
                }
                return response.body;
            case "streaming":
                if (response.body == null) {
                    return {
                        ok: false,
                        error: {
                            reason: "body-is-null",
                            statusCode: response.status,
                        },
                    };
                }
                return response.body;
            case "text":
                return yield response.text();
        }
        // if responseType is "json" or not specified, try to parse as JSON
        const text = yield response.text();
        if (text.length > 0) {
            try {
                const responseBody = (0, json_js_1.fromJson)(text);
                return responseBody;
            }
            catch (_err) {
                return {
                    ok: false,
                    error: {
                        reason: "non-json",
                        statusCode: response.status,
                        rawBody: text,
                    },
                };
            }
        }
        return undefined;
    });
}

},{"../json.js":235,"./BinaryResponse.js":209}],222:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = exports.unknownRawResponse = exports.toRawResponse = exports.abortRawResponse = exports.HttpResponsePromise = exports.getHeader = exports.fetcher = exports.EndpointSupplier = void 0;
var EndpointSupplier_js_1 = require("./EndpointSupplier.js");
Object.defineProperty(exports, "EndpointSupplier", { enumerable: true, get: function () { return EndpointSupplier_js_1.EndpointSupplier; } });
var Fetcher_js_1 = require("./Fetcher.js");
Object.defineProperty(exports, "fetcher", { enumerable: true, get: function () { return Fetcher_js_1.fetcher; } });
var getHeader_js_1 = require("./getHeader.js");
Object.defineProperty(exports, "getHeader", { enumerable: true, get: function () { return getHeader_js_1.getHeader; } });
var HttpResponsePromise_js_1 = require("./HttpResponsePromise.js");
Object.defineProperty(exports, "HttpResponsePromise", { enumerable: true, get: function () { return HttpResponsePromise_js_1.HttpResponsePromise; } });
var RawResponse_js_1 = require("./RawResponse.js");
Object.defineProperty(exports, "abortRawResponse", { enumerable: true, get: function () { return RawResponse_js_1.abortRawResponse; } });
Object.defineProperty(exports, "toRawResponse", { enumerable: true, get: function () { return RawResponse_js_1.toRawResponse; } });
Object.defineProperty(exports, "unknownRawResponse", { enumerable: true, get: function () { return RawResponse_js_1.unknownRawResponse; } });
var Supplier_js_1 = require("./Supplier.js");
Object.defineProperty(exports, "Supplier", { enumerable: true, get: function () { return Supplier_js_1.Supplier; } });

},{"./EndpointSupplier.js":210,"./Fetcher.js":211,"./HttpResponsePromise.js":213,"./RawResponse.js":214,"./Supplier.js":215,"./getHeader.js":219}],223:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
exports.isCacheNoStoreSupported = isCacheNoStoreSupported;
exports.resetCacheNoStoreSupported = resetCacheNoStoreSupported;
const signals_js_1 = require("./signals.js");
/**
 * Cached result of checking whether the current runtime supports
 * the `cache` option in `Request`. Some runtimes (e.g. Cloudflare Workers)
 * throw a TypeError when this option is used.
 */
let _cacheNoStoreSupported;
function isCacheNoStoreSupported() {
    if (_cacheNoStoreSupported != null) {
        return _cacheNoStoreSupported;
    }
    try {
        new Request("http://localhost", { cache: "no-store" });
        _cacheNoStoreSupported = true;
    }
    catch (_a) {
        _cacheNoStoreSupported = false;
    }
    return _cacheNoStoreSupported;
}
/**
 * Reset the cached result of `isCacheNoStoreSupported`. Exposed for testing only.
 */
function resetCacheNoStoreSupported() {
    _cacheNoStoreSupported = undefined;
}
const makeRequest = (fetchFn, url, method, headers, requestBody, timeoutMs, abortSignal, withCredentials, duplex, disableCache) => __awaiter(void 0, void 0, void 0, function* () {
    const signals = [];
    let timeoutAbortId;
    if (timeoutMs != null) {
        const { signal, abortId } = (0, signals_js_1.getTimeoutSignal)(timeoutMs);
        timeoutAbortId = abortId;
        signals.push(signal);
    }
    if (abortSignal != null) {
        signals.push(abortSignal);
    }
    const newSignals = (0, signals_js_1.anySignal)(signals);
    const response = yield fetchFn(url, Object.assign({ method: method, headers, body: requestBody, signal: newSignals, credentials: withCredentials ? "include" : undefined, 
        // @ts-ignore
        duplex }, (disableCache && isCacheNoStoreSupported() ? { cache: "no-store" } : {})));
    if (timeoutAbortId != null) {
        clearTimeout(timeoutAbortId);
    }
    return response;
});
exports.makeRequest = makeRequest;

},{"./signals.js":225}],224:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestWithRetries = requestWithRetries;
const INITIAL_RETRY_DELAY = 1000; // in milliseconds
const MAX_RETRY_DELAY = 60000; // in milliseconds
const DEFAULT_MAX_RETRIES = 2;
const JITTER_FACTOR = 0.2; // 20% random jitter
function addPositiveJitter(delay) {
    const jitterMultiplier = 1 + Math.random() * JITTER_FACTOR;
    return delay * jitterMultiplier;
}
function addSymmetricJitter(delay) {
    const jitterMultiplier = 1 + (Math.random() - 0.5) * JITTER_FACTOR;
    return delay * jitterMultiplier;
}
function getRetryDelayFromHeaders(response, retryAttempt) {
    const retryAfter = response.headers.get("Retry-After");
    if (retryAfter) {
        const retryAfterSeconds = parseInt(retryAfter, 10);
        if (!Number.isNaN(retryAfterSeconds) && retryAfterSeconds > 0) {
            return Math.min(retryAfterSeconds * 1000, MAX_RETRY_DELAY);
        }
        const retryAfterDate = new Date(retryAfter);
        if (!Number.isNaN(retryAfterDate.getTime())) {
            const delay = retryAfterDate.getTime() - Date.now();
            if (delay > 0) {
                return Math.min(Math.max(delay, 0), MAX_RETRY_DELAY);
            }
        }
    }
    const rateLimitReset = response.headers.get("X-RateLimit-Reset");
    if (rateLimitReset) {
        const resetTime = parseInt(rateLimitReset, 10);
        if (!Number.isNaN(resetTime)) {
            const delay = resetTime * 1000 - Date.now();
            if (delay > 0) {
                return addPositiveJitter(Math.min(delay, MAX_RETRY_DELAY));
            }
        }
    }
    return addSymmetricJitter(Math.min(INITIAL_RETRY_DELAY * Math.pow(2, retryAttempt), MAX_RETRY_DELAY));
}
function requestWithRetries(requestFn_1) {
    return __awaiter(this, arguments, void 0, function* (requestFn, maxRetries = DEFAULT_MAX_RETRIES) {
        let response = yield requestFn();
        for (let i = 0; i < maxRetries; ++i) {
            if ([408, 429].includes(response.status) || response.status >= 500) {
                const delay = getRetryDelayFromHeaders(response, i);
                yield new Promise((resolve) => setTimeout(resolve, delay));
                response = yield requestFn();
            }
            else {
                break;
            }
        }
        return response;
    });
}

},{}],225:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeoutSignal = getTimeoutSignal;
exports.anySignal = anySignal;
const TIMEOUT = "timeout";
function getTimeoutSignal(timeoutMs) {
    const controller = new AbortController();
    const abortId = setTimeout(() => controller.abort(TIMEOUT), timeoutMs);
    return { signal: controller.signal, abortId };
}
function anySignal(...args) {
    const signals = (args.length === 1 && Array.isArray(args[0]) ? args[0] : args);
    const controller = new AbortController();
    for (const signal of signals) {
        if (signal.aborted) {
            controller.abort(signal === null || signal === void 0 ? void 0 : signal.reason);
            break;
        }
        signal.addEventListener("abort", () => controller.abort(signal === null || signal === void 0 ? void 0 : signal.reason), {
            signal: controller.signal,
        });
    }
    return controller.signal;
}

},{}],226:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],227:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBinaryUploadRequest = toBinaryUploadRequest;
exports.toMultipartDataPart = toMultipartDataPart;
function toBinaryUploadRequest(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, filename, contentLength, contentType } = yield getFileWithMetadata(file);
        const request = {
            body: data,
            headers: {},
        };
        if (filename) {
            request.headers["Content-Disposition"] = `attachment; filename="${filename}"`;
        }
        if (contentType) {
            request.headers["Content-Type"] = contentType;
        }
        if (contentLength != null) {
            request.headers["Content-Length"] = contentLength.toString();
        }
        return request;
    });
}
function toMultipartDataPart(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, filename, contentType } = yield getFileWithMetadata(file, {
            noSniffFileSize: true,
        });
        return {
            data,
            filename,
            contentType,
        };
    });
}
function getFileWithMetadata(file_1) {
    return __awaiter(this, arguments, void 0, function* (file, { noSniffFileSize } = {}) {
        var _a, _b, _c, _d, _e;
        if (isFileLike(file)) {
            return getFileWithMetadata({
                data: file,
            }, { noSniffFileSize });
        }
        if ("path" in file) {
            const fs = yield Promise.resolve().then(() => __importStar(require("fs")));
            if (!fs || !fs.createReadStream) {
                throw new Error("File path uploads are not supported in this environment.");
            }
            const data = fs.createReadStream(file.path);
            const contentLength = (_a = file.contentLength) !== null && _a !== void 0 ? _a : (noSniffFileSize === true ? undefined : yield tryGetFileSizeFromPath(file.path));
            const filename = (_b = file.filename) !== null && _b !== void 0 ? _b : getNameFromPath(file.path);
            return {
                data,
                filename,
                contentType: file.contentType,
                contentLength,
            };
        }
        if ("data" in file) {
            const data = file.data;
            const contentLength = (_c = file.contentLength) !== null && _c !== void 0 ? _c : (yield tryGetContentLengthFromFileLike(data, {
                noSniffFileSize,
            }));
            const filename = (_d = file.filename) !== null && _d !== void 0 ? _d : tryGetNameFromFileLike(data);
            return {
                data,
                filename,
                contentType: (_e = file.contentType) !== null && _e !== void 0 ? _e : tryGetContentTypeFromFileLike(data),
                contentLength,
            };
        }
        throw new Error(`Invalid FileUpload of type ${typeof file}: ${JSON.stringify(file)}`);
    });
}
function isFileLike(value) {
    return (isBuffer(value) ||
        isArrayBufferView(value) ||
        isArrayBuffer(value) ||
        isUint8Array(value) ||
        isBlob(value) ||
        isFile(value) ||
        isStreamLike(value) ||
        isReadableStream(value));
}
function tryGetFileSizeFromPath(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fs = yield Promise.resolve().then(() => __importStar(require("fs")));
            if (!fs || !fs.promises || !fs.promises.stat) {
                return undefined;
            }
            const fileStat = yield fs.promises.stat(path);
            return fileStat.size;
        }
        catch (_fallbackError) {
            return undefined;
        }
    });
}
function tryGetNameFromFileLike(data) {
    if (isNamedValue(data)) {
        return data.name;
    }
    if (isPathedValue(data)) {
        return getNameFromPath(data.path.toString());
    }
    return undefined;
}
function tryGetContentLengthFromFileLike(data_1) {
    return __awaiter(this, arguments, void 0, function* (data, { noSniffFileSize } = {}) {
        if (isBuffer(data)) {
            return data.length;
        }
        if (isArrayBufferView(data)) {
            return data.byteLength;
        }
        if (isArrayBuffer(data)) {
            return data.byteLength;
        }
        if (isBlob(data)) {
            return data.size;
        }
        if (isFile(data)) {
            return data.size;
        }
        if (noSniffFileSize === true) {
            return undefined;
        }
        if (isPathedValue(data)) {
            return yield tryGetFileSizeFromPath(data.path.toString());
        }
        return undefined;
    });
}
function tryGetContentTypeFromFileLike(data) {
    if (isBlob(data)) {
        return data.type;
    }
    if (isFile(data)) {
        return data.type;
    }
    return undefined;
}
function getNameFromPath(path) {
    const lastForwardSlash = path.lastIndexOf("/");
    const lastBackSlash = path.lastIndexOf("\\");
    const lastSlashIndex = Math.max(lastForwardSlash, lastBackSlash);
    return lastSlashIndex >= 0 ? path.substring(lastSlashIndex + 1) : path;
}
function isNamedValue(value) {
    return typeof value === "object" && value != null && "name" in value;
}
function isPathedValue(value) {
    return typeof value === "object" && value != null && "path" in value;
}
function isStreamLike(value) {
    return typeof value === "object" && value != null && ("read" in value || "pipe" in value);
}
function isReadableStream(value) {
    return typeof value === "object" && value != null && "getReader" in value;
}
function isBuffer(value) {
    return typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(value);
}
function isArrayBufferView(value) {
    return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
}
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isUint8Array(value) {
    return typeof Uint8Array !== "undefined" && value instanceof Uint8Array;
}
function isBlob(value) {
    return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFile(value) {
    return typeof File !== "undefined" && value instanceof File;
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":3,"fs":2}],228:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./file.js"), exports);
__exportStar(require("./types.js"), exports);

},{"./file.js":227,"./types.js":229}],229:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],230:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataWrapper = void 0;
exports.newFormData = newFormData;
const index_js_1 = require("../../core/file/index.js");
const json_js_1 = require("../../core/json.js");
const index_js_2 = require("../runtime/index.js");
function newFormData() {
    return __awaiter(this, void 0, void 0, function* () {
        return new FormDataWrapper();
    });
}
class FormDataWrapper {
    constructor() {
        this.fd = new FormData();
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            // noop
        });
    }
    append(key, value) {
        this.fd.append(key, String(value));
    }
    appendFile(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, filename, contentType } = yield (0, index_js_1.toMultipartDataPart)(value);
            const blob = yield convertToBlob(data, contentType);
            if (filename) {
                this.fd.append(key, blob, filename);
            }
            else {
                this.fd.append(key, blob);
            }
        });
    }
    getRequest() {
        return {
            body: this.fd,
            headers: {},
            duplex: "half",
        };
    }
}
exports.FormDataWrapper = FormDataWrapper;
function isStreamLike(value) {
    return typeof value === "object" && value != null && ("read" in value || "pipe" in value);
}
function isReadableStream(value) {
    return typeof value === "object" && value != null && "getReader" in value;
}
function isBuffer(value) {
    return typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(value);
}
function isArrayBufferView(value) {
    return ArrayBuffer.isView(value);
}
function streamToBuffer(stream) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, stream_1, stream_1_1;
        var _b, e_1, _c, _d;
        if (index_js_2.RUNTIME.type === "node") {
            const { Readable } = yield Promise.resolve().then(() => __importStar(require("stream")));
            if (stream instanceof Readable) {
                const chunks = [];
                try {
                    for (_a = true, stream_1 = __asyncValues(stream); stream_1_1 = yield stream_1.next(), _b = stream_1_1.done, !_b; _a = true) {
                        _d = stream_1_1.value;
                        _a = false;
                        const chunk = _d;
                        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_a && !_b && (_c = stream_1.return)) yield _c.call(stream_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return Buffer.concat(chunks);
            }
        }
        if (isReadableStream(stream)) {
            const reader = stream.getReader();
            const chunks = [];
            try {
                while (true) {
                    const { done, value } = yield reader.read();
                    if (done)
                        break;
                    chunks.push(value);
                }
            }
            finally {
                reader.releaseLock();
            }
            const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
            const result = new Uint8Array(totalLength);
            let offset = 0;
            for (const chunk of chunks) {
                result.set(chunk, offset);
                offset += chunk.length;
            }
            return Buffer.from(result);
        }
        throw new Error(`Unsupported stream type: ${typeof stream}. Expected Node.js Readable stream or Web ReadableStream.`);
    });
}
function convertToBlob(value, contentType) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isStreamLike(value) || isReadableStream(value)) {
            const buffer = yield streamToBuffer(value);
            return new Blob([buffer], { type: contentType });
        }
        if (value instanceof Blob) {
            return value;
        }
        if (isBuffer(value)) {
            return new Blob([value], { type: contentType });
        }
        if (value instanceof ArrayBuffer) {
            return new Blob([value], { type: contentType });
        }
        if (isArrayBufferView(value)) {
            return new Blob([value], { type: contentType });
        }
        if (typeof value === "string") {
            return new Blob([value], { type: contentType });
        }
        if (typeof value === "object" && value !== null) {
            return new Blob([(0, json_js_1.toJson)(value)], { type: contentType !== null && contentType !== void 0 ? contentType : "application/json" });
        }
        return new Blob([String(value)], { type: contentType });
    });
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"../../core/file/index.js":228,"../../core/json.js":235,"../runtime/index.js":239,"buffer":3,"stream":2}],231:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeAsFormParameter = encodeAsFormParameter;
const qs_js_1 = require("../url/qs.js");
function encodeAsFormParameter(value) {
    const stringified = (0, qs_js_1.toQueryString)(value, { encode: false });
    const keyValuePairs = stringified.split("&").map((pair) => {
        const [key, value] = pair.split("=");
        return [key, value];
    });
    return Object.fromEntries(keyValuePairs);
}

},{"../url/qs.js":244}],232:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeAsFormParameter = void 0;
var encodeAsFormParameter_js_1 = require("./encodeAsFormParameter.js");
Object.defineProperty(exports, "encodeAsFormParameter", { enumerable: true, get: function () { return encodeAsFormParameter_js_1.encodeAsFormParameter; } });
__exportStar(require("./FormDataWrapper.js"), exports);

},{"./FormDataWrapper.js":230,"./encodeAsFormParameter.js":231}],233:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeHeaders = mergeHeaders;
exports.mergeOnlyDefinedHeaders = mergeOnlyDefinedHeaders;
function mergeHeaders(...headersArray) {
    const result = {};
    for (const [key, value] of headersArray
        .filter((headers) => headers != null)
        .flatMap((headers) => Object.entries(headers))) {
        const insensitiveKey = key.toLowerCase();
        if (value != null) {
            result[insensitiveKey] = value;
        }
        else if (insensitiveKey in result) {
            delete result[insensitiveKey];
        }
    }
    return result;
}
function mergeOnlyDefinedHeaders(...headersArray) {
    const result = {};
    for (const [key, value] of headersArray
        .filter((headers) => headers != null)
        .flatMap((headers) => Object.entries(headers))) {
        const insensitiveKey = key.toLowerCase();
        if (value != null) {
            result[insensitiveKey] = value;
        }
    }
    return result;
}

},{}],234:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = exports.logging = exports.file = void 0;
__exportStar(require("./auth/index.js"), exports);
__exportStar(require("./base64.js"), exports);
__exportStar(require("./fetcher/index.js"), exports);
exports.file = __importStar(require("./file/index.js"));
__exportStar(require("./form-data-utils/index.js"), exports);
exports.logging = __importStar(require("./logging/index.js"));
__exportStar(require("./runtime/index.js"), exports);
exports.url = __importStar(require("./url/index.js"));
__exportStar(require("./websocket/index.js"), exports);

},{"./auth/index.js":206,"./base64.js":207,"./fetcher/index.js":222,"./file/index.js":228,"./form-data-utils/index.js":232,"./logging/index.js":237,"./runtime/index.js":239,"./url/index.js":242,"./websocket/index.js":247}],235:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJson = void 0;
exports.fromJson = fromJson;
/**
 * Serialize a value to JSON
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @returns JSON string
 */
const toJson = (value, replacer, space) => {
    return JSON.stringify(value, replacer, space);
};
exports.toJson = toJson;
/**
 * Parse JSON string to object, array, or other type
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @returns Parsed object, array, or other type
 */
function fromJson(text, reviver) {
    return JSON.parse(text, reviver);
}

},{}],236:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.logging = void 0;
const logger = __importStar(require("./logger.js"));
var logging;
(function (logging) {
    logging.LogLevel = logger.LogLevel;
    /**
     * Console logger implementation that outputs to the console.
     */
    logging.ConsoleLogger = logger.ConsoleLogger;
})(logging || (exports.logging = logging = {}));

},{"./logger.js":238}],237:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./logger.js"), exports);

},{"./logger.js":238}],238:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.ConsoleLogger = exports.LogLevel = void 0;
exports.createLogger = createLogger;
exports.LogLevel = {
    Debug: "debug",
    Info: "info",
    Warn: "warn",
    Error: "error",
};
const logLevelMap = {
    [exports.LogLevel.Debug]: 1,
    [exports.LogLevel.Info]: 2,
    [exports.LogLevel.Warn]: 3,
    [exports.LogLevel.Error]: 4,
};
/**
 * Default console-based logger implementation.
 */
class ConsoleLogger {
    debug(message, ...args) {
        console.debug(message, ...args);
    }
    info(message, ...args) {
        console.info(message, ...args);
    }
    warn(message, ...args) {
        console.warn(message, ...args);
    }
    error(message, ...args) {
        console.error(message, ...args);
    }
}
exports.ConsoleLogger = ConsoleLogger;
/**
 * Logger class that provides level-based logging functionality.
 */
class Logger {
    /**
     * Creates a new logger instance.
     * @param config - Logger configuration
     */
    constructor(config) {
        this.level = logLevelMap[config.level];
        this.logger = config.logger;
        this.silent = config.silent;
    }
    /**
     * Checks if a log level should be output based on configuration.
     * @param level - The log level to check
     * @returns True if the level should be logged
     */
    shouldLog(level) {
        return !this.silent && this.level <= logLevelMap[level];
    }
    /**
     * Checks if debug logging is enabled.
     * @returns True if debug logs should be output
     */
    isDebug() {
        return this.shouldLog(exports.LogLevel.Debug);
    }
    /**
     * Logs a debug message if debug logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    debug(message, ...args) {
        if (this.isDebug()) {
            this.logger.debug(message, ...args);
        }
    }
    /**
     * Checks if info logging is enabled.
     * @returns True if info logs should be output
     */
    isInfo() {
        return this.shouldLog(exports.LogLevel.Info);
    }
    /**
     * Logs an info message if info logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    info(message, ...args) {
        if (this.isInfo()) {
            this.logger.info(message, ...args);
        }
    }
    /**
     * Checks if warning logging is enabled.
     * @returns True if warning logs should be output
     */
    isWarn() {
        return this.shouldLog(exports.LogLevel.Warn);
    }
    /**
     * Logs a warning message if warning logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    warn(message, ...args) {
        if (this.isWarn()) {
            this.logger.warn(message, ...args);
        }
    }
    /**
     * Checks if error logging is enabled.
     * @returns True if error logs should be output
     */
    isError() {
        return this.shouldLog(exports.LogLevel.Error);
    }
    /**
     * Logs an error message if error logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    error(message, ...args) {
        if (this.isError()) {
            this.logger.error(message, ...args);
        }
    }
}
exports.Logger = Logger;
function createLogger(config) {
    var _a, _b, _c;
    if (config == null) {
        return defaultLogger;
    }
    if (config instanceof Logger) {
        return config;
    }
    config = config !== null && config !== void 0 ? config : {};
    (_a = config.level) !== null && _a !== void 0 ? _a : (config.level = exports.LogLevel.Info);
    (_b = config.logger) !== null && _b !== void 0 ? _b : (config.logger = new ConsoleLogger());
    (_c = config.silent) !== null && _c !== void 0 ? _c : (config.silent = true);
    return new Logger(config);
}
const defaultLogger = new Logger({
    level: exports.LogLevel.Info,
    logger: new ConsoleLogger(),
    silent: true,
});

},{}],239:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUNTIME = void 0;
var runtime_js_1 = require("./runtime.js");
Object.defineProperty(exports, "RUNTIME", { enumerable: true, get: function () { return runtime_js_1.RUNTIME; } });

},{"./runtime.js":240}],240:[function(require,module,exports){
(function (process){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUNTIME = void 0;
/**
 * A constant that indicates which environment and version the SDK is running in.
 */
exports.RUNTIME = evaluateRuntime();
function evaluateRuntime() {
    var _a, _b, _c, _d, _e;
    /**
     * A constant that indicates whether the environment the code is running is a Web Browser.
     */
    const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
    if (isBrowser) {
        return {
            type: "browser",
            version: window.navigator.userAgent,
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is Cloudflare.
     * https://developers.cloudflare.com/workers/runtime-apis/web-standards/#navigatoruseragent
     */
    const isCloudflare = typeof globalThis !== "undefined" && ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === "Cloudflare-Workers";
    if (isCloudflare) {
        return {
            type: "workerd",
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is Edge Runtime.
     * https://vercel.com/docs/functions/runtimes/edge-runtime#check-if-you're-running-on-the-edge-runtime
     */
    const isEdgeRuntime = typeof EdgeRuntime === "string";
    if (isEdgeRuntime) {
        return {
            type: "edge-runtime",
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is a Web Worker.
     */
    const isWebWorker = typeof self === "object" &&
        typeof (self === null || self === void 0 ? void 0 : self.importScripts) === "function" &&
        (((_b = self.constructor) === null || _b === void 0 ? void 0 : _b.name) === "DedicatedWorkerGlobalScope" ||
            ((_c = self.constructor) === null || _c === void 0 ? void 0 : _c.name) === "ServiceWorkerGlobalScope" ||
            ((_d = self.constructor) === null || _d === void 0 ? void 0 : _d.name) === "SharedWorkerGlobalScope");
    if (isWebWorker) {
        return {
            type: "web-worker",
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is Deno.
     * FYI Deno spoofs process.versions.node, see https://deno.land/std@0.177.0/node/process.ts?s=versions
     */
    const isDeno = typeof Deno !== "undefined" && typeof Deno.version !== "undefined" && typeof Deno.version.deno !== "undefined";
    if (isDeno) {
        return {
            type: "deno",
            version: Deno.version.deno,
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is Bun.sh.
     */
    const isBun = typeof Bun !== "undefined" && typeof Bun.version !== "undefined";
    if (isBun) {
        return {
            type: "bun",
            version: Bun.version,
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is in React-Native.
     * This check should come before Node.js detection since React Native may have a process polyfill.
     * https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Core/setUpNavigator.js
     */
    const isReactNative = typeof navigator !== "undefined" && (navigator === null || navigator === void 0 ? void 0 : navigator.product) === "ReactNative";
    if (isReactNative) {
        return {
            type: "react-native",
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is Node.JS.
     */
    const isNode = typeof process !== "undefined" &&
        "version" in process &&
        !!process.version &&
        "versions" in process &&
        !!((_e = process.versions) === null || _e === void 0 ? void 0 : _e.node);
    if (isNode) {
        return {
            type: "node",
            version: process.versions.node,
            parsedVersion: Number(process.versions.node.split(".")[0]),
        };
    }
    return {
        type: "unknown",
    };
}

}).call(this)}).call(this,require('_process'))
},{"_process":5}],241:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePathParam = encodePathParam;
function encodePathParam(param) {
    if (param === null) {
        return "null";
    }
    const typeofParam = typeof param;
    switch (typeofParam) {
        case "undefined":
            return "undefined";
        case "string":
        case "number":
        case "boolean":
            break;
        default:
            param = String(param);
            break;
    }
    return encodeURIComponent(param);
}

},{}],242:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQueryString = exports.join = exports.encodePathParam = void 0;
var encodePathParam_js_1 = require("./encodePathParam.js");
Object.defineProperty(exports, "encodePathParam", { enumerable: true, get: function () { return encodePathParam_js_1.encodePathParam; } });
var join_js_1 = require("./join.js");
Object.defineProperty(exports, "join", { enumerable: true, get: function () { return join_js_1.join; } });
var qs_js_1 = require("./qs.js");
Object.defineProperty(exports, "toQueryString", { enumerable: true, get: function () { return qs_js_1.toQueryString; } });

},{"./encodePathParam.js":241,"./join.js":243,"./qs.js":244}],243:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = join;
function join(base, ...segments) {
    if (!base) {
        return "";
    }
    if (segments.length === 0) {
        return base;
    }
    if (base.includes("://")) {
        let url;
        try {
            url = new URL(base);
        }
        catch (_a) {
            return joinPath(base, ...segments);
        }
        const lastSegment = segments[segments.length - 1];
        const shouldPreserveTrailingSlash = lastSegment === null || lastSegment === void 0 ? void 0 : lastSegment.endsWith("/");
        for (const segment of segments) {
            const cleanSegment = trimSlashes(segment);
            if (cleanSegment) {
                url.pathname = joinPathSegments(url.pathname, cleanSegment);
            }
        }
        if (shouldPreserveTrailingSlash && !url.pathname.endsWith("/")) {
            url.pathname += "/";
        }
        return url.toString();
    }
    return joinPath(base, ...segments);
}
function joinPath(base, ...segments) {
    if (segments.length === 0) {
        return base;
    }
    let result = base;
    const lastSegment = segments[segments.length - 1];
    const shouldPreserveTrailingSlash = lastSegment === null || lastSegment === void 0 ? void 0 : lastSegment.endsWith("/");
    for (const segment of segments) {
        const cleanSegment = trimSlashes(segment);
        if (cleanSegment) {
            result = joinPathSegments(result, cleanSegment);
        }
    }
    if (shouldPreserveTrailingSlash && !result.endsWith("/")) {
        result += "/";
    }
    return result;
}
function joinPathSegments(left, right) {
    if (left.endsWith("/")) {
        return left + right;
    }
    return `${left}/${right}`;
}
function trimSlashes(str) {
    if (!str)
        return str;
    let start = 0;
    let end = str.length;
    if (str.startsWith("/"))
        start = 1;
    if (str.endsWith("/"))
        end = str.length - 1;
    return start === 0 && end === str.length ? str : str.slice(start, end);
}

},{}],244:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQueryString = toQueryString;
const defaultQsOptions = {
    arrayFormat: "indices",
    encode: true,
};
function encodeValue(value, shouldEncode) {
    if (value === undefined) {
        return "";
    }
    if (value === null) {
        return "";
    }
    const stringValue = String(value);
    return shouldEncode ? encodeURIComponent(stringValue) : stringValue;
}
function stringifyObject(obj, prefix = "", options) {
    const parts = [];
    for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}[${key}]` : key;
        if (value === undefined) {
            continue;
        }
        if (Array.isArray(value)) {
            if (value.length === 0) {
                continue;
            }
            for (let i = 0; i < value.length; i++) {
                const item = value[i];
                if (item === undefined) {
                    continue;
                }
                if (typeof item === "object" && !Array.isArray(item) && item !== null) {
                    const arrayKey = options.arrayFormat === "indices" ? `${fullKey}[${i}]` : fullKey;
                    parts.push(...stringifyObject(item, arrayKey, options));
                }
                else {
                    const arrayKey = options.arrayFormat === "indices" ? `${fullKey}[${i}]` : fullKey;
                    const encodedKey = options.encode ? encodeURIComponent(arrayKey) : arrayKey;
                    parts.push(`${encodedKey}=${encodeValue(item, options.encode)}`);
                }
            }
        }
        else if (typeof value === "object" && value !== null) {
            if (Object.keys(value).length === 0) {
                continue;
            }
            parts.push(...stringifyObject(value, fullKey, options));
        }
        else {
            const encodedKey = options.encode ? encodeURIComponent(fullKey) : fullKey;
            parts.push(`${encodedKey}=${encodeValue(value, options.encode)}`);
        }
    }
    return parts;
}
function toQueryString(obj, options) {
    if (obj == null || typeof obj !== "object") {
        return "";
    }
    const parts = stringifyObject(obj, "", Object.assign(Object.assign({}, defaultQsOptions), options));
    return parts.join("&");
}

},{}],245:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseEvent = exports.ErrorEvent = exports.Event = void 0;
class Event {
    constructor(type, target) {
        this.target = target;
        this.type = type;
    }
}
exports.Event = Event;
class ErrorEvent extends Event {
    constructor(error, target) {
        super("error", target);
        this.message = error.message;
        this.error = error;
    }
}
exports.ErrorEvent = ErrorEvent;
class CloseEvent extends Event {
    constructor(code = 1000, reason = "", target) {
        super("close", target);
        this.wasClean = true;
        this.code = code;
        this.reason = reason;
    }
}
exports.CloseEvent = CloseEvent;

},{}],246:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],247:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./ws.js"), exports);

},{"./ws.js":248}],248:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconnectingWebSocket = void 0;
const ws_1 = require("ws");
const index_js_1 = require("../runtime/index.js");
const qs_js_1 = require("../url/qs.js");
const Events = __importStar(require("./events.js"));
const getGlobalWebSocket = () => {
    if (typeof WebSocket !== "undefined") {
        // @ts-ignore
        return WebSocket;
    }
    else if (index_js_1.RUNTIME.type === "node") {
        return ws_1.WebSocket;
    }
    return undefined;
};
/**
 * Returns true if given argument looks like a WebSocket class
 */
const isWebSocket = (w) => typeof w !== "undefined" && !!w && w.CLOSING === 2;
const DEFAULT_OPTIONS = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false,
};
class ReconnectingWebSocket {
    constructor({ url, protocols, options, headers, queryParameters }) {
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: [],
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = "blob";
        this._closeCalled = false;
        this._messageQueue = [];
        this.CONNECTING = ReconnectingWebSocket.CONNECTING;
        this.OPEN = ReconnectingWebSocket.OPEN;
        this.CLOSING = ReconnectingWebSocket.CLOSING;
        this.CLOSED = ReconnectingWebSocket.CLOSED;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */
        this.onclose = null;
        /**
         * An event listener to be called when an error occurs
         */
        this.onerror = null;
        /**
         * An event listener to be called when a message is received from the server
         */
        this.onmessage = null;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */
        this.onopen = null;
        this._handleOpen = (event) => {
            this._debug("open event");
            const { minUptime = DEFAULT_OPTIONS.minUptime } = this._options;
            clearTimeout(this._connectTimeout);
            this._uptimeTimeout = setTimeout(() => this._acceptOpen(), minUptime);
            this._ws.binaryType = this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            this._messageQueue.forEach((message) => { var _a; return (_a = this._ws) === null || _a === void 0 ? void 0 : _a.send(message); });
            this._messageQueue = [];
            if (this.onopen) {
                this.onopen(event);
            }
            this._listeners.open.forEach((listener) => this._callEventListener(event, listener));
        };
        this._handleMessage = (event) => {
            this._debug("message event");
            if (this.onmessage) {
                this.onmessage(event);
            }
            this._listeners.message.forEach((listener) => this._callEventListener(event, listener));
        };
        this._handleError = (event) => {
            this._debug("error event", event.message);
            this._disconnect(undefined, event.message === "TIMEOUT" ? "timeout" : undefined);
            if (this.onerror) {
                this.onerror(event);
            }
            this._debug("exec error listeners");
            this._listeners.error.forEach((listener) => this._callEventListener(event, listener));
            this._connect();
        };
        this._handleClose = (event) => {
            this._debug("close event");
            this._clearTimeouts();
            if (event.code === 1000) {
                this._shouldReconnect = false;
            }
            if (this._shouldReconnect) {
                this._connect();
            }
            if (this.onclose) {
                this.onclose(event);
            }
            this._listeners.close.forEach((listener) => this._callEventListener(event, listener));
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options !== null && options !== void 0 ? options : DEFAULT_OPTIONS;
        this._headers = headers;
        this._queryParameters = queryParameters;
        if (this._options.startClosed) {
            this._shouldReconnect = false;
        }
        this._connect();
    }
    get binaryType() {
        return this._ws ? this._ws.binaryType : this._binaryType;
    }
    set binaryType(value) {
        this._binaryType = value;
        if (this._ws) {
            this._ws.binaryType = value;
        }
    }
    /**
     * Returns the number or connection retries
     */
    get retryCount() {
        return Math.max(this._retryCount, 0);
    }
    /**
     * The number of bytes of data that have been queued using calls to send() but not yet
     * transmitted to the network. This value resets to zero once all queued data has been sent.
     * This value does not reset to zero when the connection is closed; if you keep calling send(),
     * this will continue to climb. Read only
     */
    get bufferedAmount() {
        const bytes = this._messageQueue.reduce((acc, message) => {
            if (typeof message === "string") {
                acc += message.length; // not byte size
            }
            else if (message instanceof Blob) {
                acc += message.size;
            }
            else {
                acc += message.byteLength;
            }
            return acc;
        }, 0);
        return bytes + (this._ws ? this._ws.bufferedAmount : 0);
    }
    /**
     * The extensions selected by the server. This is currently only the empty string or a list of
     * extensions as negotiated by the connection
     */
    get extensions() {
        return this._ws ? this._ws.extensions : "";
    }
    /**
     * A string indicating the name of the sub-protocol the server selected;
     * this will be one of the strings specified in the protocols parameter when creating the
     * WebSocket object
     */
    get protocol() {
        return this._ws ? this._ws.protocol : "";
    }
    /**
     * The current state of the connection; this is one of the Ready state constants
     */
    get readyState() {
        if (this._ws) {
            return this._ws.readyState;
        }
        return this._options.startClosed ? ReconnectingWebSocket.CLOSED : ReconnectingWebSocket.CONNECTING;
    }
    /**
     * The URL as resolved by the constructor
     */
    get url() {
        return this._ws ? this._ws.url : "";
    }
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    close(code = 1000, reason) {
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug("close enqueued: no ws instance");
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug("close: already closed");
            return;
        }
        this._ws.close(code, reason);
    }
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    reconnect(code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        }
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    }
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    send(data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug("send", data);
            this._ws.send(data);
        }
        else {
            const { maxEnqueuedMessages = DEFAULT_OPTIONS.maxEnqueuedMessages } = this._options;
            if (this._messageQueue.length < maxEnqueuedMessages) {
                this._debug("enqueue", data);
                this._messageQueue.push(data);
            }
        }
    }
    /**
     * Register an event handler of a specific event type
     */
    addEventListener(type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    }
    dispatchEvent(event) {
        const listeners = this._listeners[event.type];
        if (listeners) {
            for (const listener of listeners) {
                this._callEventListener(event, listener);
            }
        }
        return true;
    }
    /**
     * Removes an event listener
     */
    removeEventListener(type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(
            // @ts-ignore
            (l) => l !== listener);
        }
    }
    _debug(...args) {
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            // biome-ignore lint/suspicious/noConsole: allow console
            console.log.apply(console, ["RWS>", ...args]);
        }
    }
    _getNextDelay() {
        const { reconnectionDelayGrowFactor = DEFAULT_OPTIONS.reconnectionDelayGrowFactor, minReconnectionDelay = DEFAULT_OPTIONS.minReconnectionDelay, maxReconnectionDelay = DEFAULT_OPTIONS.maxReconnectionDelay, } = this._options;
        let delay = 0;
        if (this._retryCount > 0) {
            delay = minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, (this._retryCount - 1));
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug("next delay", delay);
        return delay;
    }
    _wait() {
        return new Promise((resolve) => {
            setTimeout(resolve, this._getNextDelay());
        });
    }
    _getNextUrl(urlProvider) {
        if (typeof urlProvider === "string") {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === "function") {
            const url = urlProvider();
            if (typeof url === "string") {
                return Promise.resolve(url);
            }
            // @ts-ignore redundant check
            if (url.then) {
                return url;
            }
        }
        throw Error("Invalid URL");
    }
    _connect() {
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;
        const { maxRetries = DEFAULT_OPTIONS.maxRetries, connectionTimeout = DEFAULT_OPTIONS.connectionTimeout, WebSocket = getGlobalWebSocket(), } = this._options;
        if (this._retryCount >= maxRetries) {
            this._debug("max retries reached", this._retryCount, ">=", maxRetries);
            return;
        }
        this._retryCount++;
        this._debug("connect", this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) {
            throw Error("No valid WebSocket class provided");
        }
        this._wait()
            .then(() => this._getNextUrl(this._url))
            .then((url) => {
            if (this._closeCalled) {
                return;
            }
            const options = {};
            if (this._headers) {
                options.headers = this._headers;
            }
            if (this._queryParameters && Object.keys(this._queryParameters).length > 0) {
                const queryString = (0, qs_js_1.toQueryString)(this._queryParameters, { arrayFormat: "repeat" });
                if (queryString) {
                    url = `${url}?${queryString}`;
                }
            }
            this._ws = new WebSocket(url, this._protocols, options);
            this._ws.binaryType = this._binaryType;
            this._connectLock = false;
            this._addListeners();
            this._connectTimeout = setTimeout(() => this._handleTimeout(), connectionTimeout);
        });
    }
    _handleTimeout() {
        this._debug("timeout event");
        this._handleError(new Events.ErrorEvent(Error("TIMEOUT"), this));
    }
    _disconnect(code = 1000, reason) {
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new Events.CloseEvent(code, reason, this));
        }
        catch (_error) {
            // ignore
        }
    }
    _acceptOpen() {
        this._debug("accept open");
        this._retryCount = 0;
    }
    _callEventListener(event, listener) {
        if ("handleEvent" in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        }
        else {
            // @ts-ignore
            listener(event);
        }
    }
    _removeListeners() {
        if (!this._ws) {
            return;
        }
        this._debug("removeListeners");
        this._ws.removeEventListener("open", this._handleOpen);
        this._ws.removeEventListener("close", this._handleClose);
        this._ws.removeEventListener("message", this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener("error", this._handleError);
    }
    _addListeners() {
        if (!this._ws) {
            return;
        }
        this._debug("addListeners");
        this._ws.addEventListener("open", this._handleOpen);
        this._ws.addEventListener("close", this._handleClose);
        this._ws.addEventListener("message", this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener("error", this._handleError);
    }
    _clearTimeouts() {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    }
}
exports.ReconnectingWebSocket = ReconnectingWebSocket;
ReconnectingWebSocket.CONNECTING = 0;
ReconnectingWebSocket.OPEN = 1;
ReconnectingWebSocket.CLOSING = 2;
ReconnectingWebSocket.CLOSED = 3;

},{"../runtime/index.js":239,"../url/qs.js":244,"./events.js":245,"ws":256}],249:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SarvamAIEnvironment = void 0;
exports.SarvamAIEnvironment = {
    Production: {
        base: "https://api.sarvam.ai",
        production: "wss://api.sarvam.ai",
    },
};

},{}],250:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SarvamAIError = void 0;
const json_js_1 = require("../core/json.js");
class SarvamAIError extends Error {
    constructor({ message, statusCode, body, rawResponse, }) {
        super(buildMessage({ message, statusCode, body }));
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.body = body;
        this.rawResponse = rawResponse;
    }
}
exports.SarvamAIError = SarvamAIError;
function buildMessage({ message, statusCode, body, }) {
    const lines = [];
    if (message != null) {
        lines.push(message);
    }
    if (statusCode != null) {
        lines.push(`Status code: ${statusCode.toString()}`);
    }
    if (body != null) {
        lines.push(`Body: ${(0, json_js_1.toJson)(body, undefined, 2)}`);
    }
    return lines.join("\n");
}

},{"../core/json.js":235}],251:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SarvamAITimeoutError = void 0;
class SarvamAITimeoutError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = this.constructor.name;
    }
}
exports.SarvamAITimeoutError = SarvamAITimeoutError;

},{}],252:[function(require,module,exports){
"use strict";
// This file was auto-generated by Fern from our API Definition.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNonStatusCodeError = handleNonStatusCodeError;
const errors = __importStar(require("./index.js"));
function handleNonStatusCodeError(error, rawResponse, method, path) {
    switch (error.reason) {
        case "non-json":
            throw new errors.SarvamAIError({
                statusCode: error.statusCode,
                body: error.rawBody,
                rawResponse: rawResponse,
            });
        case "body-is-null":
            throw new errors.SarvamAIError({
                statusCode: error.statusCode,
                rawResponse: rawResponse,
            });
        case "timeout":
            throw new errors.SarvamAITimeoutError(`Timeout exceeded when calling ${method} ${path}.`);
        case "unknown":
            throw new errors.SarvamAIError({
                message: error.errorMessage,
                rawResponse: rawResponse,
            });
        default:
            throw new errors.SarvamAIError({
                message: "Unknown error",
                rawResponse: rawResponse,
            });
    }
}

},{"./index.js":253}],253:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SarvamAITimeoutError = exports.SarvamAIError = void 0;
var SarvamAIError_js_1 = require("./SarvamAIError.js");
Object.defineProperty(exports, "SarvamAIError", { enumerable: true, get: function () { return SarvamAIError_js_1.SarvamAIError; } });
var SarvamAITimeoutError_js_1 = require("./SarvamAITimeoutError.js");
Object.defineProperty(exports, "SarvamAITimeoutError", { enumerable: true, get: function () { return SarvamAITimeoutError_js_1.SarvamAITimeoutError; } });

},{"./SarvamAIError.js":250,"./SarvamAITimeoutError.js":251}],254:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./core/exports.js"), exports);

},{"./core/exports.js":208}],255:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SarvamAITimeoutError = exports.SarvamAIError = exports.SarvamAIEnvironment = exports.SarvamAIClient = exports.SarvamAI = void 0;
exports.SarvamAI = __importStar(require("./api/index.js"));
var Client_js_1 = require("./Client.js");
Object.defineProperty(exports, "SarvamAIClient", { enumerable: true, get: function () { return Client_js_1.SarvamAIClient; } });
var environments_js_1 = require("./environments.js");
Object.defineProperty(exports, "SarvamAIEnvironment", { enumerable: true, get: function () { return environments_js_1.SarvamAIEnvironment; } });
var index_js_1 = require("./errors/index.js");
Object.defineProperty(exports, "SarvamAIError", { enumerable: true, get: function () { return index_js_1.SarvamAIError; } });
Object.defineProperty(exports, "SarvamAITimeoutError", { enumerable: true, get: function () { return index_js_1.SarvamAITimeoutError; } });
__exportStar(require("./exports.js"), exports);

},{"./Client.js":7,"./api/index.js":17,"./environments.js":249,"./errors/index.js":253,"./exports.js":254}],256:[function(require,module,exports){
'use strict';

module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};

},{}]},{},[255])(255)
});
