! function (t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = t, i.c = e, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 0)
}([function (t, e, i) {
    "use strict";

    function n() {}
    i.r(e), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }), void 0 === Math.sign && (Math.sign = function (t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
        get: function () {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }), void 0 === Object.assign && (Object.assign = function (t) {
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var n = arguments[i];
            if (null != n)
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }), Object.assign(n.prototype, {
        addEventListener: function (t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var i = this._listeners;
            void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
        },
        hasEventListener: function (t, e) {
            if (void 0 === this._listeners) return !1;
            var i = this._listeners;
            return void 0 !== i[t] && -1 !== i[t].indexOf(e)
        },
        removeEventListener: function (t, e) {
            if (void 0 !== this._listeners) {
                var i = this._listeners[t];
                if (void 0 !== i) {
                    var n = i.indexOf(e); - 1 !== n && i.splice(n, 1)
                }
            }
        },
        dispatchEvent: function (t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners[t.type];
                if (void 0 !== e) {
                    t.target = this;
                    for (var i = e.slice(0), n = 0, r = i.length; n < r; n++) i[n].call(this, t)
                }
            }
        }
    });
    var r, a, o, s, c, h, l, u, p, d, f, m, g = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function () {
            for (var t = [], e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16);
            return function () {
                var e = 4294967295 * Math.random() | 0,
                    i = 4294967295 * Math.random() | 0,
                    n = 4294967295 * Math.random() | 0,
                    r = 4294967295 * Math.random() | 0;
                return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & i] + t[i >> 8 & 255] + "-" + t[i >> 16 & 15 | 64] + t[i >> 24 & 255] + "-" + t[63 & n | 128] + t[n >> 8 & 255] + "-" + t[n >> 16 & 255] + t[n >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255]).toUpperCase()
            }
        }(),
        clamp: function (t, e, i) {
            return Math.max(e, Math.min(i, t))
        },
        euclideanModulo: function (t, e) {
            return (t % e + e) % e
        },
        mapLinear: function (t, e, i, n, r) {
            return n + (t - e) * (r - n) / (i - e)
        },
        lerp: function (t, e, i) {
            return (1 - i) * t + i * e
        },
        smoothstep: function (t, e, i) {
            return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
        },
        smootherstep: function (t, e, i) {
            return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
        },
        randInt: function (t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function (t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function (t) {
            return t * (.5 - Math.random())
        },
        degToRad: function (t) {
            return t * g.DEG2RAD
        },
        radToDeg: function (t) {
            return t * g.RAD2DEG
        },
        isPowerOfTwo: function (t) {
            return 0 == (t & t - 1) && 0 !== t
        },
        ceilPowerOfTwo: function (t) {
            return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
        },
        floorPowerOfTwo: function (t) {
            return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
        }
    };

    function v(t, e) {
        this.x = t || 0, this.y = e || 0
    }

    function y() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    function x(t, e, i, n) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
    }

    function b(t, e, i) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0
    }

    function w() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    Object.defineProperties(v.prototype, {
        width: {
            get: function () {
                return this.x
            },
            set: function (t) {
                this.x = t
            }
        },
        height: {
            get: function () {
                return this.y
            },
            set: function (t) {
                this.y = t
            }
        }
    }), Object.assign(v.prototype, {
        isVector2: !0,
        set: function (t, e) {
            return this.x = t, this.y = e, this
        },
        setScalar: function (t) {
            return this.x = t, this.y = t, this
        },
        setX: function (t) {
            return this.x = t, this
        },
        setY: function (t) {
            return this.y = t, this
        },
        setComponent: function (t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function (t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function () {
            return new this.constructor(this.x, this.y)
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this
        },
        add: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
        },
        addScalar: function (t) {
            return this.x += t, this.y += t, this
        },
        addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        },
        addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this
        },
        sub: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
        },
        subScalar: function (t) {
            return this.x -= t, this.y -= t, this
        },
        subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        },
        multiply: function (t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this
        },
        divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this
        },
        divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        },
        applyMatrix3: function (t) {
            var e = this.x,
                i = this.y,
                n = t.elements;
            return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
        },
        min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
        },
        max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
        },
        clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
        },
        clampScalar: (r = new v, a = new v, function (t, e) {
            return r.set(t, t), a.set(e, e), this.clamp(r, a)
        }),
        clampLength: function (t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function () {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y
        },
        cross: function (t) {
            return this.x * t.y - this.y * t.x
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function () {
            return this.divideScalar(this.length() || 1)
        },
        angle: function () {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI), t
        },
        distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function (t) {
            var e = this.x - t.x,
                i = this.y - t.y;
            return e * e + i * i
        },
        manhattanDistanceTo: function (t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function (t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        },
        lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        equals: function (t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
        },
        fromBufferAttribute: function (t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
        },
        rotateAround: function (t, e) {
            var i = Math.cos(e),
                n = Math.sin(e),
                r = this.x - t.x,
                a = this.y - t.y;
            return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this
        }
    }), Object.assign(y.prototype, {
        isMatrix4: !0,
        set: function (t, e, i, n, r, a, o, s, c, h, l, u, p, d, f, m) {
            var g = this.elements;
            return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = h, g[10] = l, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m, this
        },
        identity: function () {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        clone: function () {
            return (new y).fromArray(this.elements)
        },
        copy: function (t) {
            var e = this.elements,
                i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
        },
        copyPosition: function (t) {
            var e = this.elements,
                i = t.elements;
            return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
        },
        extractBasis: function (t, e, i) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
        },
        makeBasis: function (t, e, i) {
            return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: (d = new b, function (t) {
            var e = this.elements,
                i = t.elements,
                n = 1 / d.setFromMatrixColumn(t, 0).length(),
                r = 1 / d.setFromMatrixColumn(t, 1).length(),
                a = 1 / d.setFromMatrixColumn(t, 2).length();
            return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * a, e[9] = i[9] * a, e[10] = i[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }),
        makeRotationFromEuler: function (t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z,
                a = Math.cos(i),
                o = Math.sin(i),
                s = Math.cos(n),
                c = Math.sin(n),
                h = Math.cos(r),
                l = Math.sin(r);
            if ("XYZ" === t.order) {
                var u = a * h,
                    p = a * l,
                    d = o * h,
                    f = o * l;
                e[0] = s * h, e[4] = -s * l, e[8] = c, e[1] = p + d * c, e[5] = u - f * c, e[9] = -o * s, e[2] = f - u * c, e[6] = d + p * c, e[10] = a * s
            } else if ("YXZ" === t.order) {
                var m = s * h,
                    g = s * l,
                    v = c * h,
                    y = c * l;
                e[0] = m + y * o, e[4] = v * o - g, e[8] = a * c, e[1] = a * l, e[5] = a * h, e[9] = -o, e[2] = g * o - v, e[6] = y + m * o, e[10] = a * s
            } else if ("ZXY" === t.order) {
                m = s * h, g = s * l, v = c * h, y = c * l;
                e[0] = m - y * o, e[4] = -a * l, e[8] = v + g * o, e[1] = g + v * o, e[5] = a * h, e[9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s
            } else if ("ZYX" === t.order) {
                u = a * h, p = a * l, d = o * h, f = o * l;
                e[0] = s * h, e[4] = d * c - p, e[8] = u * c + f, e[1] = s * l, e[5] = f * c + u, e[9] = p * c - d, e[2] = -c, e[6] = o * s, e[10] = a * s
            } else if ("YZX" === t.order) {
                var x = a * s,
                    b = a * c,
                    w = o * s,
                    _ = o * c;
                e[0] = s * h, e[4] = _ - x * l, e[8] = w * l + b, e[1] = l, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = b * l + w, e[10] = x - _ * l
            } else if ("XZY" === t.order) {
                x = a * s, b = a * c, w = o * s, _ = o * c;
                e[0] = s * h, e[4] = -l, e[8] = c * h, e[1] = x * l + _, e[5] = a * h, e[9] = b * l - w, e[2] = w * l - b, e[6] = o * h, e[10] = _ * l + x
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        makeRotationFromQuaternion: (u = new b(0, 0, 0), p = new b(1, 1, 1), function (t) {
            return this.compose(u, t, p)
        }),
        lookAt: (c = new b, h = new b, l = new b, function (t, e, i) {
            var n = this.elements;
            return l.subVectors(t, e), 0 === l.lengthSq() && (l.z = 1), l.normalize(), c.crossVectors(i, l), 0 === c.lengthSq() && (1 === Math.abs(i.z) ? l.x += 1e-4 : l.z += 1e-4, l.normalize(), c.crossVectors(i, l)), c.normalize(), h.crossVectors(l, c), n[0] = c.x, n[4] = h.x, n[8] = l.x, n[1] = c.y, n[5] = h.y, n[9] = l.y, n[2] = c.z, n[6] = h.z, n[10] = l.z, this
        }),
        multiply: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        premultiply: function (t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function (t, e) {
            var i = t.elements,
                n = e.elements,
                r = this.elements,
                a = i[0],
                o = i[4],
                s = i[8],
                c = i[12],
                h = i[1],
                l = i[5],
                u = i[9],
                p = i[13],
                d = i[2],
                f = i[6],
                m = i[10],
                g = i[14],
                v = i[3],
                y = i[7],
                x = i[11],
                b = i[15],
                w = n[0],
                _ = n[4],
                M = n[8],
                S = n[12],
                E = n[1],
                T = n[5],
                L = n[9],
                A = n[13],
                P = n[2],
                R = n[6],
                C = n[10],
                O = n[14],
                I = n[3],
                D = n[7],
                z = n[11],
                N = n[15];
            return r[0] = a * w + o * E + s * P + c * I, r[4] = a * _ + o * T + s * R + c * D, r[8] = a * M + o * L + s * C + c * z, r[12] = a * S + o * A + s * O + c * N, r[1] = h * w + l * E + u * P + p * I, r[5] = h * _ + l * T + u * R + p * D, r[9] = h * M + l * L + u * C + p * z, r[13] = h * S + l * A + u * O + p * N, r[2] = d * w + f * E + m * P + g * I, r[6] = d * _ + f * T + m * R + g * D, r[10] = d * M + f * L + m * C + g * z, r[14] = d * S + f * A + m * O + g * N, r[3] = v * w + y * E + x * P + b * I, r[7] = v * _ + y * T + x * R + b * D, r[11] = v * M + y * L + x * C + b * z, r[15] = v * S + y * A + x * O + b * N, this
        },
        multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        },
        applyToBufferAttribute: function () {
            var t = new b;
            return function (e) {
                for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z);
                return e
            }
        }(),
        determinant: function () {
            var t = this.elements,
                e = t[0],
                i = t[4],
                n = t[8],
                r = t[12],
                a = t[1],
                o = t[5],
                s = t[9],
                c = t[13],
                h = t[2],
                l = t[6],
                u = t[10],
                p = t[14];
            return t[3] * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * p - i * s * p) + t[7] * (+e * s * p - e * c * u + r * a * u - n * a * p + n * c * h - r * s * h) + t[11] * (+e * c * l - e * o * p - r * a * l + i * a * p + r * o * h - i * c * h) + t[15] * (-n * o * h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h)
        },
        transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        },
        setPosition: function (t) {
            var e = this.elements;
            return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
        },
        getInverse: function (t, e) {
            var i = this.elements,
                n = t.elements,
                r = n[0],
                a = n[1],
                o = n[2],
                s = n[3],
                c = n[4],
                h = n[5],
                l = n[6],
                u = n[7],
                p = n[8],
                d = n[9],
                f = n[10],
                m = n[11],
                g = n[12],
                v = n[13],
                y = n[14],
                x = n[15],
                b = d * y * u - v * f * u + v * l * m - h * y * m - d * l * x + h * f * x,
                w = g * f * u - p * y * u - g * l * m + c * y * m + p * l * x - c * f * x,
                _ = p * v * u - g * d * u + g * h * m - c * v * m - p * h * x + c * d * x,
                M = g * d * l - p * v * l - g * h * f + c * v * f + p * h * y - c * d * y,
                S = r * b + a * w + o * _ + s * M;
            if (0 === S) {
                var E = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e) throw new Error(E);
                return console.warn(E), this.identity()
            }
            var T = 1 / S;
            return i[0] = b * T, i[1] = (v * f * s - d * y * s - v * o * m + a * y * m + d * o * x - a * f * x) * T, i[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * T, i[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * m - a * l * m) * T, i[4] = w * T, i[5] = (p * y * s - g * f * s + g * o * m - r * y * m - p * o * x + r * f * x) * T, i[6] = (g * l * s - c * y * s - g * o * u + r * y * u + c * o * x - r * l * x) * T, i[7] = (c * f * s - p * l * s + p * o * u - r * f * u - c * o * m + r * l * m) * T, i[8] = _ * T, i[9] = (g * d * s - p * v * s - g * a * m + r * v * m + p * a * x - r * d * x) * T, i[10] = (c * v * s - g * h * s + g * a * u - r * v * u - c * a * x + r * h * x) * T, i[11] = (p * h * s - c * d * s - p * a * u + r * d * u + c * a * m - r * h * m) * T, i[12] = M * T, i[13] = (p * v * o - g * d * o + g * a * f - r * v * f - p * a * y + r * d * y) * T, i[14] = (g * h * o - c * v * o - g * a * l + r * v * l + c * a * y - r * h * y) * T, i[15] = (c * d * o - p * h * o + p * a * l - r * d * l - c * a * f + r * h * f) * T, this
        },
        scale: function (t) {
            var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z;
            return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
        },
        getMaxScaleOnAxis: function () {
            var t = this.elements,
                e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, i, n))
        },
        makeTranslation: function (t, e, i) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
        },
        makeRotationX: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function (t, e) {
            var i = Math.cos(e),
                n = Math.sin(e),
                r = 1 - i,
                a = t.x,
                o = t.y,
                s = t.z,
                c = r * a,
                h = r * o;
            return this.set(c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h * s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1), this
        },
        makeScale: function (t, e, i) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
        },
        makeShear: function (t, e, i) {
            return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
        },
        compose: function (t, e, i) {
            var n = this.elements,
                r = e._x,
                a = e._y,
                o = e._z,
                s = e._w,
                c = r + r,
                h = a + a,
                l = o + o,
                u = r * c,
                p = r * h,
                d = r * l,
                f = a * h,
                m = a * l,
                g = o * l,
                v = s * c,
                y = s * h,
                x = s * l,
                b = i.x,
                w = i.y,
                _ = i.z;
            return n[0] = (1 - (f + g)) * b, n[1] = (p + x) * b, n[2] = (d - y) * b, n[3] = 0, n[4] = (p - x) * w, n[5] = (1 - (u + g)) * w, n[6] = (m + v) * w, n[7] = 0, n[8] = (d + y) * _, n[9] = (m - v) * _, n[10] = (1 - (u + f)) * _, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
        },
        decompose: (o = new b, s = new y, function (t, e, i) {
            var n = this.elements,
                r = o.set(n[0], n[1], n[2]).length(),
                a = o.set(n[4], n[5], n[6]).length(),
                c = o.set(n[8], n[9], n[10]).length();
            this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], s.copy(this);
            var h = 1 / r,
                l = 1 / a,
                u = 1 / c;
            return s.elements[0] *= h, s.elements[1] *= h, s.elements[2] *= h, s.elements[4] *= l, s.elements[5] *= l, s.elements[6] *= l, s.elements[8] *= u, s.elements[9] *= u, s.elements[10] *= u, e.setFromRotationMatrix(s), i.x = r, i.y = a, i.z = c, this
        }),
        makePerspective: function (t, e, i, n, r, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var o = this.elements,
                s = 2 * r / (e - t),
                c = 2 * r / (i - n),
                h = (e + t) / (e - t),
                l = (i + n) / (i - n),
                u = -(a + r) / (a - r),
                p = -2 * a * r / (a - r);
            return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
        },
        makeOrthographic: function (t, e, i, n, r, a) {
            var o = this.elements,
                s = 1 / (e - t),
                c = 1 / (i - n),
                h = 1 / (a - r),
                l = (e + t) * s,
                u = (i + n) * c,
                p = (a + r) * h;
            return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
        },
        equals: function (t) {
            for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
                if (e[n] !== i[n]) return !1;
            return !0
        },
        fromArray: function (t, e) {
            void 0 === e && (e = 0);
            for (var i = 0; i < 16; i++) this.elements[i] = t[i + e];
            return this
        },
        toArray: function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
        }
    }), Object.assign(x, {
        slerp: function (t, e, i, n) {
            return i.copy(t).slerp(e, n)
        },
        slerpFlat: function (t, e, i, n, r, a, o) {
            var s = i[n + 0],
                c = i[n + 1],
                h = i[n + 2],
                l = i[n + 3],
                u = r[a + 0],
                p = r[a + 1],
                d = r[a + 2],
                f = r[a + 3];
            if (l !== f || s !== u || c !== p || h !== d) {
                var m = 1 - o,
                    g = s * u + c * p + h * d + l * f,
                    v = g >= 0 ? 1 : -1,
                    y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y),
                        b = Math.atan2(x, g * v);
                    m = Math.sin(m * b) / x, o = Math.sin(o * b) / x
                }
                var w = o * v;
                if (s = s * m + u * w, c = c * m + p * w, h = h * m + d * w, l = l * m + f * w, m === 1 - o) {
                    var _ = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                    s *= _, c *= _, h *= _, l *= _
                }
            }
            t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = l
        }
    }), Object.defineProperties(x.prototype, {
        x: {
            get: function () {
                return this._x
            },
            set: function (t) {
                this._x = t, this.onChangeCallback()
            }
        },
        y: {
            get: function () {
                return this._y
            },
            set: function (t) {
                this._y = t, this.onChangeCallback()
            }
        },
        z: {
            get: function () {
                return this._z
            },
            set: function (t) {
                this._z = t, this.onChangeCallback()
            }
        },
        w: {
            get: function () {
                return this._w
            },
            set: function (t) {
                this._w = t, this.onChangeCallback()
            }
        }
    }), Object.assign(x.prototype, {
        isQuaternion: !0,
        set: function (t, e, i, n) {
            return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
        },
        clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function (t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
        },
        setFromEuler: function (t, e) {
            if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var i = t._x,
                n = t._y,
                r = t._z,
                a = t.order,
                o = Math.cos,
                s = Math.sin,
                c = o(i / 2),
                h = o(n / 2),
                l = o(r / 2),
                u = s(i / 2),
                p = s(n / 2),
                d = s(r / 2);
            return "XYZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "YXZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "ZXY" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "ZYX" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "YZX" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l - u * p * d) : "XZY" === a && (this._x = u * h * l - c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l + u * p * d), !1 !== e && this.onChangeCallback(), this
        },
        setFromAxisAngle: function (t, e) {
            var i = e / 2,
                n = Math.sin(i);
            return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function (t) {
            var e, i = t.elements,
                n = i[0],
                r = i[4],
                a = i[8],
                o = i[1],
                s = i[5],
                c = i[9],
                h = i[2],
                l = i[6],
                u = i[10],
                p = n + s + u;
            return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (l - c) * e, this._y = (a - h) * e, this._z = (o - r) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u), this._w = (l - c) / e, this._x = .25 * e, this._y = (r + o) / e, this._z = (a + h) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (a - h) / e, this._x = (r + o) / e, this._y = .25 * e, this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s), this._w = (o - r) / e, this._x = (a + h) / e, this._y = (c + l) / e, this._z = .25 * e), this.onChangeCallback(), this
        },
        setFromUnitVectors: function () {
            var t, e = new b;
            return function (i, n) {
                return void 0 === e && (e = new b), (t = i.dot(n) + 1) < 1e-6 ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
            }
        }(),
        angleTo: function (t) {
            return 2 * Math.acos(Math.abs(g.clamp(this.dot(t), -1, 1)))
        },
        rotateTowards: function (t, e) {
            var i = this.angleTo(t);
            if (0 === i) return this;
            var n = Math.min(1, e / i);
            return this.slerp(t, n), this
        },
        inverse: function () {
            return this.conjugate()
        },
        conjugate: function () {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function (t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function () {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function () {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function () {
            var t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
        },
        multiply: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        premultiply: function (t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function (t, e) {
            var i = t._x,
                n = t._y,
                r = t._z,
                a = t._w,
                o = e._x,
                s = e._y,
                c = e._z,
                h = e._w;
            return this._x = i * h + a * o + n * c - r * s, this._y = n * h + a * s + r * o - i * c, this._z = r * h + a * c + i * s - n * o, this._w = a * h - i * o - n * s - r * c, this.onChangeCallback(), this
        },
        slerp: function (t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var i = this._x,
                n = this._y,
                r = this._z,
                a = this._w,
                o = a * t._w + i * t._x + n * t._y + r * t._z;
            if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
            var s = 1 - o * o;
            if (s <= Number.EPSILON) {
                var c = 1 - e;
                return this._w = c * a + e * this._w, this._x = c * i + e * this._x, this._y = c * n + e * this._y, this._z = c * r + e * this._z, this.normalize()
            }
            var h = Math.sqrt(s),
                l = Math.atan2(h, o),
                u = Math.sin((1 - e) * l) / h,
                p = Math.sin(e * l) / h;
            return this._w = a * u + this._w * p, this._x = i * u + this._x * p, this._y = n * u + this._y * p, this._z = r * u + this._z * p, this.onChangeCallback(), this
        },
        equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        },
        onChange: function (t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function () {}
    }), Object.assign(b.prototype, {
        isVector3: !0,
        set: function (t, e, i) {
            return this.x = t, this.y = e, this.z = i, this
        },
        setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this
        },
        setX: function (t) {
            return this.x = t, this
        },
        setY: function (t) {
            return this.y = t, this
        },
        setZ: function (t) {
            return this.z = t, this
        },
        setComponent: function (t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function (t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function () {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        },
        add: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        },
        addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this
        },
        addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        },
        addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        },
        sub: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        },
        subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this
        },
        subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        },
        multiply: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        },
        multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this.z *= t, this
        },
        multiplyVectors: function (t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        },
        applyEuler: (f = new x, function (t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(f.setFromEuler(t))
        }),
        applyAxisAngle: function () {
            var t = new x;
            return function (e, i) {
                return this.applyQuaternion(t.setFromAxisAngle(e, i))
            }
        }(),
        applyMatrix3: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
        },
        applyMatrix4: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements,
                a = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
            return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * a, this
        },
        applyQuaternion: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.x,
                a = t.y,
                o = t.z,
                s = t.w,
                c = s * e + a * n - o * i,
                h = s * i + o * e - r * n,
                l = s * n + r * i - a * e,
                u = -r * e - a * i - o * n;
            return this.x = c * s + u * -r + h * -o - l * -a, this.y = h * s + u * -a + l * -r - c * -o, this.z = l * s + u * -o + c * -a - h * -r, this
        },
        project: function (t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        },
        unproject: function () {
            var t = new y;
            return function (e) {
                return this.applyMatrix4(t.getInverse(e.projectionMatrix)).applyMatrix4(e.matrixWorld)
            }
        }(),
        transformDirection: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
        },
        divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        },
        divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        },
        min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
        },
        max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
        },
        clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
        },
        clampScalar: function () {
            var t = new b,
                e = new b;
            return function (i, n) {
                return t.set(i, i, i), e.set(n, n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function (t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function () {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function (t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        },
        lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        cross: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
        },
        crossVectors: function (t, e) {
            var i = t.x,
                n = t.y,
                r = t.z,
                a = e.x,
                o = e.y,
                s = e.z;
            return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this
        },
        projectOnVector: function (t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        },
        projectOnPlane: function () {
            var t = new b;
            return function (e) {
                return t.copy(this).projectOnVector(e), this.sub(t)
            }
        }(),
        reflect: function () {
            var t = new b;
            return function (e) {
                return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(),
        angleTo: function (t) {
            var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
            return Math.acos(g.clamp(e, -1, 1))
        },
        distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function (t) {
            var e = this.x - t.x,
                i = this.y - t.y,
                n = this.z - t.z;
            return e * e + i * i + n * n
        },
        manhattanDistanceTo: function (t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function (t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        },
        setFromSphericalCoords: function (t, e, i) {
            var n = Math.sin(e) * t;
            return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this
        },
        setFromCylindrical: function (t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        },
        setFromCylindricalCoords: function (t, e, i) {
            return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
        },
        setFromMatrixPosition: function (t) {
            var e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this
        },
        setFromMatrixScale: function (t) {
            var e = this.setFromMatrixColumn(t, 0).length(),
                i = this.setFromMatrixColumn(t, 1).length(),
                n = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = i, this.z = n, this
        },
        setFromMatrixColumn: function (t, e) {
            return this.fromArray(t.elements, 4 * e)
        },
        equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        },
        fromBufferAttribute: function (t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
        }
    }), Object.assign(w.prototype, {
        isMatrix3: !0,
        set: function (t, e, i, n, r, a, o, s, c) {
            var h = this.elements;
            return h[0] = t, h[1] = n, h[2] = o, h[3] = e, h[4] = r, h[5] = s, h[6] = i, h[7] = a, h[8] = c, this
        },
        identity: function () {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function () {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function (t) {
            var e = this.elements,
                i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
        },
        setFromMatrix4: function (t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        },
        applyToBufferAttribute: function () {
            var t = new b;
            return function (e) {
                for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix3(this), e.setXYZ(i, t.x, t.y, t.z);
                return e
            }
        }(),
        multiply: function (t) {
            return this.multiplyMatrices(this, t)
        },
        premultiply: function (t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function (t, e) {
            var i = t.elements,
                n = e.elements,
                r = this.elements,
                a = i[0],
                o = i[3],
                s = i[6],
                c = i[1],
                h = i[4],
                l = i[7],
                u = i[2],
                p = i[5],
                d = i[8],
                f = n[0],
                m = n[3],
                g = n[6],
                v = n[1],
                y = n[4],
                x = n[7],
                b = n[2],
                w = n[5],
                _ = n[8];
            return r[0] = a * f + o * v + s * b, r[3] = a * m + o * y + s * w, r[6] = a * g + o * x + s * _, r[1] = c * f + h * v + l * b, r[4] = c * m + h * y + l * w, r[7] = c * g + h * x + l * _, r[2] = u * f + p * v + d * b, r[5] = u * m + p * y + d * w, r[8] = u * g + p * x + d * _, this
        },
        multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        },
        determinant: function () {
            var t = this.elements,
                e = t[0],
                i = t[1],
                n = t[2],
                r = t[3],
                a = t[4],
                o = t[5],
                s = t[6],
                c = t[7],
                h = t[8];
            return e * a * h - e * o * c - i * r * h + i * o * s + n * r * c - n * a * s
        },
        getInverse: function (t, e) {
            t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var i = t.elements,
                n = this.elements,
                r = i[0],
                a = i[1],
                o = i[2],
                s = i[3],
                c = i[4],
                h = i[5],
                l = i[6],
                u = i[7],
                p = i[8],
                d = p * c - h * u,
                f = h * l - p * s,
                m = u * s - c * l,
                g = r * d + a * f + o * m;
            if (0 === g) {
                var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e) throw new Error(v);
                return console.warn(v), this.identity()
            }
            var y = 1 / g;
            return n[0] = d * y, n[1] = (o * u - p * a) * y, n[2] = (h * a - o * c) * y, n[3] = f * y, n[4] = (p * r - o * l) * y, n[5] = (o * s - h * r) * y, n[6] = m * y, n[7] = (a * l - u * r) * y, n[8] = (c * r - a * s) * y, this
        },
        transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        },
        getNormalMatrix: function (t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function (t) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        },
        setUvTransform: function (t, e, i, n, r, a, o) {
            var s = Math.cos(r),
                c = Math.sin(r);
            this.set(i * s, i * c, -i * (s * a + c * o) + a + t, -n * c, n * s, -n * (-c * a + s * o) + o + e, 0, 0, 1)
        },
        scale: function (t, e) {
            var i = this.elements;
            return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
        },
        rotate: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t),
                n = this.elements,
                r = n[0],
                a = n[3],
                o = n[6],
                s = n[1],
                c = n[4],
                h = n[7];
            return n[0] = e * r + i * s, n[3] = e * a + i * c, n[6] = e * o + i * h, n[1] = -i * r + e * s, n[4] = -i * a + e * c, n[7] = -i * o + e * h, this
        },
        translate: function (t, e) {
            var i = this.elements;
            return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
        },
        equals: function (t) {
            for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
                if (e[n] !== i[n]) return !1;
            return !0
        },
        fromArray: function (t, e) {
            void 0 === e && (e = 0);
            for (var i = 0; i < 9; i++) this.elements[i] = t[i + e];
            return this
        },
        toArray: function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
        }
    });
    var _, M, S, E, T, L = {
            getDataURL: function (t) {
                var e;
                if ("undefined" == typeof HTMLCanvasElement) return t.src;
                if (t instanceof HTMLCanvasElement) e = t;
                else {
                    void 0 === m && (m = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), m.width = t.width, m.height = t.height;
                    var i = m.getContext("2d");
                    t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = m
                }
                return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
            }
        },
        A = 0;

    function P(t, e, i, n, r, a, o, s, c, h) {
        Object.defineProperty(this, "id", {
            value: A++
        }), this.uuid = g.generateUUID(), this.name = "", this.image = void 0 !== t ? t : P.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : P.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : 1001, this.wrapT = void 0 !== n ? n : 1001, this.magFilter = void 0 !== r ? r : 1006, this.minFilter = void 0 !== a ? a : 1008, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : 1023, this.type = void 0 !== s ? s : 1009, this.offset = new v(0, 0), this.repeat = new v(1, 1), this.center = new v(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new w, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : 3e3, this.version = 0, this.onUpdate = null
    }

    function R(t, e, i, n) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
    }

    function C(t, e, i) {
        this.width = t, this.height = e, this.scissor = new R(0, 0, t, e), this.scissorTest = !1, this.viewport = new R(0, 0, t, e), i = i || {}, this.texture = new P(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : 1006, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
    }

    function O(t, e, i) {
        C.call(this, t, e, i), this.samples = 4
    }

    function I(t, e, i) {
        C.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
    }

    function D(t, e, i, n, r, a, o, s, c, h, l, u) {
        P.call(this, null, a, o, s, c, h, n, r, l, u), this.image = {
            data: t,
            width: e,
            height: i
        }, this.magFilter = void 0 !== c ? c : 1003, this.minFilter = void 0 !== h ? h : 1003, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }

    function z(t, e) {
        this.min = void 0 !== t ? t : new b(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new b(-1 / 0, -1 / 0, -1 / 0)
    }

    function N(t, e) {
        this.center = void 0 !== t ? t : new b, this.radius = void 0 !== e ? e : 0
    }

    function B(t, e) {
        this.normal = void 0 !== t ? t : new b(1, 0, 0), this.constant = void 0 !== e ? e : 0
    }

    function U(t, e, i, n, r, a) {
        this.planes = [void 0 !== t ? t : new B, void 0 !== e ? e : new B, void 0 !== i ? i : new B, void 0 !== n ? n : new B, void 0 !== r ? r : new B, void 0 !== a ? a : new B]
    }
    P.DEFAULT_IMAGE = void 0, P.DEFAULT_MAPPING = 300, P.prototype = Object.assign(Object.create(n.prototype), {
        constructor: P,
        isTexture: !0,
        updateMatrix: function () {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
        },
        toJSON: function (t) {
            var e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            var i = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                var n = this.image;
                if (void 0 === n.uuid && (n.uuid = g.generateUUID()), !e && void 0 === t.images[n.uuid]) {
                    var r;
                    if (Array.isArray(n)) {
                        r = [];
                        for (var a = 0, o = n.length; a < o; a++) r.push(L.getDataURL(n[a]))
                    } else r = L.getDataURL(n);
                    t.images[n.uuid] = {
                        uuid: n.uuid,
                        url: r
                    }
                }
                i.image = n.uuid
            }
            return e || (t.textures[this.uuid] = i), i
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function (t) {
            if (300 !== this.mapping) return t;
            if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
            case 1e3:
                t.x = t.x - Math.floor(t.x);
                break;
            case 1001:
                t.x = t.x < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
            }
            if (t.y < 0 || t.y > 1) switch (this.wrapT) {
            case 1e3:
                t.y = t.y - Math.floor(t.y);
                break;
            case 1001:
                t.y = t.y < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
            }
            return this.flipY && (t.y = 1 - t.y), t
        }
    }), Object.defineProperty(P.prototype, "needsUpdate", {
        set: function (t) {
            !0 === t && this.version++
        }
    }), Object.assign(R.prototype, {
        isVector4: !0,
        set: function (t, e, i, n) {
            return this.x = t, this.y = e, this.z = i, this.w = n, this
        },
        setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this
        },
        setX: function (t) {
            return this.x = t, this
        },
        setY: function (t) {
            return this.y = t, this
        },
        setZ: function (t) {
            return this.z = t, this
        },
        setW: function (t) {
            return this.w = t, this
        },
        setComponent: function (t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function (t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function () {
            return new this.constructor(this.x, this.y, this.z, this.w)
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        },
        add: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        },
        addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        },
        addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        },
        addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        },
        sub: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        },
        subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        },
        subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        },
        multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
        },
        applyMatrix4: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = this.w,
                a = t.elements;
            return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r, this
        },
        divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function (t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        },
        setAxisAngleFromRotationMatrix: function (t) {
            var e, i, n, r, a = t.elements,
                o = a[0],
                s = a[4],
                c = a[8],
                h = a[1],
                l = a[5],
                u = a[9],
                p = a[2],
                d = a[6],
                f = a[10];
            if (Math.abs(s - h) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) {
                if (Math.abs(s + h) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(o + l + f - 3) < .1) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                var m = (o + 1) / 2,
                    g = (l + 1) / 2,
                    v = (f + 1) / 2,
                    y = (s + h) / 4,
                    x = (c + p) / 4,
                    b = (u + d) / 4;
                return m > g && m > v ? m < .01 ? (i = 0, n = .707106781, r = .707106781) : (n = y / (i = Math.sqrt(m)), r = x / i) : g > v ? g < .01 ? (i = .707106781, n = 0, r = .707106781) : (i = y / (n = Math.sqrt(g)), r = b / n) : v < .01 ? (i = .707106781, n = .707106781, r = 0) : (i = x / (r = Math.sqrt(v)), n = b / r), this.set(i, n, r, e), this
            }
            var w = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (h - s) * (h - s));
            return Math.abs(w) < .001 && (w = 1), this.x = (d - u) / w, this.y = (c - p) / w, this.z = (h - s) / w, this.w = Math.acos((o + l + f - 1) / 2), this
        },
        min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
        },
        max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
        },
        clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
        },
        clampScalar: function () {
            var t, e;
            return function (i, n) {
                return void 0 === t && (t = new R, e = new R), t.set(i, i, i, i), e.set(n, n, n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function (t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function () {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function (t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        },
        lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        },
        fromBufferAttribute: function (t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
        }
    }), C.prototype = Object.assign(Object.create(n.prototype), {
        constructor: C,
        isWebGLRenderTarget: !0,
        setSize: function (t, e) {
            this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), O.prototype = Object.assign(Object.create(C.prototype), {
        constructor: O,
        isWebGLMultisampleRenderTarget: !0,
        copy: function (t) {
            return C.prototype.copy.call(this, t), this.samples = t.samples, this
        }
    }), I.prototype = Object.create(C.prototype), I.prototype.constructor = I, I.prototype.isWebGLRenderTargetCube = !0, D.prototype = Object.create(P.prototype), D.prototype.constructor = D, D.prototype.isDataTexture = !0, Object.assign(z.prototype, {
        isBox3: !0,
        set: function (t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromArray: function (t) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                var h = t[s],
                    l = t[s + 1],
                    u = t[s + 2];
                h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
            }
            return this.min.set(e, i, n), this.max.set(r, a, o), this
        },
        setFromBufferAttribute: function (t) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
                var h = t.getX(s),
                    l = t.getY(s),
                    u = t.getZ(s);
                h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
            }
            return this.min.set(e, i, n), this.max.set(r, a, o), this
        },
        setFromPoints: function (t) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function () {
            var t = new b;
            return function (e, i) {
                var n = t.copy(i).multiplyScalar(.5);
                return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
            }
        }(),
        setFromObject: function (t) {
            return this.makeEmpty(), this.expandByObject(t)
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function () {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        },
        isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function (t) {
            return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new b), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function (t) {
            return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new b), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function (t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function (t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function (t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        expandByObject: function () {
            var t, e, i, n = new b;

            function r(r) {
                var a = r.geometry;
                if (void 0 !== a)
                    if (a.isGeometry) {
                        var o = a.vertices;
                        for (e = 0, i = o.length; e < i; e++) n.copy(o[e]), n.applyMatrix4(r.matrixWorld), t.expandByPoint(n)
                    } else if (a.isBufferGeometry) {
                    var s = a.attributes.position;
                    if (void 0 !== s)
                        for (e = 0, i = s.count; e < i; e++) n.fromBufferAttribute(s, e).applyMatrix4(r.matrixWorld), t.expandByPoint(n)
                }
            }
            return function (e) {
                return t = this, e.updateMatrixWorld(!0), e.traverse(r), this
            }
        }(),
        containsPoint: function (t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function (t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function (t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new b), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function (t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: (M = new b, function (t) {
            return this.clampPoint(t.center, M), M.distanceToSquared(t.center) <= t.radius * t.radius
        }),
        intersectsPlane: function (t) {
            var e, i;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
        },
        intersectsTriangle: function () {
            var t = new b,
                e = new b,
                i = new b,
                n = new b,
                r = new b,
                a = new b,
                o = new b,
                s = new b,
                c = new b,
                h = new b;

            function l(n) {
                var r, a;
                for (r = 0, a = n.length - 3; r <= a; r += 3) {
                    o.fromArray(n, r);
                    var s = c.x * Math.abs(o.x) + c.y * Math.abs(o.y) + c.z * Math.abs(o.z),
                        h = t.dot(o),
                        l = e.dot(o),
                        u = i.dot(o);
                    if (Math.max(-Math.max(h, l, u), Math.min(h, l, u)) > s) return !1
                }
                return !0
            }
            return function (o) {
                if (this.isEmpty()) return !1;
                this.getCenter(s), c.subVectors(this.max, s), t.subVectors(o.a, s), e.subVectors(o.b, s), i.subVectors(o.c, s), n.subVectors(e, t), r.subVectors(i, e), a.subVectors(t, i);
                var u = [0, -n.z, n.y, 0, -r.z, r.y, 0, -a.z, a.y, n.z, 0, -n.x, r.z, 0, -r.x, a.z, 0, -a.x, -n.y, n.x, 0, -r.y, r.x, 0, -a.y, a.x, 0];
                return !!l(u) && (!!l(u = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (h.crossVectors(n, r), l(u = [h.x, h.y, h.z])))
            }
        }(),
        clampPoint: function (t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new b), e.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function () {
            var t = new b;
            return function (e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        getBoundingSphere: function () {
            var t = new b;
            return function (e) {
                return void 0 === e && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), e = new N), this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e
            }
        }(),
        intersect: function (t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
        },
        union: function (t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        applyMatrix4: (_ = [new b, new b, new b, new b, new b, new b, new b, new b], function (t) {
            return this.isEmpty() || (_[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), _[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), _[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), _[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), _[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), _[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), _[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), _[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(_)), this
        }),
        translate: function (t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function (t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }), Object.assign(N.prototype, {
        set: function (t, e) {
            return this.center.copy(t), this.radius = e, this
        },
        setFromPoints: (S = new z, function (t, e) {
            var i = this.center;
            void 0 !== e ? i.copy(e) : S.setFromPoints(t).getCenter(i);
            for (var n = 0, r = 0, a = t.length; r < a; r++) n = Math.max(n, i.distanceToSquared(t[r]));
            return this.radius = Math.sqrt(n), this
        }),
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.center.copy(t.center), this.radius = t.radius, this
        },
        empty: function () {
            return this.radius <= 0
        },
        containsPoint: function (t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function (t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function (t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function (t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function (t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function (t, e) {
            var i = this.center.distanceToSquared(t);
            return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new b), e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
        },
        getBoundingBox: function (t) {
            return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new z), t.set(this.center, this.center), t.expandByScalar(this.radius), t
        },
        applyMatrix4: function (t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
        },
        translate: function (t) {
            return this.center.add(t), this
        },
        equals: function (t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    }), Object.assign(B.prototype, {
        set: function (t, e) {
            return this.normal.copy(t), this.constant = e, this
        },
        setComponents: function (t, e, i, n) {
            return this.normal.set(t, e, i), this.constant = n, this
        },
        setFromNormalAndCoplanarPoint: function (t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        },
        setFromCoplanarPoints: function () {
            var t = new b,
                e = new b;
            return function (i, n, r) {
                var a = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize();
                return this.setFromNormalAndCoplanarPoint(a, i), this
            }
        }(),
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
        },
        normalize: function () {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
        },
        negate: function () {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function (t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function (t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function (t, e) {
            return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new b), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        },
        intersectLine: function () {
            var t = new b;
            return function (e, i) {
                void 0 === i && (console.warn("THREE.Plane: .intersectLine() target is now required"), i = new b);
                var n = e.delta(t),
                    r = this.normal.dot(n);
                if (0 === r) return 0 === this.distanceToPoint(e.start) ? i.copy(e.start) : void 0;
                var a = -(e.start.dot(this.normal) + this.constant) / r;
                return a < 0 || a > 1 ? void 0 : i.copy(n).multiplyScalar(a).add(e.start)
            }
        }(),
        intersectsLine: function (t) {
            var e = this.distanceToPoint(t.start),
                i = this.distanceToPoint(t.end);
            return e < 0 && i > 0 || i < 0 && e > 0
        },
        intersectsBox: function (t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function (t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function (t) {
            return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new b), t.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function () {
            var t = new b,
                e = new w;
            return function (i, n) {
                var r = n || e.getNormalMatrix(i),
                    a = this.coplanarPoint(t).applyMatrix4(i),
                    o = this.normal.applyMatrix3(r).normalize();
                return this.constant = -a.dot(o), this
            }
        }(),
        translate: function (t) {
            return this.constant -= t.dot(this.normal), this
        },
        equals: function (t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    }), Object.assign(U.prototype, {
        set: function (t, e, i, n, r, a) {
            var o = this.planes;
            return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
            return this
        },
        setFromMatrix: function (t) {
            var e = this.planes,
                i = t.elements,
                n = i[0],
                r = i[1],
                a = i[2],
                o = i[3],
                s = i[4],
                c = i[5],
                h = i[6],
                l = i[7],
                u = i[8],
                p = i[9],
                d = i[10],
                f = i[11],
                m = i[12],
                g = i[13],
                v = i[14],
                y = i[15];
            return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(), e[1].setComponents(o + n, l + s, f + u, y + m).normalize(), e[2].setComponents(o + r, l + c, f + p, y + g).normalize(), e[3].setComponents(o - r, l - c, f - p, y - g).normalize(), e[4].setComponents(o - a, l - h, f - d, y - v).normalize(), e[5].setComponents(o + a, l + h, f + d, y + v).normalize(), this
        },
        intersectsObject: (T = new N, function (t) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), T.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(T)
        }),
        intersectsSprite: function () {
            var t = new N;
            return function (e) {
                return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(),
        intersectsSphere: function (t) {
            for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
                if (e[r].distanceToPoint(i) < n) return !1
            }
            return !0
        },
        intersectsBox: (E = new b, function (t) {
            for (var e = this.planes, i = 0; i < 6; i++) {
                var n = e[i];
                if (E.x = n.normal.x > 0 ? t.max.x : t.min.x, E.y = n.normal.y > 0 ? t.max.y : t.min.y, E.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(E) < 0) return !1
            }
            return !0
        }),
        containsPoint: function (t) {
            for (var e = this.planes, i = 0; i < 6; i++)
                if (e[i].distanceToPoint(t) < 0) return !1;
            return !0
        }
    });
    var G = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );",
        bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
        envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
        lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
        map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",
        map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
        normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif",
        normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
        uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",
        uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
    };

    function F(t) {
        var e = {};
        for (var i in t)
            for (var n in e[i] = {}, t[i]) {
                var r = t[i][n];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
            }
        return e
    }

    function H(t) {
        for (var e = {}, i = 0; i < t.length; i++) {
            var n = F(t[i]);
            for (var r in n) e[r] = n[r]
        }
        return e
    }
    var k, V, j, W = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };

    function q(t, e, i) {
        return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
    }
    Object.assign(q.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function (t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        },
        setScalar: function (t) {
            return this.r = t, this.g = t, this.b = t, this
        },
        setHex: function (t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
        },
        setRGB: function (t, e, i) {
            return this.r = t, this.g = e, this.b = i, this
        },
        setHSL: function () {
            function t(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            return function (e, i, n) {
                if (e = g.euclideanModulo(e, 1), i = g.clamp(i, 0, 1), n = g.clamp(n, 0, 1), 0 === i) this.r = this.g = this.b = n;
                else {
                    var r = n <= .5 ? n * (1 + i) : n + i - n * i,
                        a = 2 * n - r;
                    this.r = t(a, r, e + 1 / 3), this.g = t(a, r, e), this.b = t(a, r, e - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function (t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            var i;
            if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var n, r = i[1],
                    a = i[2];
                switch (r) {
                case "rgb":
                case "rgba":
                    if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
                    if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
                    break;
                case "hsl":
                case "hsla":
                    if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                        var o = parseFloat(n[1]) / 360,
                            s = parseInt(n[2], 10) / 100,
                            c = parseInt(n[3], 10) / 100;
                        return e(n[5]), this.setHSL(o, s, c)
                    }
                }
            } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                var h, l = (h = i[1]).length;
                if (3 === l) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this;
                if (6 === l) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this
            }
            t && t.length > 0 && (void 0 !== (h = W[t]) ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + t));
            return this
        },
        clone: function () {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function (t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        },
        copyGammaToLinear: function (t, e) {
            return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        },
        copyLinearToGamma: function (t, e) {
            void 0 === e && (e = 2);
            var i = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
        },
        convertGammaToLinear: function (t) {
            return this.copyGammaToLinear(this, t), this
        },
        convertLinearToGamma: function (t) {
            return this.copyLinearToGamma(this, t), this
        },
        copySRGBToLinear: function () {
            function t(t) {
                return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
            }
            return function (e) {
                return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
            }
        }(),
        copyLinearToSRGB: function () {
            function t(t) {
                return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
            }
            return function (e) {
                return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
            }
        }(),
        convertSRGBToLinear: function () {
            return this.copySRGBToLinear(this), this
        },
        convertLinearToSRGB: function () {
            return this.copyLinearToSRGB(this), this
        },
        getHex: function () {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function () {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function (t) {
            void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
                h: 0,
                s: 0,
                l: 0
            });
            var e, i, n = this.r,
                r = this.g,
                a = this.b,
                o = Math.max(n, r, a),
                s = Math.min(n, r, a),
                c = (s + o) / 2;
            if (s === o) e = 0, i = 0;
            else {
                var h = o - s;
                switch (i = c <= .5 ? h / (o + s) : h / (2 - o - s), o) {
                case n:
                    e = (r - a) / h + (r < a ? 6 : 0);
                    break;
                case r:
                    e = (a - n) / h + 2;
                    break;
                case a:
                    e = (n - r) / h + 4
                }
                e /= 6
            }
            return t.h = e, t.s = i, t.l = c, t
        },
        getStyle: function () {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: (j = {}, function (t, e, i) {
            return this.getHSL(j), j.h += t, j.s += e, j.l += i, this.setHSL(j.h, j.s, j.l), this
        }),
        add: function (t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        },
        addColors: function (t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        },
        addScalar: function (t) {
            return this.r += t, this.g += t, this.b += t, this
        },
        sub: function (t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
        },
        multiply: function (t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        },
        multiplyScalar: function (t) {
            return this.r *= t, this.g *= t, this.b *= t, this
        },
        lerp: function (t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        },
        lerpHSL: (k = {
            h: 0,
            s: 0,
            l: 0
        }, V = {
            h: 0,
            s: 0,
            l: 0
        }, function (t, e) {
            this.getHSL(k), t.getHSL(V);
            var i = g.lerp(k.h, V.h, e),
                n = g.lerp(k.s, V.s, e),
                r = g.lerp(k.l, V.l, e);
            return this.setHSL(i, n, r), this
        }),
        equals: function (t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        },
        toJSON: function () {
            return this.getHex()
        }
    });
    var X, Y = {
            common: {
                diffuse: {
                    value: new q(15658734)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new w
                },
                alphaMap: {
                    value: null
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                refractionRatio: {
                    value: .98
                },
                maxMipLevel: {
                    value: 0
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new v(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new q(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                }
            },
            points: {
                diffuse: {
                    value: new q(15658734)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new w
                }
            },
            sprite: {
                diffuse: {
                    value: new q(15658734)
                },
                opacity: {
                    value: 1
                },
                center: {
                    value: new v(.5, .5)
                },
                rotation: {
                    value: 0
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new w
                }
            }
        },
        J = {
            basic: {
                uniforms: H([Y.common, Y.specularmap, Y.envmap, Y.aomap, Y.lightmap, Y.fog]),
                vertexShader: G.meshbasic_vert,
                fragmentShader: G.meshbasic_frag
            },
            lambert: {
                uniforms: H([Y.common, Y.specularmap, Y.envmap, Y.aomap, Y.lightmap, Y.emissivemap, Y.fog, Y.lights, {
                    emissive: {
                        value: new q(0)
                    }
                }]),
                vertexShader: G.meshlambert_vert,
                fragmentShader: G.meshlambert_frag
            },
            phong: {
                uniforms: H([Y.common, Y.specularmap, Y.envmap, Y.aomap, Y.lightmap, Y.emissivemap, Y.bumpmap, Y.normalmap, Y.displacementmap, Y.gradientmap, Y.fog, Y.lights, {
                    emissive: {
                        value: new q(0)
                    },
                    specular: {
                        value: new q(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: G.meshphong_vert,
                fragmentShader: G.meshphong_frag
            },
            standard: {
                uniforms: H([Y.common, Y.envmap, Y.aomap, Y.lightmap, Y.emissivemap, Y.bumpmap, Y.normalmap, Y.displacementmap, Y.roughnessmap, Y.metalnessmap, Y.fog, Y.lights, {
                    emissive: {
                        value: new q(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: .5
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: G.meshphysical_vert,
                fragmentShader: G.meshphysical_frag
            },
            matcap: {
                uniforms: H([Y.common, Y.bumpmap, Y.normalmap, Y.displacementmap, Y.fog, {
                    matcap: {
                        value: null
                    }
                }]),
                vertexShader: G.meshmatcap_vert,
                fragmentShader: G.meshmatcap_frag
            },
            points: {
                uniforms: H([Y.points, Y.fog]),
                vertexShader: G.points_vert,
                fragmentShader: G.points_frag
            },
            dashed: {
                uniforms: H([Y.common, Y.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: G.linedashed_vert,
                fragmentShader: G.linedashed_frag
            },
            depth: {
                uniforms: H([Y.common, Y.displacementmap]),
                vertexShader: G.depth_vert,
                fragmentShader: G.depth_frag
            },
            normal: {
                uniforms: H([Y.common, Y.bumpmap, Y.normalmap, Y.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: G.normal_vert,
                fragmentShader: G.normal_frag
            },
            sprite: {
                uniforms: H([Y.sprite, Y.fog]),
                vertexShader: G.sprite_vert,
                fragmentShader: G.sprite_frag
            },
            background: {
                uniforms: {
                    uvTransform: {
                        value: new w
                    },
                    t2D: {
                        value: null
                    }
                },
                vertexShader: G.background_vert,
                fragmentShader: G.background_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: G.cube_vert,
                fragmentShader: G.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: G.equirect_vert,
                fragmentShader: G.equirect_frag
            },
            distanceRGBA: {
                uniforms: H([Y.common, Y.displacementmap, {
                    referencePosition: {
                        value: new b
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: G.distanceRGBA_vert,
                fragmentShader: G.distanceRGBA_frag
            },
            shadow: {
                uniforms: H([Y.lights, Y.fog, {
                    color: {
                        value: new q(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: G.shadow_vert,
                fragmentShader: G.shadow_frag
            }
        };

    function Z() {
        var t = null,
            e = !1,
            i = null;

        function n(r, a) {
            !1 !== e && (i(r, a), t.requestAnimationFrame(n))
        }
        return {
            start: function () {
                !0 !== e && null !== i && (t.requestAnimationFrame(n), e = !0)
            },
            stop: function () {
                e = !1
            },
            setAnimationLoop: function (t) {
                i = t
            },
            setContext: function (e) {
                t = e
            }
        }
    }

    function Q(t) {
        var e = new WeakMap;
        return {
            get: function (t) {
                return t.isInterleavedBufferAttribute && (t = t.data), e.get(t)
            },
            remove: function (i) {
                i.isInterleavedBufferAttribute && (i = i.data);
                var n = e.get(i);
                n && (t.deleteBuffer(n.buffer), e.delete(i))
            },
            update: function (i, n) {
                i.isInterleavedBufferAttribute && (i = i.data);
                var r = e.get(i);
                void 0 === r ? e.set(i, function (e, i) {
                    var n = e.array,
                        r = e.dynamic ? 35048 : 35044,
                        a = t.createBuffer();
                    t.bindBuffer(i, a), t.bufferData(i, n, r), e.onUploadCallback();
                    var o = 5126;
                    return n instanceof Float32Array ? o = 5126 : n instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : n instanceof Uint16Array ? o = 5123 : n instanceof Int16Array ? o = 5122 : n instanceof Uint32Array ? o = 5125 : n instanceof Int32Array ? o = 5124 : n instanceof Int8Array ? o = 5120 : n instanceof Uint8Array && (o = 5121), {
                        buffer: a,
                        type: o,
                        bytesPerElement: n.BYTES_PER_ELEMENT,
                        version: e.version
                    }
                }(i, n)) : r.version < i.version && (! function (e, i, n) {
                    var r = i.array,
                        a = i.updateRange;
                    t.bindBuffer(n, e), !1 === i.dynamic ? t.bufferData(n, r, 35044) : -1 === a.count ? t.bufferSubData(n, 0, r) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(n, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)), a.count = -1)
                }(r.buffer, i, n), r.version = i.version)
            }
        }
    }

    function K(t, e, i, n, r, a) {
        this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new b, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new q, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
    }

    function $(t, e, i, n) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || $.DefaultOrder
    }

    function tt() {
        this.mask = 1
    }
    J.physical = {
        uniforms: H([J.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: G.meshphysical_vert,
        fragmentShader: G.meshphysical_frag
    }, Object.assign(K.prototype, {
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
            for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    }), $.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], $.DefaultOrder = "XYZ", Object.defineProperties($.prototype, {
        x: {
            get: function () {
                return this._x
            },
            set: function (t) {
                this._x = t, this.onChangeCallback()
            }
        },
        y: {
            get: function () {
                return this._y
            },
            set: function (t) {
                this._y = t, this.onChangeCallback()
            }
        },
        z: {
            get: function () {
                return this._z
            },
            set: function (t) {
                this._z = t, this.onChangeCallback()
            }
        },
        order: {
            get: function () {
                return this._order
            },
            set: function (t) {
                this._order = t, this.onChangeCallback()
            }
        }
    }), Object.assign($.prototype, {
        isEuler: !0,
        set: function (t, e, i, n) {
            return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
        },
        clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function (t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function (t, e, i) {
            var n = g.clamp,
                r = t.elements,
                a = r[0],
                o = r[4],
                s = r[8],
                c = r[1],
                h = r[5],
                l = r[9],
                u = r[2],
                p = r[6],
                d = r[10];
            return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === e ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(p, h), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== i && this.onChangeCallback(), this
        },
        setFromQuaternion: function () {
            var t = new y;
            return function (e, i, n) {
                return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, n)
            }
        }(),
        setFromVector3: function (t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: (X = new x, function (t) {
            return X.setFromEuler(this), this.setFromQuaternion(X, t)
        }),
        equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function (t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        },
        toVector3: function (t) {
            return t ? t.set(this._x, this._y, this._z) : new b(this._x, this._y, this._z)
        },
        onChange: function (t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function () {}
    }), Object.assign(tt.prototype, {
        set: function (t) {
            this.mask = 1 << t | 0
        },
        enable: function (t) {
            this.mask |= 1 << t | 0
        },
        toggle: function (t) {
            this.mask ^= 1 << t | 0
        },
        disable: function (t) {
            this.mask &= ~(1 << t | 0)
        },
        test: function (t) {
            return 0 != (this.mask & t.mask)
        }
    });
    var et, it, nt, rt, at = 0;

    function ot() {
        Object.defineProperty(this, "id", {
            value: at++
        }), this.uuid = g.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ot.DefaultUp.clone();
        var t = new b,
            e = new $,
            i = new x,
            n = new b(1, 1, 1);
        e.onChange((function () {
            i.setFromEuler(e, !1)
        })), i.onChange((function () {
            e.setFromQuaternion(i, void 0, !1)
        })), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            modelViewMatrix: {
                value: new y
            },
            normalMatrix: {
                value: new w
            }
        }), this.matrix = new y, this.matrixWorld = new y, this.matrixAutoUpdate = ot.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new tt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }
    ot.DefaultUp = new b(0, 1, 0), ot.DefaultMatrixAutoUpdate = !0, ot.prototype = Object.assign(Object.create(n.prototype), {
        constructor: ot,
        isObject3D: !0,
        onBeforeRender: function () {},
        onAfterRender: function () {},
        applyMatrix: function (t) {
            this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function (t) {
            return this.quaternion.premultiply(t), this
        },
        setRotationFromAxisAngle: function (t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function (t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function (t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function (t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: (rt = new x, function (t, e) {
            return rt.setFromAxisAngle(t, e), this.quaternion.multiply(rt), this
        }),
        rotateOnWorldAxis: function () {
            var t = new x;
            return function (e, i) {
                return t.setFromAxisAngle(e, i), this.quaternion.premultiply(t), this
            }
        }(),
        rotateX: function () {
            var t = new b(1, 0, 0);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateY: function () {
            var t = new b(0, 1, 0);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateZ: function () {
            var t = new b(0, 0, 1);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        translateOnAxis: function () {
            var t = new b;
            return function (e, i) {
                return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this
            }
        }(),
        translateX: function () {
            var t = new b(1, 0, 0);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateY: function () {
            var t = new b(0, 1, 0);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateZ: function () {
            var t = new b(0, 0, 1);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        localToWorld: function (t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: (nt = new y, function (t) {
            return t.applyMatrix4(nt.getInverse(this.matrixWorld))
        }),
        lookAt: function () {
            var t = new x,
                e = new y,
                i = new b,
                n = new b;
            return function (r, a, o) {
                r.isVector3 ? i.copy(r) : i.set(r, a, o);
                var s = this.parent;
                this.updateWorldMatrix(!0, !1), n.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? e.lookAt(n, i, this.up) : e.lookAt(i, n, this.up), this.quaternion.setFromRotationMatrix(e), s && (e.extractRotation(s.matrixWorld), t.setFromRotationMatrix(e), this.quaternion.premultiply(t.inverse()))
            }
        }(),
        add: function (t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
                type: "added"
            }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
        },
        remove: function (t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                return this
            }
            var i = this.children.indexOf(t);
            return -1 !== i && (t.parent = null, t.dispatchEvent({
                type: "removed"
            }), this.children.splice(i, 1)), this
        },
        getObjectById: function (t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function (t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function (t, e) {
            if (this[t] === e) return this;
            for (var i = 0, n = this.children.length; i < n; i++) {
                var r = this.children[i].getObjectByProperty(t, e);
                if (void 0 !== r) return r
            }
        },
        getWorldPosition: function (t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new b), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: (et = new b, it = new b, function (t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new x), this.updateMatrixWorld(!0), this.matrixWorld.decompose(et, t, it), t
        }),
        getWorldScale: function () {
            var t = new b,
                e = new x;
            return function (i) {
                return void 0 === i && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), i = new b), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, i), i
            }
        }(),
        getWorldDirection: function (t) {
            void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new b), this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize()
        },
        raycast: function () {},
        traverse: function (t) {
            t(this);
            for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t)
        },
        traverseVisible: function (t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
            }
        },
        traverseAncestors: function (t) {
            var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t))
        },
        updateMatrix: function () {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function (t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
        },
        updateWorldMatrix: function (t, e) {
            var i = this.parent;
            if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
                for (var n = this.children, r = 0, a = n.length; r < a; r++) n[r].updateWorldMatrix(!1, !0)
        },
        toJSON: function (t) {
            var e = void 0 === t || "string" == typeof t,
                i = {};
            e && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            }, i.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var n = {};

            function r(e, i) {
                return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
            }
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isMesh || this.isLine || this.isPoints) {
                n.geometry = r(t.geometries, this.geometry);
                var a = this.geometry.parameters;
                if (void 0 !== a && void 0 !== a.shapes) {
                    var o = a.shapes;
                    if (Array.isArray(o))
                        for (var s = 0, c = o.length; s < c; s++) {
                            var h = o[s];
                            r(t.shapes, h)
                        } else r(t.shapes, o)
                }
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    var l = [];
                    for (s = 0, c = this.material.length; s < c; s++) l.push(r(t.materials, this.material[s]));
                    n.material = l
                } else n.material = r(t.materials, this.material);
            if (this.children.length > 0) {
                n.children = [];
                for (s = 0; s < this.children.length; s++) n.children.push(this.children[s].toJSON(t).object)
            }
            if (e) {
                var u = m(t.geometries),
                    p = m(t.materials),
                    d = m(t.textures),
                    f = m(t.images);
                o = m(t.shapes);
                u.length > 0 && (i.geometries = u), p.length > 0 && (i.materials = p), d.length > 0 && (i.textures = d), f.length > 0 && (i.images = f), o.length > 0 && (i.shapes = o)
            }
            return i.object = n, i;

            function m(t) {
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    delete n.metadata, e.push(n)
                }
                return e
            }
        },
        clone: function (t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function (t, e) {
            if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                for (var i = 0; i < t.children.length; i++) {
                    var n = t.children[i];
                    this.add(n.clone())
                }
            return this
        }
    });
    var st, ct, ht = 0;

    function lt() {
        Object.defineProperty(this, "id", {
            value: ht += 2
        }), this.uuid = g.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function ut(t, e, i) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }

    function pt(t, e, i) {
        ut.call(this, new Int8Array(t), e, i)
    }

    function dt(t, e, i) {
        ut.call(this, new Uint8Array(t), e, i)
    }

    function ft(t, e, i) {
        ut.call(this, new Uint8ClampedArray(t), e, i)
    }

    function mt(t, e, i) {
        ut.call(this, new Int16Array(t), e, i)
    }

    function gt(t, e, i) {
        ut.call(this, new Uint16Array(t), e, i)
    }

    function vt(t, e, i) {
        ut.call(this, new Int32Array(t), e, i)
    }

    function yt(t, e, i) {
        ut.call(this, new Uint32Array(t), e, i)
    }

    function xt(t, e, i) {
        ut.call(this, new Float32Array(t), e, i)
    }

    function bt(t, e, i) {
        ut.call(this, new Float64Array(t), e, i)
    }

    function wt() {
        this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function _t(t) {
        if (0 === t.length) return -1 / 0;
        for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]);
        return e
    }
    lt.prototype = Object.assign(Object.create(n.prototype), {
        constructor: lt,
        isGeometry: !0,
        applyMatrix: function (t) {
            for (var e = (new w).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
                this.vertices[i].applyMatrix4(t)
            }
            for (i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i];
                r.normal.applyMatrix3(e).normalize();
                for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
        },
        rotateX: function () {
            var t = new y;
            return function (e) {
                return t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function () {
            var t = new y;
            return function (e) {
                return t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function () {
            var t = new y;
            return function (e) {
                return t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function () {
            var t = new y;
            return function (e, i, n) {
                return t.makeTranslation(e, i, n), this.applyMatrix(t), this
            }
        }(),
        scale: function () {
            var t = new y;
            return function (e, i, n) {
                return t.makeScale(e, i, n), this.applyMatrix(t), this
            }
        }(),
        lookAt: (ct = new ot, function (t) {
            ct.lookAt(t), ct.updateMatrix(), this.applyMatrix(ct.matrix)
        }),
        fromBufferGeometry: function (t) {
            var e = this,
                i = null !== t.index ? t.index.array : void 0,
                n = t.attributes,
                r = n.position.array,
                a = void 0 !== n.normal ? n.normal.array : void 0,
                o = void 0 !== n.color ? n.color.array : void 0,
                s = void 0 !== n.uv ? n.uv.array : void 0,
                c = void 0 !== n.uv2 ? n.uv2.array : void 0;
            void 0 !== c && (this.faceVertexUvs[1] = []);
            for (var h = 0, l = 0; h < r.length; h += 3, l += 2) e.vertices.push((new b).fromArray(r, h)), void 0 !== o && e.colors.push((new q).fromArray(o, h));

            function u(t, i, n, r) {
                var h = void 0 === o ? [] : [e.colors[t].clone(), e.colors[i].clone(), e.colors[n].clone()],
                    l = new K(t, i, n, void 0 === a ? [] : [(new b).fromArray(a, 3 * t), (new b).fromArray(a, 3 * i), (new b).fromArray(a, 3 * n)], h, r);
                e.faces.push(l), void 0 !== s && e.faceVertexUvs[0].push([(new v).fromArray(s, 2 * t), (new v).fromArray(s, 2 * i), (new v).fromArray(s, 2 * n)]), void 0 !== c && e.faceVertexUvs[1].push([(new v).fromArray(c, 2 * t), (new v).fromArray(c, 2 * i), (new v).fromArray(c, 2 * n)])
            }
            var p = t.groups;
            if (p.length > 0)
                for (h = 0; h < p.length; h++)
                    for (var d = p[h], f = d.start, m = (l = f, f + d.count); l < m; l += 3) void 0 !== i ? u(i[l], i[l + 1], i[l + 2], d.materialIndex) : u(l, l + 1, l + 2, d.materialIndex);
            else if (void 0 !== i)
                for (h = 0; h < i.length; h += 3) u(i[h], i[h + 1], i[h + 2]);
            else
                for (h = 0; h < r.length / 3; h += 3) u(h, h + 1, h + 2);
            return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
        },
        center: (st = new b, function () {
            return this.computeBoundingBox(), this.boundingBox.getCenter(st).negate(), this.translate(st.x, st.y, st.z), this
        }),
        normalize: function () {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center,
                e = this.boundingSphere.radius,
                i = 0 === e ? 1 : 1 / e,
                n = new y;
            return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(n), this
        },
        computeFaceNormals: function () {
            for (var t = new b, e = new b, i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i],
                    a = this.vertices[r.a],
                    o = this.vertices[r.b],
                    s = this.vertices[r.c];
                t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), r.normal.copy(t)
            }
        },
        computeVertexNormals: function (t) {
            var e, i, n, r, a, o;
            for (void 0 === t && (t = !0), o = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) o[e] = new b;
            if (t) {
                var s, c, h, l = new b,
                    u = new b;
                for (n = 0, r = this.faces.length; n < r; n++) a = this.faces[n], s = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], l.subVectors(h, c), u.subVectors(s, c), l.cross(u), o[a.a].add(l), o[a.b].add(l), o[a.c].add(l)
            } else
                for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) o[(a = this.faces[n]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
            for (e = 0, i = this.vertices.length; e < i; e++) o[e].normalize();
            for (n = 0, r = this.faces.length; n < r; n++) {
                var p = (a = this.faces[n]).vertexNormals;
                3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function () {
            var t, e, i;
            for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
                var n = (i = this.faces[t]).vertexNormals;
                3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function () {
            var t, e, i, n, r;
            for (i = 0, n = this.faces.length; i < n; i++)
                for ((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
            var a = new lt;
            for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                    var o = this.morphNormals[t].faceNormals,
                        s = this.morphNormals[t].vertexNormals;
                    for (i = 0, n = this.faces.length; i < n; i++) c = new b, h = {
                        a: new b,
                        b: new b,
                        c: new b
                    }, o.push(c), s.push(h)
                }
                var c, h, l = this.morphNormals[t];
                for (a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], c = l.faceNormals[i], h = l.vertexNormals[i], c.copy(r.normal), h.a.copy(r.vertexNormals[0]), h.b.copy(r.vertexNormals[1]), h.c.copy(r.vertexNormals[2])
            }
            for (i = 0, n = this.faces.length; i < n; i++)(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
        },
        computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new z), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function () {
            null === this.boundingSphere && (this.boundingSphere = new N), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function (t, e, i) {
            if (t && t.isGeometry) {
                var n, r = this.vertices.length,
                    a = this.vertices,
                    o = t.vertices,
                    s = this.faces,
                    c = t.faces,
                    h = this.faceVertexUvs[0],
                    l = t.faceVertexUvs[0],
                    u = this.colors,
                    p = t.colors;
                void 0 === i && (i = 0), void 0 !== e && (n = (new w).getNormalMatrix(e));
                for (var d = 0, f = o.length; d < f; d++) {
                    var m = o[d].clone();
                    void 0 !== e && m.applyMatrix4(e), a.push(m)
                }
                for (d = 0, f = p.length; d < f; d++) u.push(p[d].clone());
                for (d = 0, f = c.length; d < f; d++) {
                    var g, v, y, x = c[d],
                        b = x.vertexNormals,
                        _ = x.vertexColors;
                    (g = new K(x.a + r, x.b + r, x.c + r)).normal.copy(x.normal), void 0 !== n && g.normal.applyMatrix3(n).normalize();
                    for (var M = 0, S = b.length; M < S; M++) v = b[M].clone(), void 0 !== n && v.applyMatrix3(n).normalize(), g.vertexNormals.push(v);
                    g.color.copy(x.color);
                    for (M = 0, S = _.length; M < S; M++) y = _[M], g.vertexColors.push(y.clone());
                    g.materialIndex = x.materialIndex + i, s.push(g)
                }
                for (d = 0, f = l.length; d < f; d++) {
                    var E = l[d],
                        T = [];
                    if (void 0 !== E) {
                        for (M = 0, S = E.length; M < S; M++) T.push(E[M].clone());
                        h.push(T)
                    }
                }
            } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
        },
        mergeMesh: function (t) {
            t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
        },
        mergeVertices: function () {
            var t, e, i, n, r, a, o, s, c = {},
                h = [],
                l = [],
                u = Math.pow(10, 4);
            for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], void 0 === c[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (c[e] = i, h.push(this.vertices[i]), l[i] = h.length - 1) : l[i] = l[c[e]];
            var p = [];
            for (i = 0, n = this.faces.length; i < n; i++) {
                (r = this.faces[i]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
                for (var d = 0; d < 3; d++)
                    if (a[d] === a[(d + 1) % 3]) {
                        p.push(i);
                        break
                    }
            }
            for (i = p.length - 1; i >= 0; i--) {
                var f = p[i];
                for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
            }
            var m = this.vertices.length - h.length;
            return this.vertices = h, m
        },
        setFromPoints: function (t) {
            this.vertices = [];
            for (var e = 0, i = t.length; e < i; e++) {
                var n = t[e];
                this.vertices.push(new b(n.x, n.y, n.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function () {
            for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
            t.sort((function (t, e) {
                return t.materialIndex - e.materialIndex
            }));
            var n, r, a = this.faceVertexUvs[0],
                o = this.faceVertexUvs[1];
            a && a.length === e && (n = []), o && o.length === e && (r = []);
            for (i = 0; i < e; i++) {
                var s = t[i]._id;
                n && n.push(a[s]), r && r.push(o[s])
            }
            n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r)
        },
        toJSON: function () {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                return t
            }
            for (var n = [], r = 0; r < this.vertices.length; r++) {
                var a = this.vertices[r];
                n.push(a.x, a.y, a.z)
            }
            var o = [],
                s = [],
                c = {},
                h = [],
                l = {},
                u = [],
                p = {};
            for (r = 0; r < this.faces.length; r++) {
                var d = this.faces[r],
                    f = void 0 !== this.faceVertexUvs[0][r],
                    m = d.normal.length() > 0,
                    g = d.vertexNormals.length > 0,
                    v = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
                    y = d.vertexColors.length > 0,
                    x = 0;
                if (x = M(x, 0, 0), x = M(x, 1, !0), x = M(x, 2, !1), x = M(x, 3, f), x = M(x, 4, m), x = M(x, 5, g), x = M(x, 6, v), x = M(x, 7, y), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), f) {
                    var b = this.faceVertexUvs[0][r];
                    o.push(T(b[0]), T(b[1]), T(b[2]))
                }
                if (m && o.push(S(d.normal)), g) {
                    var w = d.vertexNormals;
                    o.push(S(w[0]), S(w[1]), S(w[2]))
                }
                if (v && o.push(E(d.color)), y) {
                    var _ = d.vertexColors;
                    o.push(E(_[0]), E(_[1]), E(_[2]))
                }
            }

            function M(t, e, i) {
                return i ? t | 1 << e : t & ~(1 << e)
            }

            function S(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== c[e] || (c[e] = s.length / 3, s.push(t.x, t.y, t.z)), c[e]
            }

            function E(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== l[e] || (l[e] = h.length, h.push(t.getHex())), l[e]
            }

            function T(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== p[e] || (p[e] = u.length / 2, u.push(t.x, t.y)), p[e]
            }
            return t.data = {}, t.data.vertices = n, t.data.normals = s, h.length > 0 && (t.data.colors = h), u.length > 0 && (t.data.uvs = [u]), t.data.faces = o, t
        },
        clone: function () {
            return (new lt).copy(this)
        },
        copy: function (t) {
            var e, i, n, r, a, o;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var s = t.vertices;
            for (e = 0, i = s.length; e < i; e++) this.vertices.push(s[e].clone());
            var c = t.colors;
            for (e = 0, i = c.length; e < i; e++) this.colors.push(c[e].clone());
            var h = t.faces;
            for (e = 0, i = h.length; e < i; e++) this.faces.push(h[e].clone());
            for (e = 0, i = t.faceVertexUvs.length; e < i; e++) {
                var l = t.faceVertexUvs[e];
                for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = l.length; n < r; n++) {
                    var u = l[n],
                        p = [];
                    for (a = 0, o = u.length; a < o; a++) {
                        var d = u[a];
                        p.push(d.clone())
                    }
                    this.faceVertexUvs[e].push(p)
                }
            }
            var f = t.morphTargets;
            for (e = 0, i = f.length; e < i; e++) {
                var m = {};
                if (m.name = f[e].name, void 0 !== f[e].vertices)
                    for (m.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++) m.vertices.push(f[e].vertices[n].clone());
                if (void 0 !== f[e].normals)
                    for (m.normals = [], n = 0, r = f[e].normals.length; n < r; n++) m.normals.push(f[e].normals[n].clone());
                this.morphTargets.push(m)
            }
            var g = t.morphNormals;
            for (e = 0, i = g.length; e < i; e++) {
                var v = {};
                if (void 0 !== g[e].vertexNormals)
                    for (v.vertexNormals = [], n = 0, r = g[e].vertexNormals.length; n < r; n++) {
                        var y = g[e].vertexNormals[n],
                            x = {};
                        x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), v.vertexNormals.push(x)
                    }
                if (void 0 !== g[e].faceNormals)
                    for (v.faceNormals = [], n = 0, r = g[e].faceNormals.length; n < r; n++) v.faceNormals.push(g[e].faceNormals[n].clone());
                this.morphNormals.push(v)
            }
            var b = t.skinWeights;
            for (e = 0, i = b.length; e < i; e++) this.skinWeights.push(b[e].clone());
            var w = t.skinIndices;
            for (e = 0, i = w.length; e < i; e++) this.skinIndices.push(w[e].clone());
            var _ = t.lineDistances;
            for (e = 0, i = _.length; e < i; e++) this.lineDistances.push(_[e]);
            var M = t.boundingBox;
            null !== M && (this.boundingBox = M.clone());
            var S = t.boundingSphere;
            return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Object.defineProperty(ut.prototype, "needsUpdate", {
        set: function (t) {
            !0 === t && this.version++
        }
    }), Object.assign(ut.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function () {},
        setArray: function (t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this
        },
        setDynamic: function (t) {
            return this.dynamic = t, this
        },
        copy: function (t) {
            return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
        },
        copyAt: function (t, e, i) {
            t *= this.itemSize, i *= e.itemSize;
            for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
            return this
        },
        copyArray: function (t) {
            return this.array.set(t), this
        },
        copyColorsArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new q), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
            }
            return this
        },
        copyVector2sArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), a = new v), e[i++] = a.x, e[i++] = a.y
            }
            return this
        },
        copyVector3sArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), a = new b), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z
            }
            return this
        },
        copyVector4sArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), a = new R), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w
            }
            return this
        },
        set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        getX: function (t) {
            return this.array[t * this.itemSize]
        },
        setX: function (t, e) {
            return this.array[t * this.itemSize] = e, this
        },
        getY: function (t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function (t, e) {
            return this.array[t * this.itemSize + 1] = e, this
        },
        getZ: function (t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function (t, e) {
            return this.array[t * this.itemSize + 2] = e, this
        },
        getW: function (t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function (t, e) {
            return this.array[t * this.itemSize + 3] = e, this
        },
        setXY: function (t, e, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
        },
        setXYZ: function (t, e, i, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
        },
        setXYZW: function (t, e, i, n, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
        },
        onUpload: function (t) {
            return this.onUploadCallback = t, this
        },
        clone: function () {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
    }), pt.prototype = Object.create(ut.prototype), pt.prototype.constructor = pt, dt.prototype = Object.create(ut.prototype), dt.prototype.constructor = dt, ft.prototype = Object.create(ut.prototype), ft.prototype.constructor = ft, mt.prototype = Object.create(ut.prototype), mt.prototype.constructor = mt, gt.prototype = Object.create(ut.prototype), gt.prototype.constructor = gt, vt.prototype = Object.create(ut.prototype), vt.prototype.constructor = vt, yt.prototype = Object.create(ut.prototype), yt.prototype.constructor = yt, xt.prototype = Object.create(ut.prototype), xt.prototype.constructor = xt, bt.prototype = Object.create(ut.prototype), bt.prototype.constructor = bt, Object.assign(wt.prototype, {
        computeGroups: function (t) {
            for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
                var o = r[a];
                o.materialIndex !== n && (n = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), e = {
                    start: 3 * a,
                    materialIndex: n
                })
            }
            void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), this.groups = i
        },
        fromGeometry: function (t) {
            var e, i = t.faces,
                n = t.vertices,
                r = t.faceVertexUvs,
                a = r[0] && r[0].length > 0,
                o = r[1] && r[1].length > 0,
                s = t.morphTargets,
                c = s.length;
            if (c > 0) {
                e = [];
                for (var h = 0; h < c; h++) e[h] = {
                    name: s[h].name,
                    data: []
                };
                this.morphTargets.position = e
            }
            var l, u = t.morphNormals,
                p = u.length;
            if (p > 0) {
                l = [];
                for (h = 0; h < p; h++) l[h] = {
                    name: u[h].name,
                    data: []
                };
                this.morphTargets.normal = l
            }
            var d = t.skinIndices,
                f = t.skinWeights,
                m = d.length === n.length,
                g = f.length === n.length;
            n.length > 0 && 0 === i.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
            for (h = 0; h < i.length; h++) {
                var y = i[h];
                this.vertices.push(n[y.a], n[y.b], n[y.c]);
                var x = y.vertexNormals;
                if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
                else {
                    var b = y.normal;
                    this.normals.push(b, b, b)
                }
                var w, _ = y.vertexColors;
                if (3 === _.length) this.colors.push(_[0], _[1], _[2]);
                else {
                    var M = y.color;
                    this.colors.push(M, M, M)
                }
                if (!0 === a) void 0 !== (w = r[0][h]) ? this.uvs.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new v, new v, new v));
                if (!0 === o) void 0 !== (w = r[1][h]) ? this.uvs2.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new v, new v, new v));
                for (var S = 0; S < c; S++) {
                    var E = s[S].vertices;
                    e[S].data.push(E[y.a], E[y.b], E[y.c])
                }
                for (S = 0; S < p; S++) {
                    var T = u[S].vertexNormals[h];
                    l[S].data.push(T.a, T.b, T.c)
                }
                m && this.skinIndices.push(d[y.a], d[y.b], d[y.c]), g && this.skinWeights.push(f[y.a], f[y.b], f[y.c])
            }
            return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        }
    });
    var Mt = 1;

    function St() {
        Object.defineProperty(this, "id", {
            value: Mt += 2
        }), this.uuid = g.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {}
    }

    function Et(t, e, i, n, r, a) {
        lt.call(this), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        }, this.fromBufferGeometry(new Tt(t, e, i, n, r, a)), this.mergeVertices()
    }

    function Tt(t, e, i, n, r, a) {
        St.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        };
        var o = this;
        t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
        var s = [],
            c = [],
            h = [],
            l = [],
            u = 0,
            p = 0;

        function d(t, e, i, n, r, a, d, f, m, g, v) {
            var y, x, w = a / m,
                _ = d / g,
                M = a / 2,
                S = d / 2,
                E = f / 2,
                T = m + 1,
                L = g + 1,
                A = 0,
                P = 0,
                R = new b;
            for (x = 0; x < L; x++) {
                var C = x * _ - S;
                for (y = 0; y < T; y++) {
                    var O = y * w - M;
                    R[t] = O * n, R[e] = C * r, R[i] = E, c.push(R.x, R.y, R.z), R[t] = 0, R[e] = 0, R[i] = f > 0 ? 1 : -1, h.push(R.x, R.y, R.z), l.push(y / m), l.push(1 - x / g), A += 1
                }
            }
            for (x = 0; x < g; x++)
                for (y = 0; y < m; y++) {
                    var I = u + y + T * x,
                        D = u + y + T * (x + 1),
                        z = u + (y + 1) + T * (x + 1),
                        N = u + (y + 1) + T * x;
                    s.push(I, D, N), s.push(D, z, N), P += 6
                }
            o.addGroup(p, P, v), p += P, u += A
        }
        d("z", "y", "x", -1, -1, i, e, t, a, r, 0), d("z", "y", "x", 1, -1, i, e, -t, a, r, 1), d("x", "z", "y", 1, 1, t, i, e, n, a, 2), d("x", "z", "y", 1, -1, t, i, -e, n, a, 3), d("x", "y", "z", 1, -1, t, e, i, n, r, 4), d("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(s), this.addAttribute("position", new xt(c, 3)), this.addAttribute("normal", new xt(h, 3)), this.addAttribute("uv", new xt(l, 2))
    }

    function Lt(t, e, i, n) {
        lt.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        }, this.fromBufferGeometry(new At(t, e, i, n)), this.mergeVertices()
    }

    function At(t, e, i, n) {
        St.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        };
        var r, a, o = (t = t || 1) / 2,
            s = (e = e || 1) / 2,
            c = Math.floor(i) || 1,
            h = Math.floor(n) || 1,
            l = c + 1,
            u = h + 1,
            p = t / c,
            d = e / h,
            f = [],
            m = [],
            g = [],
            v = [];
        for (a = 0; a < u; a++) {
            var y = a * d - s;
            for (r = 0; r < l; r++) {
                var x = r * p - o;
                m.push(x, -y, 0), g.push(0, 0, 1), v.push(r / c), v.push(1 - a / h)
            }
        }
        for (a = 0; a < h; a++)
            for (r = 0; r < c; r++) {
                var b = r + l * a,
                    w = r + l * (a + 1),
                    _ = r + 1 + l * (a + 1),
                    M = r + 1 + l * a;
                f.push(b, w, M), f.push(w, _, M)
            }
        this.setIndex(f), this.addAttribute("position", new xt(m, 3)), this.addAttribute("normal", new xt(g, 3)), this.addAttribute("uv", new xt(v, 2))
    }
    St.prototype = Object.assign(Object.create(n.prototype), {
        constructor: St,
        isBufferGeometry: !0,
        getIndex: function () {
            return this.index
        },
        setIndex: function (t) {
            Array.isArray(t) ? this.index = new(_t(t) > 65535 ? yt : gt)(t, 1) : this.index = t
        },
        addAttribute: function (t, e) {
            return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : (this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new ut(arguments[1], arguments[2])))
        },
        getAttribute: function (t) {
            return this.attributes[t]
        },
        removeAttribute: function (t) {
            return delete this.attributes[t], this
        },
        addGroup: function (t, e, i) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== i ? i : 0
            })
        },
        clearGroups: function () {
            this.groups = []
        },
        setDrawRange: function (t, e) {
            this.drawRange.start = t, this.drawRange.count = e
        },
        applyMatrix: function (t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
            var i = this.attributes.normal;
            void 0 !== i && ((new w).getNormalMatrix(t).applyToBufferAttribute(i), i.needsUpdate = !0);
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function () {
            var t = new y;
            return function (e) {
                return t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function () {
            var t = new y;
            return function (e) {
                return t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function () {
            var t = new y;
            return function (e) {
                return t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function () {
            var t = new y;
            return function (e, i, n) {
                return t.makeTranslation(e, i, n), this.applyMatrix(t), this
            }
        }(),
        scale: function () {
            var t = new y;
            return function (e, i, n) {
                return t.makeScale(e, i, n), this.applyMatrix(t), this
            }
        }(),
        lookAt: function () {
            var t = new ot;
            return function (e) {
                t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(),
        center: function () {
            var t = new b;
            return function () {
                return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
            }
        }(),
        setFromObject: function (t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                var i = new xt(3 * e.vertices.length, 3),
                    n = new xt(3 * e.colors.length, 3);
                if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var r = new xt(e.lineDistances.length, 1);
                    this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        setFromPoints: function (t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.push(r.x, r.y, r.z || 0)
            }
            return this.addAttribute("position", new xt(e, 3)), this
        },
        updateFromObject: function (t) {
            var e, i = t.geometry;
            if (t.isMesh) {
                var n = i.__directGeometry;
                if (!0 === i.elementsNeedUpdate && (n = void 0, i.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(i);
                n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n
            }
            return !0 === i.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(i.vertices), e.needsUpdate = !0), i.verticesNeedUpdate = !1), !0 === i.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(i.normals), e.needsUpdate = !0), i.normalsNeedUpdate = !1), !0 === i.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(i.colors), e.needsUpdate = !0), i.colorsNeedUpdate = !1), i.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(i.uvs), e.needsUpdate = !0), i.uvsNeedUpdate = !1), i.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(i.lineDistances), e.needsUpdate = !0), i.lineDistancesNeedUpdate = !1), i.groupsNeedUpdate && (i.computeGroups(t.geometry), this.groups = i.groups, i.groupsNeedUpdate = !1), this
        },
        fromGeometry: function (t) {
            return t.__directGeometry = (new wt).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function (t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.addAttribute("position", new ut(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                var i = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new ut(i, 3).copyVector3sArray(t.normals))
            }
            if (t.colors.length > 0) {
                var n = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new ut(n, 3).copyColorsArray(t.colors))
            }
            if (t.uvs.length > 0) {
                var r = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new ut(r, 2).copyVector2sArray(t.uvs))
            }
            if (t.uvs2.length > 0) {
                var a = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new ut(a, 2).copyVector2sArray(t.uvs2))
            }
            for (var o in this.groups = t.groups, t.morphTargets) {
                for (var s = [], c = t.morphTargets[o], h = 0, l = c.length; h < l; h++) {
                    var u = c[h],
                        p = new xt(3 * u.data.length, 3);
                    p.name = u.name, s.push(p.copyVector3sArray(u.data))
                }
                this.morphAttributes[o] = s
            }
            if (t.skinIndices.length > 0) {
                var d = new xt(4 * t.skinIndices.length, 4);
                this.addAttribute("skinIndex", d.copyVector4sArray(t.skinIndices))
            }
            if (t.skinWeights.length > 0) {
                var f = new xt(4 * t.skinWeights.length, 4);
                this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
        },
        computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new z);
            var t = this.attributes.position;
            void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function () {
            var t = new z,
                e = new b;
            return function () {
                null === this.boundingSphere && (this.boundingSphere = new N);
                var i = this.attributes.position;
                if (i) {
                    var n = this.boundingSphere.center;
                    t.setFromBufferAttribute(i), t.getCenter(n);
                    for (var r = 0, a = 0, o = i.count; a < o; a++) e.x = i.getX(a), e.y = i.getY(a), e.z = i.getZ(a), r = Math.max(r, n.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function () {},
        computeVertexNormals: function () {
            var t = this.index,
                e = this.attributes;
            if (e.position) {
                var i = e.position.array;
                if (void 0 === e.normal) this.addAttribute("normal", new ut(new Float32Array(i.length), 3));
                else
                    for (var n = e.normal.array, r = 0, a = n.length; r < a; r++) n[r] = 0;
                var o, s, c, h = e.normal.array,
                    l = new b,
                    u = new b,
                    p = new b,
                    d = new b,
                    f = new b;
                if (t) {
                    var m = t.array;
                    for (r = 0, a = t.count; r < a; r += 3) o = 3 * m[r + 0], s = 3 * m[r + 1], c = 3 * m[r + 2], l.fromArray(i, o), u.fromArray(i, s), p.fromArray(i, c), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), h[o] += d.x, h[o + 1] += d.y, h[o + 2] += d.z, h[s] += d.x, h[s + 1] += d.y, h[s + 2] += d.z, h[c] += d.x, h[c + 1] += d.y, h[c + 2] += d.z
                } else
                    for (r = 0, a = i.length; r < a; r += 9) l.fromArray(i, r), u.fromArray(i, r + 3), p.fromArray(i, r + 6), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), h[r] = d.x, h[r + 1] = d.y, h[r + 2] = d.z, h[r + 3] = d.x, h[r + 4] = d.y, h[r + 5] = d.z, h[r + 6] = d.x, h[r + 7] = d.y, h[r + 8] = d.z;
                this.normalizeNormals(), e.normal.needsUpdate = !0
            }
        },
        merge: function (t, e) {
            if (t && t.isBufferGeometry) {
                void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                var i = this.attributes;
                for (var n in i)
                    if (void 0 !== t.attributes[n])
                        for (var r = i[n].array, a = t.attributes[n], o = a.array, s = 0, c = a.itemSize * e; s < o.length; s++, c++) r[c] = o[s];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
        },
        normalizeNormals: function () {
            var t = new b;
            return function () {
                for (var e = this.attributes.normal, i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.normalize(), e.setXYZ(i, t.x, t.y, t.z)
            }
        }(),
        toNonIndexed: function () {
            function t(t, e) {
                for (var i = t.array, n = t.itemSize, r = new i.constructor(e.length * n), a = 0, o = 0, s = 0, c = e.length; s < c; s++) {
                    a = e[s] * n;
                    for (var h = 0; h < n; h++) r[o++] = i[a++]
                }
                return new ut(r, n)
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var e = new St,
                i = this.index.array,
                n = this.attributes;
            for (var r in n) {
                var a = t(n[r], i);
                e.addAttribute(r, a)
            }
            var o = this.morphAttributes;
            for (r in o) {
                for (var s = [], c = o[r], h = 0, l = c.length; h < l; h++) {
                    a = t(c[h], i);
                    s.push(a)
                }
                e.morphAttributes[r] = s
            }
            for (var u = this.groups, p = (h = 0, u.length); h < p; h++) {
                var d = u[h];
                e.addGroup(d.start, d.count, d.materialIndex)
            }
            return e
        },
        toJSON: function () {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var n = this.index;
            if (null !== n) {
                var r = Array.prototype.slice.call(n.array);
                t.data.index = {
                    type: n.array.constructor.name,
                    array: r
                }
            }
            var a = this.attributes;
            for (var i in a) {
                var o = a[i];
                r = Array.prototype.slice.call(o.array);
                t.data.attributes[i] = {
                    itemSize: o.itemSize,
                    type: o.array.constructor.name,
                    array: r,
                    normalized: o.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            var c = this.boundingSphere;
            return null !== c && (t.data.boundingSphere = {
                center: c.center.toArray(),
                radius: c.radius
            }), t
        },
        clone: function () {
            return (new St).copy(this)
        },
        copy: function (t) {
            var e, i, n;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var r = t.index;
            null !== r && this.setIndex(r.clone());
            var a = t.attributes;
            for (e in a) {
                var o = a[e];
                this.addAttribute(e, o.clone())
            }
            var s = t.morphAttributes;
            for (e in s) {
                var c = [],
                    h = s[e];
                for (i = 0, n = h.length; i < n; i++) c.push(h[i].clone());
                this.morphAttributes[e] = c
            }
            var l = t.groups;
            for (i = 0, n = l.length; i < n; i++) {
                var u = l[i];
                this.addGroup(u.start, u.count, u.materialIndex)
            }
            var p = t.boundingBox;
            null !== p && (this.boundingBox = p.clone());
            var d = t.boundingSphere;
            return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Et.prototype = Object.create(lt.prototype), Et.prototype.constructor = Et, Tt.prototype = Object.create(St.prototype), Tt.prototype.constructor = Tt, Lt.prototype = Object.create(lt.prototype), Lt.prototype.constructor = Lt, At.prototype = Object.create(St.prototype), At.prototype.constructor = At;
    var Pt, Rt, Ct, Ot, It, Dt, zt, Nt, Bt, Ut, Gt, Ft, Ht = 0;

    function kt() {
        Object.defineProperty(this, "id", {
            value: Ht++
        }), this.uuid = g.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = 0, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.userData = {}, this.needsUpdate = !0
    }

    function Vt(t) {
        kt.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
    }

    function jt(t, e) {
        this.origin = void 0 !== t ? t : new b, this.direction = void 0 !== e ? e : new b
    }

    function Wt(t, e, i) {
        this.a = void 0 !== t ? t : new b, this.b = void 0 !== e ? e : new b, this.c = void 0 !== i ? i : new b
    }

    function qt(t) {
        kt.call(this), this.type = "MeshBasicMaterial", this.color = new q(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
    }

    function Xt(t, e) {
        ot.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new St, this.material = void 0 !== e ? e : new qt({
            color: 16777215 * Math.random()
        }), this.drawMode = 0, this.updateMorphTargets()
    }

    function Yt(t, e, i, n) {
        var r, a, o = new q(0),
            s = 0,
            c = null,
            h = 0;

        function l(t, i) {
            e.buffers.color.setClear(t.r, t.g, t.b, i, n)
        }
        return {
            getClearColor: function () {
                return o
            },
            setClearColor: function (t, e) {
                o.set(t), l(o, s = void 0 !== e ? e : 1)
            },
            getClearAlpha: function () {
                return s
            },
            setClearAlpha: function (t) {
                l(o, s = t)
            },
            render: function (e, n, u, p) {
                var d = n.background;
                if (null === d ? (l(o, s), c = null, h = 0) : d && d.isColor && (l(d, 1), p = !0, c = null, h = 0), (t.autoClear || p) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), d && (d.isCubeTexture || d.isWebGLRenderTargetCube)) {
                    void 0 === a && ((a = new Xt(new Tt(1, 1, 1), new Vt({
                        type: "BackgroundCubeMaterial",
                        uniforms: F(J.cube.uniforms),
                        vertexShader: J.cube.vertexShader,
                        fragmentShader: J.cube.fragmentShader,
                        side: 1,
                        depthTest: !0,
                        depthWrite: !1,
                        fog: !1
                    }))).geometry.removeAttribute("normal"), a.geometry.removeAttribute("uv"), a.onBeforeRender = function (t, e, i) {
                        this.matrixWorld.copyPosition(i.matrixWorld)
                    }, Object.defineProperty(a.material, "map", {
                        get: function () {
                            return this.uniforms.tCube.value
                        }
                    }), i.update(a));
                    var f = d.isWebGLRenderTargetCube ? d.texture : d;
                    a.material.uniforms.tCube.value = f, a.material.uniforms.tFlip.value = d.isWebGLRenderTargetCube ? 1 : -1, c === d && h === f.version || (a.material.needsUpdate = !0, c = d, h = f.version), e.unshift(a, a.geometry, a.material, 0, 0, null)
                } else d && d.isTexture && (void 0 === r && ((r = new Xt(new At(2, 2), new Vt({
                    type: "BackgroundMaterial",
                    uniforms: F(J.background.uniforms),
                    vertexShader: J.background.vertexShader,
                    fragmentShader: J.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))).geometry.removeAttribute("normal"), Object.defineProperty(r.material, "map", {
                    get: function () {
                        return this.uniforms.t2D.value
                    }
                }), i.update(r)), r.material.uniforms.t2D.value = d, !0 === d.matrixAutoUpdate && d.updateMatrix(), r.material.uniforms.uvTransform.value.copy(d.matrix), c === d && h === d.version || (r.material.needsUpdate = !0, c = d, h = d.version), e.unshift(r, r.geometry, r.material, 0, 0, null))
            }
        }
    }

    function Jt(t, e, i, n) {
        var r;
        this.setMode = function (t) {
            r = t
        }, this.render = function (e, n) {
            t.drawArrays(r, e, n), i.update(n, r)
        }, this.renderInstances = function (a, o, s) {
            var c;
            if (n.isWebGL2) c = t;
            else if (null === (c = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            c[n.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](r, o, s, a.maxInstancedCount), i.update(s, r, a.maxInstancedCount)
        }
    }

    function Zt(t, e, i) {
        var n;

        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
        }
        var a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext,
            o = void 0 !== i.precision ? i.precision : "highp",
            s = r(o);
        s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
        var c = !0 === i.logarithmicDepthBuffer,
            h = t.getParameter(34930),
            l = t.getParameter(35660),
            u = t.getParameter(3379),
            p = t.getParameter(34076),
            d = t.getParameter(34921),
            f = t.getParameter(36347),
            m = t.getParameter(36348),
            g = t.getParameter(36349),
            v = l > 0,
            y = a || !!e.get("OES_texture_float");
        return {
            isWebGL2: a,
            getMaxAnisotropy: function () {
                if (void 0 !== n) return n;
                var i = e.get("EXT_texture_filter_anisotropic");
                return n = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: r,
            precision: o,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: l,
            maxTextureSize: u,
            maxCubemapSize: p,
            maxAttributes: d,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: g,
            vertexTextures: v,
            floatFragmentTextures: y,
            floatVertexTextures: v && y,
            maxSamples: a ? t.getParameter(36183) : 0
        }
    }

    function Qt() {
        var t = this,
            e = null,
            i = 0,
            n = !1,
            r = !1,
            a = new B,
            o = new w,
            s = {
                value: null,
                needsUpdate: !1
            };

        function c() {
            s.value !== e && (s.value = e, s.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0
        }

        function h(e, i, n, r) {
            var c = null !== e ? e.length : 0,
                h = null;
            if (0 !== c) {
                if (h = s.value, !0 !== r || null === h) {
                    var l = n + 4 * c,
                        u = i.matrixWorldInverse;
                    o.getNormalMatrix(u), (null === h || h.length < l) && (h = new Float32Array(l));
                    for (var p = 0, d = n; p !== c; ++p, d += 4) a.copy(e[p]).applyMatrix4(u, o), a.normal.toArray(h, d), h[d + 3] = a.constant
                }
                s.value = h, s.needsUpdate = !0
            }
            return t.numPlanes = c, h
        }
        this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, r, a) {
            var o = 0 !== t.length || r || 0 !== i || n;
            return n = r, e = h(t, a, 0), i = t.length, o
        }, this.beginShadows = function () {
            r = !0, h(null)
        }, this.endShadows = function () {
            r = !1, c()
        }, this.setState = function (t, a, o, l, u, p) {
            if (!n || null === t || 0 === t.length || r && !o) r ? h(null) : c();
            else {
                var d = r ? 0 : i,
                    f = 4 * d,
                    m = u.clippingState || null;
                s.value = m, m = h(t, l, f, p);
                for (var g = 0; g !== f; ++g) m[g] = e[g];
                u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
            }
        }
    }

    function Kt(t) {
        var e = {};
        return {
            get: function (i) {
                if (void 0 !== e[i]) return e[i];
                var n;
                switch (i) {
                case "WEBGL_depth_texture":
                    n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    n = t.getExtension(i)
                }
                return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), e[i] = n, n
            }
        }
    }

    function $t(t, e, i) {
        var n = {},
            r = {};

        function a(t) {
            var o = t.target,
                s = n[o.id];
            for (var c in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[c]);
            o.removeEventListener("dispose", a), delete n[o.id];
            var h = r[s.id];
            h && (e.remove(h), delete r[s.id]), i.memory.geometries--
        }
        return {
            get: function (t, e) {
                var r = n[e.id];
                return r || (e.addEventListener("dispose", a), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new St).setFromObject(t)), r = e._bufferGeometry), n[e.id] = r, i.memory.geometries++, r)
            },
            update: function (t) {
                var i = t.index,
                    n = t.attributes;
                for (var r in null !== i && e.update(i, 34963), n) e.update(n[r], 34962);
                var a = t.morphAttributes;
                for (var r in a)
                    for (var o = a[r], s = 0, c = o.length; s < c; s++) e.update(o[s], 34962)
            },
            getWireframeAttribute: function (t) {
                var i = r[t.id];
                if (i) return i;
                var n, a = [],
                    o = t.index,
                    s = t.attributes;
                if (null !== o)
                    for (var c = 0, h = (n = o.array).length; c < h; c += 3) {
                        var l = n[c + 0],
                            u = n[c + 1],
                            p = n[c + 2];
                        a.push(l, u, u, p, p, l)
                    } else
                        for (c = 0, h = (n = s.position.array).length / 3 - 1; c < h; c += 3) {
                            l = c + 0, u = c + 1, p = c + 2;
                            a.push(l, u, u, p, p, l)
                        }
                return i = new(_t(a) > 65535 ? yt : gt)(a, 1), e.update(i, 34963), r[t.id] = i, i
            }
        }
    }

    function te(t, e, i, n) {
        var r, a, o;
        this.setMode = function (t) {
            r = t
        }, this.setIndex = function (t) {
            a = t.type, o = t.bytesPerElement
        }, this.render = function (e, n) {
            t.drawElements(r, n, a, e * o), i.update(n, r)
        }, this.renderInstances = function (s, c, h) {
            var l;
            if (n.isWebGL2) l = t;
            else if (null === (l = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[n.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](r, h, a, c * o, s.maxInstancedCount), i.update(h, r, s.maxInstancedCount)
        }
    }

    function ee(t) {
        var e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function () {
                e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
            },
            update: function (t, i, n) {
                switch (n = n || 1, e.calls++, i) {
                case 4:
                    e.triangles += n * (t / 3);
                    break;
                case 5:
                case 6:
                    e.triangles += n * (t - 2);
                    break;
                case 1:
                    e.lines += n * (t / 2);
                    break;
                case 3:
                    e.lines += n * (t - 1);
                    break;
                case 2:
                    e.lines += n * t;
                    break;
                case 0:
                    e.points += n * t;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", i)
                }
            }
        }
    }

    function ie(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }

    function ne(t) {
        var e = {},
            i = new Float32Array(8);
        return {
            update: function (n, r, a, o) {
                var s = n.morphTargetInfluences,
                    c = s.length,
                    h = e[r.id];
                if (void 0 === h) {
                    h = [];
                    for (var l = 0; l < c; l++) h[l] = [l, 0];
                    e[r.id] = h
                }
                var u = a.morphTargets && r.morphAttributes.position,
                    p = a.morphNormals && r.morphAttributes.normal;
                for (l = 0; l < c; l++) {
                    0 !== (d = h[l])[1] && (u && r.removeAttribute("morphTarget" + l), p && r.removeAttribute("morphNormal" + l))
                }
                for (l = 0; l < c; l++) {
                    (d = h[l])[0] = l, d[1] = s[l]
                }
                for (h.sort(ie), l = 0; l < 8; l++) {
                    var d;
                    if (d = h[l]) {
                        var f = d[0],
                            m = d[1];
                        if (m) {
                            u && r.addAttribute("morphTarget" + l, u[f]), p && r.addAttribute("morphNormal" + l, p[f]), i[l] = m;
                            continue
                        }
                    }
                    i[l] = 0
                }
                o.getUniforms().setValue(t, "morphTargetInfluences", i)
            }
        }
    }

    function re(t, e) {
        var i = {};
        return {
            update: function (n) {
                var r = e.render.frame,
                    a = n.geometry,
                    o = t.get(n, a);
                return i[o.id] !== r && (a.isGeometry && o.updateFromObject(n), t.update(o), i[o.id] = r), o
            },
            dispose: function () {
                i = {}
            }
        }
    }

    function ae(t, e, i, n, r, a, o, s, c, h) {
        t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, P.call(this, t, e, i, n, r, a, o, s, c, h), this.flipY = !1
    }

    function oe(t, e, i, n) {
        P.call(this, null), this.image = {
            data: t,
            width: e,
            height: i,
            depth: n
        }, this.magFilter = 1003, this.minFilter = 1003, this.generateMipmaps = !1, this.flipY = !1
    }
    kt.prototype = Object.assign(Object.create(n.prototype), {
        constructor: kt,
        isMaterial: !0,
        onBeforeCompile: function () {},
        setValues: function (t) {
            if (void 0 !== t)
                for (var e in t) {
                    var i = t[e];
                    if (void 0 !== i)
                        if ("shading" !== e) {
                            var n = this[e];
                            void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                        } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
                    else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                }
        },
        toJSON: function (t) {
            var e = void 0 === t || "string" == typeof t;
            e && (t = {
                textures: {},
                images: {}
            });
            var i = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };

            function n(t) {
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    delete n.metadata, e.push(n)
                }
                return e
            }
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearCoat && (i.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (i.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, i.reflectivity = this.reflectivity, void 0 !== this.combine && (i.combine = this.combine), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i.blending = this.blending), !0 === this.flatShading && (i.flatShading = this.flatShading), 0 !== this.side && (i.side = this.side), 0 !== this.vertexColors && (i.vertexColors = this.vertexColors), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (i.morphTargets = !0), !0 === this.skinning && (i.skinning = !0), !1 === this.visible && (i.visible = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e) {
                var r = n(t.textures),
                    a = n(t.images);
                r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a)
            }
            return i
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
            var e = t.clippingPlanes,
                i = null;
            if (null !== e) {
                var n = e.length;
                i = new Array(n);
                for (var r = 0; r !== n; ++r) i[r] = e[r].clone()
            }
            return this.clippingPlanes = i, this.shadowSide = t.shadowSide, this
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Vt.prototype = Object.create(kt.prototype), Vt.prototype.constructor = Vt, Vt.prototype.isShaderMaterial = !0, Vt.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = F(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    }, Vt.prototype.toJSON = function (t) {
        var e = kt.prototype.toJSON.call(this, t);
        for (var i in e.uniforms = {}, this.uniforms) {
            var n = this.uniforms[i].value;
            n && n.isTexture ? e.uniforms[i] = {
                type: "t",
                value: n.toJSON(t).uuid
            } : n && n.isColor ? e.uniforms[i] = {
                type: "c",
                value: n.getHex()
            } : n && n.isVector2 ? e.uniforms[i] = {
                type: "v2",
                value: n.toArray()
            } : n && n.isVector3 ? e.uniforms[i] = {
                type: "v3",
                value: n.toArray()
            } : n && n.isVector4 ? e.uniforms[i] = {
                type: "v4",
                value: n.toArray()
            } : n && n.isMatrix3 ? e.uniforms[i] = {
                type: "m3",
                value: n.toArray()
            } : n && n.isMatrix4 ? e.uniforms[i] = {
                type: "m4",
                value: n.toArray()
            } : e.uniforms[i] = {
                value: n
            }
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
        var r = {};
        for (var a in this.extensions) !0 === this.extensions[a] && (r[a] = !0);
        return Object.keys(r).length > 0 && (e.extensions = r), e
    }, Object.assign(jt.prototype, {
        set: function (t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        },
        at: function (t, e) {
            return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new b), e.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function (t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this
        },
        recast: function () {
            var t = new b;
            return function (e) {
                return this.origin.copy(this.at(e, t)), this
            }
        }(),
        closestPointToPoint: function (t, e) {
            void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new b), e.subVectors(t, this.origin);
            var i = e.dot(this.direction);
            return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
        },
        distanceToPoint: function (t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: function () {
            var t = new b;
            return function (e) {
                var i = t.subVectors(e, this.origin).dot(this.direction);
                return i < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
            }
        }(),
        distanceSqToSegment: (Rt = new b, Ct = new b, Ot = new b, function (t, e, i, n) {
            Rt.copy(t).add(e).multiplyScalar(.5), Ct.copy(e).sub(t).normalize(), Ot.copy(this.origin).sub(Rt);
            var r, a, o, s, c = .5 * t.distanceTo(e),
                h = -this.direction.dot(Ct),
                l = Ot.dot(this.direction),
                u = -Ot.dot(Ct),
                p = Ot.lengthSq(),
                d = Math.abs(1 - h * h);
            if (d > 0)
                if (a = h * l - u, s = c * d, (r = h * u - l) >= 0)
                    if (a >= -s)
                        if (a <= s) {
                            var f = 1 / d;
                            o = (r *= f) * (r + h * (a *= f) + 2 * l) + a * (h * r + a + 2 * u) + p
                        } else a = c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
            else a = -c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
            else a <= -s ? o = -(r = Math.max(0, -(-h * c + l))) * r + (a = r > 0 ? -c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p : a <= s ? (r = 0, o = (a = Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p) : o = -(r = Math.max(0, -(h * c + l))) * r + (a = r > 0 ? c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p;
            else a = h > 0 ? -c : c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p;
            return i && i.copy(this.direction).multiplyScalar(r).add(this.origin), n && n.copy(Ct).multiplyScalar(a).add(Rt), o
        }),
        intersectSphere: function () {
            var t = new b;
            return function (e, i) {
                t.subVectors(e.center, this.origin);
                var n = t.dot(this.direction),
                    r = t.dot(t) - n * n,
                    a = e.radius * e.radius;
                if (r > a) return null;
                var o = Math.sqrt(a - r),
                    s = n - o,
                    c = n + o;
                return s < 0 && c < 0 ? null : s < 0 ? this.at(c, i) : this.at(s, i)
            }
        }(),
        intersectsSphere: function (t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        },
        distanceToPlane: function (t) {
            var e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var i = -(this.origin.dot(t.normal) + t.constant) / e;
            return i >= 0 ? i : null
        },
        intersectPlane: function (t, e) {
            var i = this.distanceToPlane(t);
            return null === i ? null : this.at(i, e)
        },
        intersectsPlane: function (t) {
            var e = t.distanceToPoint(this.origin);
            return 0 === e || t.normal.dot(this.direction) * e < 0
        },
        intersectBox: function (t, e) {
            var i, n, r, a, o, s, c = 1 / this.direction.x,
                h = 1 / this.direction.y,
                l = 1 / this.direction.z,
                u = this.origin;
            return c >= 0 ? (i = (t.min.x - u.x) * c, n = (t.max.x - u.x) * c) : (i = (t.max.x - u.x) * c, n = (t.min.x - u.x) * c), h >= 0 ? (r = (t.min.y - u.y) * h, a = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), i > a || r > n ? null : ((r > i || i != i) && (i = r), (a < n || n != n) && (n = a), l >= 0 ? (o = (t.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l, s = (t.min.z - u.z) * l), i > s || o > n ? null : ((o > i || i != i) && (i = o), (s < n || n != n) && (n = s), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
        },
        intersectsBox: (Pt = new b, function (t) {
            return null !== this.intersectBox(t, Pt)
        }),
        intersectTriangle: function () {
            var t = new b,
                e = new b,
                i = new b,
                n = new b;
            return function (r, a, o, s, c) {
                e.subVectors(a, r), i.subVectors(o, r), n.crossVectors(e, i);
                var h, l = this.direction.dot(n);
                if (l > 0) {
                    if (s) return null;
                    h = 1
                } else {
                    if (!(l < 0)) return null;
                    h = -1, l = -l
                }
                t.subVectors(this.origin, r);
                var u = h * this.direction.dot(i.crossVectors(t, i));
                if (u < 0) return null;
                var p = h * this.direction.dot(e.cross(t));
                if (p < 0) return null;
                if (u + p > l) return null;
                var d = -h * t.dot(n);
                return d < 0 ? null : this.at(d / l, c)
            }
        }(),
        applyMatrix4: function (t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
        },
        equals: function (t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    }), Object.assign(Wt, {
        getNormal: (Dt = new b, function (t, e, i, n) {
            void 0 === n && (console.warn("THREE.Triangle: .getNormal() target is now required"), n = new b), n.subVectors(i, e), Dt.subVectors(t, e), n.cross(Dt);
            var r = n.lengthSq();
            return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
        }),
        getBarycoord: function () {
            var t = new b,
                e = new b,
                i = new b;
            return function (n, r, a, o, s) {
                t.subVectors(o, r), e.subVectors(a, r), i.subVectors(n, r);
                var c = t.dot(t),
                    h = t.dot(e),
                    l = t.dot(i),
                    u = e.dot(e),
                    p = e.dot(i),
                    d = c * u - h * h;
                if (void 0 === s && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new b), 0 === d) return s.set(-2, -1, -1);
                var f = 1 / d,
                    m = (u * l - h * p) * f,
                    g = (c * p - h * l) * f;
                return s.set(1 - m - g, g, m)
            }
        }(),
        containsPoint: function () {
            var t = new b;
            return function (e, i, n, r) {
                return Wt.getBarycoord(e, i, n, r, t), t.x >= 0 && t.y >= 0 && t.x + t.y <= 1
            }
        }(),
        getUV: (It = new b, function (t, e, i, n, r, a, o, s) {
            return this.getBarycoord(t, e, i, n, It), s.set(0, 0), s.addScaledVector(r, It.x), s.addScaledVector(a, It.y), s.addScaledVector(o, It.z), s
        })
    }), Object.assign(Wt.prototype, {
        set: function (t, e, i) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
        },
        setFromPointsAndIndices: function (t, e, i, n) {
            return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        },
        getArea: function () {
            var t = new b,
                e = new b;
            return function () {
                return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
            }
        }(),
        getMidpoint: function (t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new b), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        getNormal: function (t) {
            return Wt.getNormal(this.a, this.b, this.c, t)
        },
        getPlane: function (t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new b), t.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        getBarycoord: function (t, e) {
            return Wt.getBarycoord(t, this.a, this.b, this.c, e)
        },
        containsPoint: function (t) {
            return Wt.containsPoint(t, this.a, this.b, this.c)
        },
        getUV: function (t, e, i, n, r) {
            return Wt.getUV(t, this.a, this.b, this.c, e, i, n, r)
        },
        intersectsBox: function (t) {
            return t.intersectsTriangle(this)
        },
        closestPointToPoint: (zt = new b, Nt = new b, Bt = new b, Ut = new b, Gt = new b, Ft = new b, function (t, e) {
            void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new b);
            var i, n, r = this.a,
                a = this.b,
                o = this.c;
            zt.subVectors(a, r), Nt.subVectors(o, r), Ut.subVectors(t, r);
            var s = zt.dot(Ut),
                c = Nt.dot(Ut);
            if (s <= 0 && c <= 0) return e.copy(r);
            Gt.subVectors(t, a);
            var h = zt.dot(Gt),
                l = Nt.dot(Gt);
            if (h >= 0 && l <= h) return e.copy(a);
            var u = s * l - h * c;
            if (u <= 0 && s >= 0 && h <= 0) return i = s / (s - h), e.copy(r).addScaledVector(zt, i);
            Ft.subVectors(t, o);
            var p = zt.dot(Ft),
                d = Nt.dot(Ft);
            if (d >= 0 && p <= d) return e.copy(o);
            var f = p * c - s * d;
            if (f <= 0 && c >= 0 && d <= 0) return n = c / (c - d), e.copy(r).addScaledVector(Nt, n);
            var m = h * d - p * l;
            if (m <= 0 && l - h >= 0 && p - d >= 0) return Bt.subVectors(o, a), n = (l - h) / (l - h + (p - d)), e.copy(a).addScaledVector(Bt, n);
            var g = 1 / (m + f + u);
            return i = f * g, n = u * g, e.copy(r).addScaledVector(zt, i).addScaledVector(Nt, n)
        }),
        equals: function (t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }), qt.prototype = Object.create(kt.prototype), qt.prototype.constructor = qt, qt.prototype.isMeshBasicMaterial = !0, qt.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
    }, Xt.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: Xt,
        isMesh: !0,
        setDrawMode: function (t) {
            this.drawMode = t
        },
        copy: function (t) {
            return ot.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
        },
        updateMorphTargets: function () {
            var t, e, i, n = this.geometry;
            if (n.isBufferGeometry) {
                var r = n.morphAttributes,
                    a = Object.keys(r);
                if (a.length > 0) {
                    var o = r[a[0]];
                    if (void 0 !== o)
                        for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
                }
            } else {
                var s = n.morphTargets;
                void 0 !== s && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        },
        raycast: function () {
            var t = new y,
                e = new jt,
                i = new N,
                n = new b,
                r = new b,
                a = new b,
                o = new b,
                s = new b,
                c = new b,
                h = new v,
                l = new v,
                u = new v,
                p = new b,
                d = new b;

            function f(t, e, i, n, r, a, o, s) {
                if (null === (1 === e.side ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a, o, 2 !== e.side, s))) return null;
                d.copy(s), d.applyMatrix4(t.matrixWorld);
                var c = i.ray.origin.distanceTo(d);
                return c < i.near || c > i.far ? null : {
                    distance: c,
                    point: d.clone(),
                    object: t
                }
            }

            function m(t, e, i, o, s, c, d, m, g) {
                n.fromBufferAttribute(s, d), r.fromBufferAttribute(s, m), a.fromBufferAttribute(s, g);
                var y = f(t, e, i, o, n, r, a, p);
                if (y) {
                    c && (h.fromBufferAttribute(c, d), l.fromBufferAttribute(c, m), u.fromBufferAttribute(c, g), y.uv = Wt.getUV(p, n, r, a, h, l, u, new v));
                    var x = new K(d, m, g);
                    Wt.getNormal(n, r, a, x.normal), y.face = x
                }
                return y
            }
            return function (d, g) {
                var y, x = this.geometry,
                    b = this.material,
                    w = this.matrixWorld;
                if (void 0 !== b && (null === x.boundingSphere && x.computeBoundingSphere(), i.copy(x.boundingSphere), i.applyMatrix4(w), !1 !== d.ray.intersectsSphere(i) && (t.getInverse(w), e.copy(d.ray).applyMatrix4(t), null === x.boundingBox || !1 !== e.intersectsBox(x.boundingBox))))
                    if (x.isBufferGeometry) {
                        var _, M, S, E, T, L, A, P, R, C = x.index,
                            O = x.attributes.position,
                            I = x.attributes.uv,
                            D = x.groups,
                            z = x.drawRange;
                        if (null !== C)
                            if (Array.isArray(b))
                                for (E = 0, L = D.length; E < L; E++)
                                    for (R = b[(P = D[E]).materialIndex], T = Math.max(P.start, z.start), A = Math.min(P.start + P.count, z.start + z.count); T < A; T += 3) _ = C.getX(T), M = C.getX(T + 1), S = C.getX(T + 2), (y = m(this, R, d, e, O, I, _, M, S)) && (y.faceIndex = Math.floor(T / 3), g.push(y));
                            else
                                for (E = Math.max(0, z.start), L = Math.min(C.count, z.start + z.count); E < L; E += 3) _ = C.getX(E), M = C.getX(E + 1), S = C.getX(E + 2), (y = m(this, b, d, e, O, I, _, M, S)) && (y.faceIndex = Math.floor(E / 3), g.push(y));
                        else if (void 0 !== O)
                            if (Array.isArray(b))
                                for (E = 0, L = D.length; E < L; E++)
                                    for (R = b[(P = D[E]).materialIndex], T = Math.max(P.start, z.start), A = Math.min(P.start + P.count, z.start + z.count); T < A; T += 3)(y = m(this, R, d, e, O, I, _ = T, M = T + 1, S = T + 2)) && (y.faceIndex = Math.floor(T / 3), g.push(y));
                            else
                                for (E = Math.max(0, z.start), L = Math.min(O.count, z.start + z.count); E < L; E += 3)(y = m(this, b, d, e, O, I, _ = E, M = E + 1, S = E + 2)) && (y.faceIndex = Math.floor(E / 3), g.push(y))
                    } else if (x.isGeometry) {
                    var N, B, U, G, F = Array.isArray(b),
                        H = x.vertices,
                        k = x.faces,
                        V = x.faceVertexUvs[0];
                    V.length > 0 && (G = V);
                    for (var j = 0, W = k.length; j < W; j++) {
                        var q = k[j],
                            X = F ? b[q.materialIndex] : b;
                        if (void 0 !== X) {
                            if (N = H[q.a], B = H[q.b], U = H[q.c], !0 === X.morphTargets) {
                                var Y = x.morphTargets,
                                    J = this.morphTargetInfluences;
                                n.set(0, 0, 0), r.set(0, 0, 0), a.set(0, 0, 0);
                                for (var Z = 0, Q = Y.length; Z < Q; Z++) {
                                    var K = J[Z];
                                    if (0 !== K) {
                                        var $ = Y[Z].vertices;
                                        n.addScaledVector(o.subVectors($[q.a], N), K), r.addScaledVector(s.subVectors($[q.b], B), K), a.addScaledVector(c.subVectors($[q.c], U), K)
                                    }
                                }
                                n.add(N), r.add(B), a.add(U), N = n, B = r, U = a
                            }
                            if (y = f(this, X, d, e, N, B, U, p)) {
                                if (G && G[j]) {
                                    var tt = G[j];
                                    h.copy(tt[0]), l.copy(tt[1]), u.copy(tt[2]), y.uv = Wt.getUV(p, N, B, U, h, l, u, new v)
                                }
                                y.face = q, y.faceIndex = j, g.push(y)
                            }
                        }
                    }
                }
            }
        }(),
        clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), ae.prototype = Object.create(P.prototype), ae.prototype.constructor = ae, ae.prototype.isCubeTexture = !0, Object.defineProperty(ae.prototype, "images", {
        get: function () {
            return this.image
        },
        set: function (t) {
            this.image = t
        }
    }), oe.prototype = Object.create(P.prototype), oe.prototype.constructor = oe, oe.prototype.isDataTexture3D = !0;
    var se = new P,
        ce = new oe,
        he = new ae;

    function le() {
        this.seq = [], this.map = {}
    }
    var ue = [],
        pe = [],
        de = new Float32Array(16),
        fe = new Float32Array(9),
        me = new Float32Array(4);

    function ge(t, e, i) {
        var n = t[0];
        if (n <= 0 || n > 0) return t;
        var r = e * i,
            a = ue[r];
        if (void 0 === a && (a = new Float32Array(r), ue[r] = a), 0 !== e) {
            n.toArray(a, 0);
            for (var o = 1, s = 0; o !== e; ++o) s += i, t[o].toArray(a, s)
        }
        return a
    }

    function ve(t, e) {
        if (t.length !== e.length) return !1;
        for (var i = 0, n = t.length; i < n; i++)
            if (t[i] !== e[i]) return !1;
        return !0
    }

    function ye(t, e) {
        for (var i = 0, n = e.length; i < n; i++) t[i] = e[i]
    }

    function xe(t, e) {
        var i = pe[e];
        void 0 === i && (i = new Int32Array(e), pe[e] = i);
        for (var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit();
        return i
    }

    function be(t, e) {
        var i = this.cache;
        i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e)
    }

    function we(t, e) {
        var i = this.cache;
        i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e)
    }

    function _e(t, e) {
        var i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
        else {
            if (ve(i, e)) return;
            t.uniform2fv(this.addr, e), ye(i, e)
        }
    }

    function Me(t, e) {
        var i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
        else if (void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
        else {
            if (ve(i, e)) return;
            t.uniform3fv(this.addr, e), ye(i, e)
        }
    }

    function Se(t, e) {
        var i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
        else {
            if (ve(i, e)) return;
            t.uniform4fv(this.addr, e), ye(i, e)
        }
    }

    function Ee(t, e) {
        var i = this.cache,
            n = e.elements;
        if (void 0 === n) {
            if (ve(i, e)) return;
            t.uniformMatrix2fv(this.addr, !1, e), ye(i, e)
        } else {
            if (ve(i, n)) return;
            me.set(n), t.uniformMatrix2fv(this.addr, !1, me), ye(i, n)
        }
    }

    function Te(t, e) {
        var i = this.cache,
            n = e.elements;
        if (void 0 === n) {
            if (ve(i, e)) return;
            t.uniformMatrix3fv(this.addr, !1, e), ye(i, e)
        } else {
            if (ve(i, n)) return;
            fe.set(n), t.uniformMatrix3fv(this.addr, !1, fe), ye(i, n)
        }
    }

    function Le(t, e) {
        var i = this.cache,
            n = e.elements;
        if (void 0 === n) {
            if (ve(i, e)) return;
            t.uniformMatrix4fv(this.addr, !1, e), ye(i, e)
        } else {
            if (ve(i, n)) return;
            de.set(n), t.uniformMatrix4fv(this.addr, !1, de), ye(i, n)
        }
    }

    function Ae(t, e, i) {
        var n = this.cache,
            r = i.allocTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || se, r)
    }

    function Pe(t, e, i) {
        var n = this.cache,
            r = i.allocTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(e || ce, r)
    }

    function Re(t, e, i) {
        var n = this.cache,
            r = i.allocTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || he, r)
    }

    function Ce(t, e) {
        var i = this.cache;
        ve(i, e) || (t.uniform2iv(this.addr, e), ye(i, e))
    }

    function Oe(t, e) {
        var i = this.cache;
        ve(i, e) || (t.uniform3iv(this.addr, e), ye(i, e))
    }

    function Ie(t, e) {
        var i = this.cache;
        ve(i, e) || (t.uniform4iv(this.addr, e), ye(i, e))
    }

    function De(t, e) {
        var i = this.cache;
        ve(i, e) || (t.uniform1fv(this.addr, e), ye(i, e))
    }

    function ze(t, e) {
        var i = this.cache;
        ve(i, e) || (t.uniform1iv(this.addr, e), ye(i, e))
    }

    function Ne(t, e) {
        var i = this.cache,
            n = ge(e, this.size, 2);
        ve(i, n) || (t.uniform2fv(this.addr, n), this.updateCache(n))
    }

    function Be(t, e) {
        var i = this.cache,
            n = ge(e, this.size, 3);
        ve(i, n) || (t.uniform3fv(this.addr, n), this.updateCache(n))
    }

    function Ue(t, e) {
        var i = this.cache,
            n = ge(e, this.size, 4);
        ve(i, n) || (t.uniform4fv(this.addr, n), this.updateCache(n))
    }

    function Ge(t, e) {
        var i = this.cache,
            n = ge(e, this.size, 4);
        ve(i, n) || (t.uniformMatrix2fv(this.addr, !1, n), this.updateCache(n))
    }

    function Fe(t, e) {
        var i = this.cache,
            n = ge(e, this.size, 9);
        ve(i, n) || (t.uniformMatrix3fv(this.addr, !1, n), this.updateCache(n))
    }

    function He(t, e) {
        var i = this.cache,
            n = ge(e, this.size, 16);
        ve(i, n) || (t.uniformMatrix4fv(this.addr, !1, n), this.updateCache(n))
    }

    function ke(t, e, i) {
        var n = this.cache,
            r = e.length,
            a = xe(i, r);
        !1 === ve(n, a) && (t.uniform1iv(this.addr, a), ye(n, a));
        for (var o = 0; o !== r; ++o) i.setTexture2D(e[o] || se, a[o])
    }

    function Ve(t, e, i) {
        var n = this.cache,
            r = e.length,
            a = xe(i, r);
        !1 === ve(n, a) && (t.uniform1iv(this.addr, a), ye(n, a));
        for (var o = 0; o !== r; ++o) i.setTextureCube(e[o] || he, a[o])
    }

    function je(t, e, i) {
        this.id = t, this.addr = i, this.cache = [], this.setValue = function (t) {
            switch (t) {
            case 5126:
                return be;
            case 35664:
                return _e;
            case 35665:
                return Me;
            case 35666:
                return Se;
            case 35674:
                return Ee;
            case 35675:
                return Te;
            case 35676:
                return Le;
            case 35678:
            case 36198:
                return Ae;
            case 35679:
                return Pe;
            case 35680:
                return Re;
            case 5124:
            case 35670:
                return we;
            case 35667:
            case 35671:
                return Ce;
            case 35668:
            case 35672:
                return Oe;
            case 35669:
            case 35673:
                return Ie
            }
        }(e.type)
    }

    function We(t, e, i) {
        this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function (t) {
            switch (t) {
            case 5126:
                return De;
            case 35664:
                return Ne;
            case 35665:
                return Be;
            case 35666:
                return Ue;
            case 35674:
                return Ge;
            case 35675:
                return Fe;
            case 35676:
                return He;
            case 35678:
                return ke;
            case 35680:
                return Ve;
            case 5124:
            case 35670:
                return ze;
            case 35667:
            case 35671:
                return Ce;
            case 35668:
            case 35672:
                return Oe;
            case 35669:
            case 35673:
                return Ie
            }
        }(e.type)
    }

    function qe(t) {
        this.id = t, le.call(this)
    }
    We.prototype.updateCache = function (t) {
        var e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), ye(e, t)
    }, qe.prototype.setValue = function (t, e, i) {
        for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) {
            var o = n[r];
            o.setValue(t, e[o.id], i)
        }
    };
    var Xe = /([\w\d_]+)(\])?(\[|\.)?/g;

    function Ye(t, e) {
        t.seq.push(e), t.map[e.id] = e
    }

    function Je(t, e, i) {
        var n = t.name,
            r = n.length;
        for (Xe.lastIndex = 0;;) {
            var a = Xe.exec(n),
                o = Xe.lastIndex,
                s = a[1],
                c = "]" === a[2],
                h = a[3];
            if (c && (s |= 0), void 0 === h || "[" === h && o + 2 === r) {
                Ye(i, void 0 === h ? new je(s, t, e) : new We(s, t, e));
                break
            }
            var l = i.map[s];
            void 0 === l && Ye(i, l = new qe(s)), i = l
        }
    }

    function Ze(t, e, i) {
        le.call(this), this.renderer = i;
        for (var n = t.getProgramParameter(e, 35718), r = 0; r < n; ++r) {
            var a = t.getActiveUniform(e, r);
            Je(a, t.getUniformLocation(e, a.name), this)
        }
    }

    function Qe(t, e, i) {
        var n = t.createShader(e);
        return t.shaderSource(n, i), t.compileShader(n), !1 === t.getShaderParameter(n, 35713) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", 35633 === e ? "vertex" : "fragment", t.getShaderInfoLog(n), function (t) {
            for (var e = t.split("\n"), i = 0; i < e.length; i++) e[i] = i + 1 + ": " + e[i];
            return e.join("\n")
        }(i)), n
    }
    Ze.prototype.setValue = function (t, e, i) {
        var n = this.map[e];
        void 0 !== n && n.setValue(t, i, this.renderer)
    }, Ze.prototype.setOptional = function (t, e, i) {
        var n = e[i];
        void 0 !== n && this.setValue(t, i, n)
    }, Ze.upload = function (t, e, i, n) {
        for (var r = 0, a = e.length; r !== a; ++r) {
            var o = e[r],
                s = i[o.id];
            !1 !== s.needsUpdate && o.setValue(t, s.value, n)
        }
    }, Ze.seqWithValue = function (t, e) {
        for (var i = [], n = 0, r = t.length; n !== r; ++n) {
            var a = t[n];
            a.id in e && i.push(a)
        }
        return i
    };
    var Ke = 0;

    function $e(t) {
        switch (t) {
        case 3e3:
            return ["Linear", "( value )"];
        case 3001:
            return ["sRGB", "( value )"];
        case 3002:
            return ["RGBE", "( value )"];
        case 3004:
            return ["RGBM", "( value, 7.0 )"];
        case 3005:
            return ["RGBM", "( value, 16.0 )"];
        case 3006:
            return ["RGBD", "( value, 256.0 )"];
        case 3007:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw new Error("unsupported encoding: " + t)
        }
    }

    function ti(t, e) {
        var i = $e(e);
        return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
    }

    function ei(t, e) {
        var i;
        switch (e) {
        case 1:
            i = "Linear";
            break;
        case 2:
            i = "Reinhard";
            break;
        case 3:
            i = "Uncharted2";
            break;
        case 4:
            i = "OptimizedCineon";
            break;
        case 5:
            i = "ACESFilmic";
            break;
        default:
            throw new Error("unsupported toneMapping: " + e)
        }
        return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
    }

    function ii(t) {
        return "" !== t
    }

    function ni(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    }

    function ri(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }

    function ai(t) {
        return t.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, (function (t, e) {
            var i = G[e];
            if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
            return ai(i)
        }))
    }

    function oi(t) {
        return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, (function (t, e, i, n) {
            for (var r = "", a = parseInt(e); a < parseInt(i); a++) r += n.replace(/\[ i \]/g, "[ " + a + " ]");
            return r
        }))
    }

    function si(t, e, i, n, r, a, o) {
        var s = t.context,
            c = n.defines,
            h = r.vertexShader,
            l = r.fragmentShader,
            u = "SHADOWMAP_TYPE_BASIC";
        1 === a.shadowMapType ? u = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType && (u = "SHADOWMAP_TYPE_PCF_SOFT");
        var p = "ENVMAP_TYPE_CUBE",
            d = "ENVMAP_MODE_REFLECTION",
            f = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (n.envMap.mapping) {
            case 301:
            case 302:
                p = "ENVMAP_TYPE_CUBE";
                break;
            case 306:
            case 307:
                p = "ENVMAP_TYPE_CUBE_UV";
                break;
            case 303:
            case 304:
                p = "ENVMAP_TYPE_EQUIREC";
                break;
            case 305:
                p = "ENVMAP_TYPE_SPHERE"
            }
            switch (n.envMap.mapping) {
            case 302:
            case 304:
                d = "ENVMAP_MODE_REFRACTION"
            }
            switch (n.combine) {
            case 0:
                f = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                f = "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                f = "ENVMAP_BLENDING_ADD"
            }
        }
        var m, g, v, y, x, b = t.gammaFactor > 0 ? t.gammaFactor : 1,
            w = o.isWebGL2 ? "" : function (t, e, i) {
                return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap && !e.objectSpaceNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ii).join("\n")
            }(n.extensions, a, e),
            _ = function (t) {
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    !1 !== n && e.push("#define " + i + " " + n)
                }
                return e.join("\n")
            }(c),
            M = s.createProgram();
        if (n.isRawShaderMaterial ? ((m = [_].filter(ii).join("\n")).length > 0 && (m += "\n"), (g = [w, _].filter(ii).join("\n")).length > 0 && (g += "\n")) : (m = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, _, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + b, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(ii).join("\n"), g = [w, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, _, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + b, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", 0 !== a.toneMapping ? "#define TONE_MAPPING" : "", 0 !== a.toneMapping ? G.tonemapping_pars_fragment : "", 0 !== a.toneMapping ? ei("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? G.encodings_pars_fragment : "", a.mapEncoding ? ti("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? ti("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? ti("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? ti("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? (v = "linearToOutputTexel", y = a.outputEncoding, x = $e(y), "vec4 " + v + "( vec4 value ) { return LinearTo" + x[0] + x[1] + "; }") : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(ii).join("\n")), h = ri(h = ni(h = ai(h), a), a), l = ri(l = ni(l = ai(l), a), a), h = oi(h), l = oi(l), o.isWebGL2 && !n.isRawShaderMaterial) {
            var S = !1,
                E = /^\s*#version\s+300\s+es\s*\n/;
            n.isShaderMaterial && null !== h.match(E) && null !== l.match(E) && (S = !0, h = h.replace(E, ""), l = l.replace(E, "")), m = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + m, g = ["#version 300 es\n", "#define varying in", S ? "" : "out highp vec4 pc_fragColor;", S ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + g
        }
        var T = g + l,
            L = Qe(s, 35633, m + h),
            A = Qe(s, 35632, T);
        s.attachShader(M, L), s.attachShader(M, A), void 0 !== n.index0AttributeName ? s.bindAttribLocation(M, 0, n.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(M, 0, "position"), s.linkProgram(M);
        var P, R, C = s.getProgramInfoLog(M).trim(),
            O = s.getShaderInfoLog(L).trim(),
            I = s.getShaderInfoLog(A).trim(),
            D = !0,
            z = !0;
        return !1 === s.getProgramParameter(M, 35714) ? (D = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "35715", s.getProgramParameter(M, 35715), "gl.getProgramInfoLog", C, O, I)) : "" !== C ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", C) : "" !== O && "" !== I || (z = !1), z && (this.diagnostics = {
            runnable: D,
            material: n,
            programLog: C,
            vertexShader: {
                log: O,
                prefix: m
            },
            fragmentShader: {
                log: I,
                prefix: g
            }
        }), s.deleteShader(L), s.deleteShader(A), this.getUniforms = function () {
            return void 0 === P && (P = new Ze(s, M, t)), P
        }, this.getAttributes = function () {
            return void 0 === R && (R = function (t, e) {
                for (var i = {}, n = t.getProgramParameter(e, 35721), r = 0; r < n; r++) {
                    var a = t.getActiveAttrib(e, r).name;
                    i[a] = t.getAttribLocation(e, a)
                }
                return i
            }(s, M)), R
        }, this.destroy = function () {
            s.deleteProgram(M), this.program = void 0
        }, Object.defineProperties(this, {
            uniforms: {
                get: function () {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                }
            },
            attributes: {
                get: function () {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                }
            }
        }), this.name = r.name, this.id = Ke++, this.code = i, this.usedTimes = 1, this.program = M, this.vertexShader = L, this.fragmentShader = A, this
    }

    function ci(t, e, i) {
        var n = [],
            r = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                MeshMatcapMaterial: "matcap",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow",
                SpriteMaterial: "sprite"
            },
            a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

        function o(t, e) {
            var i;
            return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = t.texture.encoding) : i = 3e3, 3e3 === i && e && (i = 3007), i
        }
        this.getParameters = function (e, n, a, s, c, h, l) {
            var u = r[e.type],
                p = l.isSkinnedMesh ? function (t) {
                    var e = t.skeleton.bones;
                    if (i.floatVertexTextures) return 1024;
                    var n = i.maxVertexUniforms,
                        r = Math.floor((n - 20) / 4),
                        a = Math.min(r, e.length);
                    return a < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + a + "."), 0) : a
                }(l) : 0,
                d = i.precision;
            null !== e.precision && (d = i.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", d, "instead.");
            var f = t.getRenderTarget();
            return {
                shaderID: u,
                precision: d,
                supportsVertexTextures: i.vertexTextures,
                outputEncoding: o(f ? f.texture : null, t.gammaOutput),
                map: !!e.map,
                mapEncoding: o(e.map, t.gammaInput),
                matcap: !!e.matcap,
                matcapEncoding: o(e.matcap, t.gammaInput),
                envMap: !!e.envMap,
                envMapMode: e.envMap && e.envMap.mapping,
                envMapEncoding: o(e.envMap, t.gammaInput),
                envMapCubeUV: !!e.envMap && (306 === e.envMap.mapping || 307 === e.envMap.mapping),
                lightMap: !!e.lightMap,
                aoMap: !!e.aoMap,
                emissiveMap: !!e.emissiveMap,
                emissiveMapEncoding: o(e.emissiveMap, t.gammaInput),
                bumpMap: !!e.bumpMap,
                normalMap: !!e.normalMap,
                objectSpaceNormalMap: 1 === e.normalMapType,
                displacementMap: !!e.displacementMap,
                roughnessMap: !!e.roughnessMap,
                metalnessMap: !!e.metalnessMap,
                specularMap: !!e.specularMap,
                alphaMap: !!e.alphaMap,
                gradientMap: !!e.gradientMap,
                combine: e.combine,
                vertexColors: e.vertexColors,
                fog: !!s,
                useFog: e.fog,
                fogExp: s && s.isFogExp2,
                flatShading: e.flatShading,
                sizeAttenuation: e.sizeAttenuation,
                logarithmicDepthBuffer: i.logarithmicDepthBuffer,
                skinning: e.skinning && p > 0,
                maxBones: p,
                useVertexTexture: i.floatVertexTextures,
                morphTargets: e.morphTargets,
                morphNormals: e.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: n.directional.length,
                numPointLights: n.point.length,
                numSpotLights: n.spot.length,
                numRectAreaLights: n.rectArea.length,
                numHemiLights: n.hemi.length,
                numClippingPlanes: c,
                numClipIntersection: h,
                dithering: e.dithering,
                shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && a.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: t.toneMapping,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: e.premultipliedAlpha,
                alphaTest: e.alphaTest,
                doubleSided: 2 === e.side,
                flipSided: 1 === e.side,
                depthPacking: void 0 !== e.depthPacking && e.depthPacking
            }
        }, this.getProgramCode = function (e, i) {
            var n = [];
            if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
                for (var r in e.defines) n.push(r), n.push(e.defines[r]);
            for (var o = 0; o < a.length; o++) n.push(i[a[o]]);
            return n.push(e.onBeforeCompile.toString()), n.push(t.gammaOutput), n.push(t.gammaFactor), n.join()
        }, this.acquireProgram = function (r, a, o, s) {
            for (var c, h = 0, l = n.length; h < l; h++) {
                var u = n[h];
                if (u.code === s) {
                    ++(c = u).usedTimes;
                    break
                }
            }
            return void 0 === c && (c = new si(t, e, s, r, a, o, i), n.push(c)), c
        }, this.releaseProgram = function (t) {
            if (0 == --t.usedTimes) {
                var e = n.indexOf(t);
                n[e] = n[n.length - 1], n.pop(), t.destroy()
            }
        }, this.programs = n
    }

    function hi() {
        var t = new WeakMap;
        return {
            get: function (e) {
                var i = t.get(e);
                return void 0 === i && (i = {}, t.set(e, i)), i
            },
            remove: function (e) {
                t.delete(e)
            },
            update: function (e, i, n) {
                t.get(e)[i] = n
            },
            dispose: function () {
                t = new WeakMap
            }
        }
    }

    function li(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }

    function ui(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }

    function pi() {
        var t = [],
            e = 0,
            i = [],
            n = [];

        function r(i, n, r, a, o, s) {
            var c = t[e];
            return void 0 === c ? (c = {
                id: i.id,
                object: i,
                geometry: n,
                material: r,
                program: r.program,
                groupOrder: a,
                renderOrder: i.renderOrder,
                z: o,
                group: s
            }, t[e] = c) : (c.id = i.id, c.object = i, c.geometry = n, c.material = r, c.program = r.program, c.groupOrder = a, c.renderOrder = i.renderOrder, c.z = o, c.group = s), e++, c
        }
        return {
            opaque: i,
            transparent: n,
            init: function () {
                e = 0, i.length = 0, n.length = 0
            },
            push: function (t, e, a, o, s, c) {
                var h = r(t, e, a, o, s, c);
                (!0 === a.transparent ? n : i).push(h)
            },
            unshift: function (t, e, a, o, s, c) {
                var h = r(t, e, a, o, s, c);
                (!0 === a.transparent ? n : i).unshift(h)
            },
            sort: function () {
                i.length > 1 && i.sort(li), n.length > 1 && n.sort(ui)
            }
        }
    }

    function di() {
        var t = {};

        function e(i) {
            var n = i.target;
            n.removeEventListener("dispose", e), delete t[n.id]
        }
        return {
            get: function (i, n) {
                var r, a = t[i.id];
                return void 0 === a ? (r = new pi, t[i.id] = {}, t[i.id][n.id] = r, i.addEventListener("dispose", e)) : void 0 === (r = a[n.id]) && (r = new pi, a[n.id] = r), r
            },
            dispose: function () {
                t = {}
            }
        }
    }

    function fi() {
        var t = {};
        return {
            get: function (e) {
                if (void 0 !== t[e.id]) return t[e.id];
                var i;
                switch (e.type) {
                case "DirectionalLight":
                    i = {
                        direction: new b,
                        color: new q,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new v
                    };
                    break;
                case "SpotLight":
                    i = {
                        position: new b,
                        direction: new b,
                        color: new q,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new v
                    };
                    break;
                case "PointLight":
                    i = {
                        position: new b,
                        color: new q,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new v,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                    break;
                case "HemisphereLight":
                    i = {
                        direction: new b,
                        skyColor: new q,
                        groundColor: new q
                    };
                    break;
                case "RectAreaLight":
                    i = {
                        color: new q,
                        position: new b,
                        halfWidth: new b,
                        halfHeight: new b
                    }
                }
                return t[e.id] = i, i
            }
        }
    }
    var mi = 0;

    function gi() {
        var t = new fi,
            e = {
                id: mi++,
                hash: {
                    stateID: -1,
                    directionalLength: -1,
                    pointLength: -1,
                    spotLength: -1,
                    rectAreaLength: -1,
                    hemiLength: -1,
                    shadowsLength: -1
                },
                ambient: [0, 0, 0],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: []
            },
            i = new b,
            n = new y,
            r = new y;
        return {
            setup: function (a, o, s) {
                for (var c = 0, h = 0, l = 0, u = 0, p = 0, d = 0, f = 0, m = 0, g = s.matrixWorldInverse, v = 0, y = a.length; v < y; v++) {
                    var x = a[v],
                        b = x.color,
                        w = x.intensity,
                        _ = x.distance,
                        M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
                    if (x.isAmbientLight) c += b.r * w, h += b.g * w, l += b.b * w;
                    else if (x.isDirectionalLight) {
                        if ((E = t.get(x)).color.copy(x.color).multiplyScalar(x.intensity), E.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(g), E.shadow = x.castShadow, x.castShadow) {
                            var S = x.shadow;
                            E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize
                        }
                        e.directionalShadowMap[u] = M, e.directionalShadowMatrix[u] = x.shadow.matrix, e.directional[u] = E, u++
                    } else if (x.isSpotLight) {
                        if ((E = t.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(b).multiplyScalar(w), E.distance = _, E.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(g), E.coneCos = Math.cos(x.angle), E.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), E.decay = x.decay, E.shadow = x.castShadow, x.castShadow) {
                            S = x.shadow;
                            E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize
                        }
                        e.spotShadowMap[d] = M, e.spotShadowMatrix[d] = x.shadow.matrix, e.spot[d] = E, d++
                    } else if (x.isRectAreaLight) {
                        (E = t.get(x)).color.copy(b).multiplyScalar(w), E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), r.identity(), n.copy(x.matrixWorld), n.premultiply(g), r.extractRotation(n), E.halfWidth.set(.5 * x.width, 0, 0), E.halfHeight.set(0, .5 * x.height, 0), E.halfWidth.applyMatrix4(r), E.halfHeight.applyMatrix4(r), e.rectArea[f] = E, f++
                    } else if (x.isPointLight) {
                        if ((E = t.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(x.color).multiplyScalar(x.intensity), E.distance = x.distance, E.decay = x.decay, E.shadow = x.castShadow, x.castShadow) {
                            S = x.shadow;
                            E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize, E.shadowCameraNear = S.camera.near, E.shadowCameraFar = S.camera.far
                        }
                        e.pointShadowMap[p] = M, e.pointShadowMatrix[p] = x.shadow.matrix, e.point[p] = E, p++
                    } else if (x.isHemisphereLight) {
                        var E;
                        (E = t.get(x)).direction.setFromMatrixPosition(x.matrixWorld), E.direction.transformDirection(g), E.direction.normalize(), E.skyColor.copy(x.color).multiplyScalar(w), E.groundColor.copy(x.groundColor).multiplyScalar(w), e.hemi[m] = E, m++
                    }
                }
                e.ambient[0] = c, e.ambient[1] = h, e.ambient[2] = l, e.directional.length = u, e.spot.length = d, e.rectArea.length = f, e.point.length = p, e.hemi.length = m, e.hash.stateID = e.id, e.hash.directionalLength = u, e.hash.pointLength = p, e.hash.spotLength = d, e.hash.rectAreaLength = f, e.hash.hemiLength = m, e.hash.shadowsLength = o.length
            },
            state: e
        }
    }

    function vi() {
        var t = new gi,
            e = [],
            i = [];
        return {
            init: function () {
                e.length = 0, i.length = 0
            },
            state: {
                lightsArray: e,
                shadowsArray: i,
                lights: t
            },
            setupLights: function (n) {
                t.setup(e, i, n)
            },
            pushLight: function (t) {
                e.push(t)
            },
            pushShadow: function (t) {
                i.push(t)
            }
        }
    }

    function yi() {
        var t = {};

        function e(i) {
            var n = i.target;
            n.removeEventListener("dispose", e), delete t[n.id]
        }
        return {
            get: function (i, n) {
                var r;
                return void 0 === t[i.id] ? (r = new vi, t[i.id] = {}, t[i.id][n.id] = r, i.addEventListener("dispose", e)) : void 0 === t[i.id][n.id] ? (r = new vi, t[i.id][n.id] = r) : r = t[i.id][n.id], r
            },
            dispose: function () {
                t = {}
            }
        }
    }

    function xi(t) {
        kt.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    function bi(t) {
        kt.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new b, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    function wi(t, e, i) {
        for (var n = new U, r = new y, a = new v, o = new v(i, i), s = new b, c = new b, h = new Array(4), l = new Array(4), u = {}, p = {
                0: 1,
                1: 0,
                2: 2
            }, d = [new b(1, 0, 0), new b(-1, 0, 0), new b(0, 0, 1), new b(0, 0, -1), new b(0, 1, 0), new b(0, -1, 0)], f = [new b(0, 1, 0), new b(0, 1, 0), new b(0, 1, 0), new b(0, 1, 0), new b(0, 0, 1), new b(0, 0, -1)], m = [new R, new R, new R, new R, new R, new R], g = 0; 4 !== g; ++g) {
            var x = 0 != (1 & g),
                w = 0 != (2 & g),
                _ = new xi({
                    depthPacking: 3201,
                    morphTargets: x,
                    skinning: w
                });
            h[g] = _;
            var M = new bi({
                morphTargets: x,
                skinning: w
            });
            l[g] = M
        }
        var S = this;

        function E(e, i, n, r, a, o) {
            var s = e.geometry,
                c = null,
                d = h,
                f = e.customDepthMaterial;
            if (n && (d = l, f = e.customDistanceMaterial), f) c = f;
            else {
                var m = !1;
                i.morphTargets && (s && s.isBufferGeometry ? m = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (m = s.morphTargets && s.morphTargets.length > 0)), e.isSkinnedMesh && !1 === i.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
                var g = 0;
                m && (g |= 1), e.isSkinnedMesh && i.skinning && (g |= 2), c = d[g]
            }
            if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
                var v = c.uuid,
                    y = i.uuid,
                    x = u[v];
                void 0 === x && (x = {}, u[v] = x);
                var b = x[y];
                void 0 === b && (b = c.clone(), x[y] = b), c = b
            }
            return c.visible = i.visible, c.wireframe = i.wireframe, c.side = null != i.shadowSide ? i.shadowSide : p[i.side], c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes, c.clipIntersection = i.clipIntersection, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth = i.linewidth, n && c.isMeshDistanceMaterial && (c.referencePosition.copy(r), c.nearDistance = a, c.farDistance = o), c
        }

        function T(i, r, a, o) {
            if (!1 !== i.visible) {
                if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && i.castShadow && (!i.frustumCulled || n.intersectsObject(i))) {
                    i.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, i.matrixWorld);
                    var s = e.update(i),
                        h = i.material;
                    if (Array.isArray(h))
                        for (var l = s.groups, u = 0, p = l.length; u < p; u++) {
                            var d = l[u],
                                f = h[d.materialIndex];
                            if (f && f.visible) {
                                var m = E(i, f, o, c, a.near, a.far);
                                t.renderBufferDirect(a, null, s, m, i, d)
                            }
                        } else if (h.visible) {
                            m = E(i, h, o, c, a.near, a.far);
                            t.renderBufferDirect(a, null, s, m, i, null)
                        }
                }
                for (var g = i.children, v = 0, y = g.length; v < y; v++) T(g[v], r, a, o)
            }
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (e, i, h) {
            if (!1 !== S.enabled && (!1 !== S.autoUpdate || !1 !== S.needsUpdate) && 0 !== e.length) {
                var l, u = t.state;
                u.setBlending(0), u.buffers.color.setClear(1, 1, 1, 1), u.buffers.depth.setTest(!0), u.setScissorTest(!1);
                for (var p = 0, g = e.length; p < g; p++) {
                    var v = e[p],
                        y = v.shadow,
                        x = v && v.isPointLight;
                    if (void 0 !== y) {
                        var b = y.camera;
                        if (a.copy(y.mapSize), a.min(o), x) {
                            var w = a.x,
                                _ = a.y;
                            m[0].set(2 * w, _, w, _), m[1].set(0, _, w, _), m[2].set(3 * w, _, w, _), m[3].set(w, _, w, _), m[4].set(3 * w, 0, w, _), m[5].set(w, 0, w, _), a.x *= 4, a.y *= 2
                        }
                        if (null === y.map) {
                            var M = {
                                minFilter: 1003,
                                magFilter: 1003,
                                format: 1023
                            };
                            y.map = new C(a.x, a.y, M), y.map.texture.name = v.name + ".shadowMap", b.updateProjectionMatrix()
                        }
                        y.isSpotLightShadow && y.update(v);
                        var E = y.map,
                            L = y.matrix;
                        c.setFromMatrixPosition(v.matrixWorld), b.position.copy(c), x ? (l = 6, L.makeTranslation(-c.x, -c.y, -c.z)) : (l = 1, s.setFromMatrixPosition(v.target.matrixWorld), b.lookAt(s), b.updateMatrixWorld(), L.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), L.multiply(b.projectionMatrix), L.multiply(b.matrixWorldInverse)), t.setRenderTarget(E), t.clear();
                        for (var A = 0; A < l; A++) {
                            if (x) {
                                s.copy(b.position), s.add(d[A]), b.up.copy(f[A]), b.lookAt(s), b.updateMatrixWorld();
                                var P = m[A];
                                u.viewport(P)
                            }
                            r.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse), n.setFromMatrix(r), T(i, h, b, x)
                        }
                    } else console.warn("THREE.WebGLShadowMap:", v, "has no shadow.")
                }
                S.needsUpdate = !1
            }
        }
    }

    function _i(t, e, i, n) {
        var r = new function () {
                var e = !1,
                    i = new R,
                    n = null,
                    r = new R(0, 0, 0, 0);
                return {
                    setMask: function (i) {
                        n === i || e || (t.colorMask(i, i, i, i), n = i)
                    },
                    setLocked: function (t) {
                        e = t
                    },
                    setClear: function (e, n, a, o, s) {
                        !0 === s && (e *= o, n *= o, a *= o), i.set(e, n, a, o), !1 === r.equals(i) && (t.clearColor(e, n, a, o), r.copy(i))
                    },
                    reset: function () {
                        e = !1, n = null, r.set(-1, 0, 0, 0)
                    }
                }
            },
            a = new function () {
                var e = !1,
                    i = null,
                    n = null,
                    r = null;
                return {
                    setTest: function (t) {
                        t ? F(2929) : H(2929)
                    },
                    setMask: function (n) {
                        i === n || e || (t.depthMask(n), i = n)
                    },
                    setFunc: function (e) {
                        if (n !== e) {
                            if (e) switch (e) {
                            case 0:
                                t.depthFunc(512);
                                break;
                            case 1:
                                t.depthFunc(519);
                                break;
                            case 2:
                                t.depthFunc(513);
                                break;
                            case 3:
                                t.depthFunc(515);
                                break;
                            case 4:
                                t.depthFunc(514);
                                break;
                            case 5:
                                t.depthFunc(518);
                                break;
                            case 6:
                                t.depthFunc(516);
                                break;
                            case 7:
                                t.depthFunc(517);
                                break;
                            default:
                                t.depthFunc(515)
                            } else t.depthFunc(515);
                            n = e
                        }
                    },
                    setLocked: function (t) {
                        e = t
                    },
                    setClear: function (e) {
                        r !== e && (t.clearDepth(e), r = e)
                    },
                    reset: function () {
                        e = !1, i = null, n = null, r = null
                    }
                }
            },
            o = new function () {
                var e = !1,
                    i = null,
                    n = null,
                    r = null,
                    a = null,
                    o = null,
                    s = null,
                    c = null,
                    h = null;
                return {
                    setTest: function (t) {
                        t ? F(2960) : H(2960)
                    },
                    setMask: function (n) {
                        i === n || e || (t.stencilMask(n), i = n)
                    },
                    setFunc: function (e, i, o) {
                        n === e && r === i && a === o || (t.stencilFunc(e, i, o), n = e, r = i, a = o)
                    },
                    setOp: function (e, i, n) {
                        o === e && s === i && c === n || (t.stencilOp(e, i, n), o = e, s = i, c = n)
                    },
                    setLocked: function (t) {
                        e = t
                    },
                    setClear: function (e) {
                        h !== e && (t.clearStencil(e), h = e)
                    },
                    reset: function () {
                        e = !1, i = null, n = null, r = null, a = null, o = null, s = null, c = null, h = null
                    }
                }
            },
            s = t.getParameter(34921),
            c = new Uint8Array(s),
            h = new Uint8Array(s),
            l = new Uint8Array(s),
            u = {},
            p = null,
            d = null,
            f = null,
            m = null,
            g = null,
            v = null,
            y = null,
            x = null,
            b = null,
            w = null,
            _ = !1,
            M = null,
            S = null,
            E = null,
            T = null,
            L = null,
            A = t.getParameter(35661),
            P = !1,
            C = 0,
            O = t.getParameter(7938); - 1 !== O.indexOf("WebGL") ? (C = parseFloat(/^WebGL\ ([0-9])/.exec(O)[1]), P = C >= 1) : -1 !== O.indexOf("OpenGL ES") && (C = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(O)[1]), P = C >= 2);
        var I = null,
            D = {},
            z = new R,
            N = new R;

        function B(e, i, n) {
            var r = new Uint8Array(4),
                a = t.createTexture();
            t.bindTexture(e, a), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
            for (var o = 0; o < n; o++) t.texImage2D(i + o, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return a
        }
        var U = {};

        function G(i, r) {
            (c[i] = 1, 0 === h[i] && (t.enableVertexAttribArray(i), h[i] = 1), l[i] !== r) && ((n.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), l[i] = r)
        }

        function F(e) {
            !0 !== u[e] && (t.enable(e), u[e] = !0)
        }

        function H(e) {
            !1 !== u[e] && (t.disable(e), u[e] = !1)
        }

        function k(e, n, r, a, o, s, c, h) {
            if (0 !== e) {
                if (f || (F(3042), f = !0), 5 === e) o = o || n, s = s || r, c = c || a, n === g && o === x || (t.blendEquationSeparate(i.convert(n), i.convert(o)), g = n, x = o), r === v && a === y && s === b && c === w || (t.blendFuncSeparate(i.convert(r), i.convert(a), i.convert(s), i.convert(c)), v = r, y = a, b = s, w = c), m = e, _ = null;
                else if (e !== m || h !== _) {
                    if (100 === g && 100 === x || (t.blendEquation(32774), g = 100, x = 100), h) switch (e) {
                    case 1:
                        t.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case 2:
                        t.blendFunc(1, 1);
                        break;
                    case 3:
                        t.blendFuncSeparate(0, 0, 769, 771);
                        break;
                    case 4:
                        t.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", e)
                    } else switch (e) {
                    case 1:
                        t.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case 2:
                        t.blendFunc(770, 1);
                        break;
                    case 3:
                        t.blendFunc(0, 769);
                        break;
                    case 4:
                        t.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", e)
                    }
                    v = null, y = null, b = null, w = null, m = e, _ = h
                }
            } else f && (H(3042), f = !1)
        }

        function V(e) {
            M !== e && (e ? t.frontFace(2304) : t.frontFace(2305), M = e)
        }

        function j(e) {
            0 !== e ? (F(2884), e !== S && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : H(2884), S = e
        }

        function W(e, i, n) {
            e ? (F(32823), T === i && L === n || (t.polygonOffset(i, n), T = i, L = n)) : H(32823)
        }

        function q(e) {
            void 0 === e && (e = 33984 + A - 1), I !== e && (t.activeTexture(e), I = e)
        }
        return U[3553] = B(3553, 3553, 1), U[34067] = B(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), F(2929), a.setFunc(3), V(!1), j(1), F(2884), k(0), {
            buffers: {
                color: r,
                depth: a,
                stencil: o
            },
            initAttributes: function () {
                for (var t = 0, e = c.length; t < e; t++) c[t] = 0
            },
            enableAttribute: function (t) {
                G(t, 0)
            },
            enableAttributeAndDivisor: G,
            disableUnusedAttributes: function () {
                for (var e = 0, i = h.length; e !== i; ++e) h[e] !== c[e] && (t.disableVertexAttribArray(e), h[e] = 0)
            },
            enable: F,
            disable: H,
            getCompressedTextureFormats: function () {
                if (null === p && (p = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1") || e.get("WEBGL_compressed_texture_astc")))
                    for (var i = t.getParameter(34467), n = 0; n < i.length; n++) p.push(i[n]);
                return p
            },
            useProgram: function (e) {
                return d !== e && (t.useProgram(e), d = e, !0)
            },
            setBlending: k,
            setMaterial: function (t, e) {
                2 === t.side ? H(2884) : F(2884);
                var i = 1 === t.side;
                e && (i = !i), V(i), 1 === t.blending && !1 === t.transparent ? k(0) : k(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), r.setMask(t.colorWrite), W(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
            },
            setFlipSided: V,
            setCullFace: j,
            setLineWidth: function (e) {
                e !== E && (P && t.lineWidth(e), E = e)
            },
            setPolygonOffset: W,
            setScissorTest: function (t) {
                t ? F(3089) : H(3089)
            },
            activeTexture: q,
            bindTexture: function (e, i) {
                null === I && q();
                var n = D[I];
                void 0 === n && (n = {
                    type: void 0,
                    texture: void 0
                }, D[I] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || U[e]), n.type = e, n.texture = i)
            },
            compressedTexImage2D: function () {
                try {
                    t.compressedTexImage2D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage2D: function () {
                try {
                    t.texImage2D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage3D: function () {
                try {
                    t.texImage3D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            scissor: function (e) {
                !1 === z.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), z.copy(e))
            },
            viewport: function (e) {
                !1 === N.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), N.copy(e))
            },
            reset: function () {
                for (var e = 0; e < h.length; e++) 1 === h[e] && (t.disableVertexAttribArray(e), h[e] = 0);
                u = {}, p = null, I = null, D = {}, d = null, m = null, M = null, S = null, r.reset(), a.reset(), o.reset()
            }
        }
    }

    function Mi(t, e, i, n, r, a, o) {
        var s, c = {};

        function h(t, e, i, n) {
            var r = 1;
            if ((t.width > n || t.height > n) && (r = n / Math.max(t.width, t.height)), r < 1 || !0 === e) {
                if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap) {
                    void 0 === s && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"));
                    var a = i ? document.createElementNS("http://www.w3.org/1999/xhtml", "canvas") : s,
                        o = e ? g.floorPowerOfTwo : Math.floor;
                    return a.width = o(r * t.width), a.height = o(r * t.height), a.getContext("2d").drawImage(t, 0, 0, a.width, a.height), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + a.width + "x" + a.height + ")."), a
                }
                return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
            }
            return t
        }

        function l(t) {
            return g.isPowerOfTwo(t.width) && g.isPowerOfTwo(t.height)
        }

        function u(t, e) {
            return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter
        }

        function p(e, i, r, a) {
            t.generateMipmap(e), n.get(i).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E
        }

        function d(t, i) {
            if (!r.isWebGL2) return t;
            var n = t;
            return 6403 === t && (5126 === i && (n = 33326), 5131 === i && (n = 33325), 5121 === i && (n = 33321)), 6407 === t && (5126 === i && (n = 34837), 5131 === i && (n = 34843), 5121 === i && (n = 32849)), 6408 === t && (5126 === i && (n = 34836), 5131 === i && (n = 34842), 5121 === i && (n = 32856)), 33325 === n || 33326 === n || 34842 === n || 34836 === n ? e.get("EXT_color_buffer_float") : 34843 !== n && 34837 !== n || console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."), n
        }

        function f(t) {
            return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729
        }

        function m(e) {
            var i = e.target;
            i.removeEventListener("dispose", m),
                function (e) {
                    var i = n.get(e);
                    if (e.image && i.__image__webglTextureCube) t.deleteTexture(i.__image__webglTextureCube);
                    else {
                        if (void 0 === i.__webglInit) return;
                        t.deleteTexture(i.__webglTexture)
                    }
                    n.remove(e)
                }(i), i.isVideoTexture && delete c[i.id], o.memory.textures--
        }

        function v(e) {
            var i = e.target;
            i.removeEventListener("dispose", v),
                function (e) {
                    var i = n.get(e),
                        r = n.get(e.texture);
                    if (!e) return;
                    void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture);
                    e.depthTexture && e.depthTexture.dispose();
                    if (e.isWebGLRenderTargetCube)
                        for (var a = 0; a < 6; a++) t.deleteFramebuffer(i.__webglFramebuffer[a]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[a]);
                    else t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer);
                    n.remove(e.texture), n.remove(e)
                }(i), o.memory.textures--
        }

        function y(t, e) {
            var r = n.get(t);
            if (t.isVideoTexture && function (t) {
                    var e = t.id,
                        i = o.render.frame;
                    c[e] !== i && (c[e] = i, t.update())
                }(t), t.version > 0 && r.__version !== t.version) {
                var a = t.image;
                if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== a.complete) return void b(r, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            }
            i.activeTexture(33984 + e), i.bindTexture(3553, r.__webglTexture)
        }

        function x(i, o, s) {
            var c;
            if (s ? (t.texParameteri(i, 10242, a.convert(o.wrapS)), t.texParameteri(i, 10243, a.convert(o.wrapT)), t.texParameteri(i, 10240, a.convert(o.magFilter)), t.texParameteri(i, 10241, a.convert(o.minFilter))) : (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071), 1001 === o.wrapS && 1001 === o.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(i, 10240, f(o.magFilter)), t.texParameteri(i, 10241, f(o.minFilter)), 1003 !== o.minFilter && 1006 !== o.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), c = e.get("EXT_texture_filter_anisotropic")) {
                if (1015 === o.type && null === e.get("OES_texture_float_linear")) return;
                if (1016 === o.type && null === (r.isWebGL2 || e.get("OES_texture_half_float_linear"))) return;
                (o.anisotropy > 1 || n.get(o).__currentAnisotropy) && (t.texParameterf(i, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), n.get(o).__currentAnisotropy = o.anisotropy)
            }
        }

        function b(e, n, s) {
            var c;
            c = n.isDataTexture3D ? 32879 : 3553, void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", m), e.__webglTexture = t.createTexture(), o.memory.textures++), i.activeTexture(33984 + s), i.bindTexture(c, e.__webglTexture), t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment);
            var f = function (t) {
                    return !r.isWebGL2 && (1001 !== t.wrapS || 1001 !== t.wrapT || 1003 !== t.minFilter && 1006 !== t.minFilter)
                }(n) && !1 === l(n.image),
                g = h(n.image, f, !1, r.maxTextureSize),
                v = l(g),
                y = a.convert(n.format),
                b = a.convert(n.type),
                w = d(y, b);
            x(c, n, v);
            var _, M = n.mipmaps;
            if (n.isDepthTexture) {
                if (w = 6402, 1015 === n.type) {
                    if (!r.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
                    w = 36012
                } else r.isWebGL2 && (w = 33189);
                1026 === n.format && 6402 === w && 1012 !== n.type && 1014 !== n.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = 1012, b = a.convert(n.type)), 1027 === n.format && (w = 34041, 1020 !== n.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = 1020, b = a.convert(n.type))), i.texImage2D(3553, 0, w, g.width, g.height, 0, y, b, null)
            } else if (n.isDataTexture) {
                if (M.length > 0 && v) {
                    for (var S = 0, E = M.length; S < E; S++) _ = M[S], i.texImage2D(3553, S, w, _.width, _.height, 0, y, b, _.data);
                    n.generateMipmaps = !1, e.__maxMipLevel = M.length - 1
                } else i.texImage2D(3553, 0, w, g.width, g.height, 0, y, b, g.data), e.__maxMipLevel = 0;
                n.isCfxTexture && (console.log("f?"), t.texParameterf(3553, 10243, 33071), t.texParameterf(3553, 10243, 33648), t.texParameterf(3553, 10243, 10497))
            } else if (n.isCompressedTexture) {
                for (S = 0, E = M.length; S < E; S++) _ = M[S], 1023 !== n.format && 1022 !== n.format ? i.getCompressedTextureFormats().indexOf(y) > -1 ? i.compressedTexImage2D(3553, S, w, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(3553, S, w, _.width, _.height, 0, y, b, _.data);
                e.__maxMipLevel = M.length - 1
            } else if (n.isDataTexture3D) i.texImage3D(32879, 0, w, g.width, g.height, g.depth, 0, y, b, g.data), e.__maxMipLevel = 0;
            else if (M.length > 0 && v) {
                for (S = 0, E = M.length; S < E; S++) _ = M[S], i.texImage2D(3553, S, w, y, b, _);
                n.generateMipmaps = !1, e.__maxMipLevel = M.length - 1
            } else i.texImage2D(3553, 0, w, y, b, g), e.__maxMipLevel = 0;
            u(n, v) && p(3553, n, g.width, g.height), e.__version = n.version, n.onUpdate && n.onUpdate(n)
        }

        function w(e, r, o, s) {
            var c = a.convert(r.texture.format),
                h = a.convert(r.texture.type),
                l = d(c, h);
            i.texImage2D(s, 0, l, r.width, r.height, 0, c, h, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null)
        }

        function _(e, i, n) {
            if (t.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer) {
                if (n) {
                    var r = S(i);
                    t.renderbufferStorageMultisample(36161, r, 33189, i.width, i.height)
                } else t.renderbufferStorage(36161, 33189, i.width, i.height);
                t.framebufferRenderbuffer(36160, 36096, 36161, e)
            } else if (i.depthBuffer && i.stencilBuffer) {
                if (n) {
                    r = S(i);
                    t.renderbufferStorageMultisample(36161, r, 34041, i.width, i.height)
                } else t.renderbufferStorage(36161, 34041, i.width, i.height);
                t.framebufferRenderbuffer(36160, 33306, 36161, e)
            } else {
                var o = d(a.convert(i.texture.format), a.convert(i.texture.type));
                if (n) {
                    r = S(i);
                    t.renderbufferStorageMultisample(36161, r, o, i.width, i.height)
                } else t.renderbufferStorage(36161, o, i.width, i.height)
            }
            t.bindRenderbuffer(36161, null)
        }

        function M(e) {
            var i = n.get(e),
                r = !0 === e.isWebGLRenderTargetCube;
            if (e.depthTexture) {
                if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                ! function (e, i) {
                    if (i && i.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
                    if (t.bindFramebuffer(36160, e), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), y(i.depthTexture, 0);
                    var r = n.get(i.depthTexture).__webglTexture;
                    if (1026 === i.depthTexture.format) t.framebufferTexture2D(36160, 36096, 3553, r, 0);
                    else {
                        if (1027 !== i.depthTexture.format) throw new Error("Unknown depthTexture format");
                        t.framebufferTexture2D(36160, 33306, 3553, r, 0)
                    }
                }(i.__webglFramebuffer, e)
            } else if (r) {
                i.__webglDepthbuffer = [];
                for (var a = 0; a < 6; a++) t.bindFramebuffer(36160, i.__webglFramebuffer[a]), i.__webglDepthbuffer[a] = t.createRenderbuffer(), _(i.__webglDepthbuffer[a], e)
            } else t.bindFramebuffer(36160, i.__webglFramebuffer), i.__webglDepthbuffer = t.createRenderbuffer(), _(i.__webglDepthbuffer, e);
            t.bindFramebuffer(36160, null)
        }

        function S(t) {
            return r.isWebGL2 && t.isWebGLMultisampleRenderTarget ? Math.min(r.maxSamples, t.samples) : 0
        }
        this.setTexture2D = y, this.setTexture3D = function (t, e) {
            var r = n.get(t);
            t.version > 0 && r.__version !== t.version ? b(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(32879, r.__webglTexture))
        }, this.setTextureCube = function (e, s) {
            var c = n.get(e);
            if (6 === e.image.length)
                if (e.version > 0 && c.__version !== e.version) {
                    c.__image__webglTextureCube || (e.addEventListener("dispose", m), c.__image__webglTextureCube = t.createTexture(), o.memory.textures++), i.activeTexture(33984 + s), i.bindTexture(34067, c.__image__webglTextureCube), t.pixelStorei(37440, e.flipY);
                    for (var f = e && e.isCompressedTexture, g = e.image[0] && e.image[0].isDataTexture, v = [], y = 0; y < 6; y++) v[y] = f || g ? g ? e.image[y].image : e.image[y] : h(e.image[y], !1, !0, r.maxCubemapSize);
                    var b = v[0],
                        w = l(b),
                        _ = a.convert(e.format),
                        M = a.convert(e.type),
                        S = d(_, M);
                    x(34067, e, w);
                    for (y = 0; y < 6; y++)
                        if (f)
                            for (var E, T = v[y].mipmaps, L = 0, A = T.length; L < A; L++) E = T[L], 1023 !== e.format && 1022 !== e.format ? i.getCompressedTextureFormats().indexOf(_) > -1 ? i.compressedTexImage2D(34069 + y, L, S, E.width, E.height, 0, E.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(34069 + y, L, S, E.width, E.height, 0, _, M, E.data);
                        else g ? i.texImage2D(34069 + y, 0, S, v[y].width, v[y].height, 0, _, M, v[y].data) : i.texImage2D(34069 + y, 0, S, _, M, v[y]);
                    c.__maxMipLevel = f ? T.length - 1 : 0, u(e, w) && p(34067, e, b.width, b.height), c.__version = e.version, e.onUpdate && e.onUpdate(e)
                } else i.activeTexture(33984 + s), i.bindTexture(34067, c.__image__webglTextureCube)
        }, this.setTextureCubeDynamic = function (t, e) {
            i.activeTexture(33984 + e), i.bindTexture(34067, n.get(t).__webglTexture)
        }, this.setupRenderTarget = function (e) {
            var s = n.get(e),
                c = n.get(e.texture);
            e.addEventListener("dispose", v), c.__webglTexture = t.createTexture(), o.memory.textures++;
            var h = !0 === e.isWebGLRenderTargetCube,
                f = !0 === e.isWebGLMultisampleRenderTarget,
                m = l(e);
            if (h) {
                s.__webglFramebuffer = [];
                for (var g = 0; g < 6; g++) s.__webglFramebuffer[g] = t.createFramebuffer()
            } else if (s.__webglFramebuffer = t.createFramebuffer(), f)
                if (r.isWebGL2) {
                    s.__webglMultisampledFramebuffer = t.createFramebuffer(), s.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, s.__webglColorRenderbuffer);
                    var y = d(a.convert(e.texture.format), a.convert(e.texture.type)),
                        b = S(e);
                    t.renderbufferStorageMultisample(36161, b, y, e.width, e.height), t.bindFramebuffer(36160, s.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, s.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (s.__webglDepthRenderbuffer = t.createRenderbuffer(), _(s.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null)
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            if (h) {
                i.bindTexture(34067, c.__webglTexture), x(34067, e.texture, m);
                for (g = 0; g < 6; g++) w(s.__webglFramebuffer[g], e, 36064, 34069 + g);
                u(e.texture, m) && p(34067, e.texture, e.width, e.height), i.bindTexture(34067, null)
            } else i.bindTexture(3553, c.__webglTexture), x(3553, e.texture, m), w(s.__webglFramebuffer, e, 36064, 3553), u(e.texture, m) && p(3553, e.texture, e.width, e.height), i.bindTexture(3553, null);
            e.depthBuffer && M(e)
        }, this.updateRenderTargetMipmap = function (t) {
            var e = t.texture;
            if (u(e, l(t))) {
                var r = t.isWebGLRenderTargetCube ? 34067 : 3553,
                    a = n.get(e).__webglTexture;
                i.bindTexture(r, a), p(r, e, t.width, t.height), i.bindTexture(r, null)
            }
        }, this.updateMultisampleRenderTarget = function (e) {
            if (e.isWebGLMultisampleRenderTarget)
                if (r.isWebGL2) {
                    var i = n.get(e);
                    t.bindFramebuffer(36008, i.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, i.__webglFramebuffer);
                    var a = e.width,
                        o = e.height,
                        s = 16384;
                    e.depthBuffer && (s |= 256), e.stencilBuffer && (s |= 1024), t.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, 9728)
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
        }
    }

    function Si(t, e, i) {
        return {
            convert: function (t) {
                var n;
                if (1e3 === t) return 10497;
                if (1001 === t) return 33071;
                if (1002 === t) return 33648;
                if (1003 === t) return 9728;
                if (1004 === t) return 9984;
                if (1005 === t) return 9986;
                if (1006 === t) return 9729;
                if (1007 === t) return 9985;
                if (1008 === t) return 9987;
                if (1009 === t) return 5121;
                if (1017 === t) return 32819;
                if (1018 === t) return 32820;
                if (1019 === t) return 33635;
                if (1010 === t) return 5120;
                if (1011 === t) return 5122;
                if (1012 === t) return 5123;
                if (1013 === t) return 5124;
                if (1014 === t) return 5125;
                if (1015 === t) return 5126;
                if (1016 === t) {
                    if (i.isWebGL2) return 5131;
                    if (null !== (n = e.get("OES_texture_half_float"))) return n.HALF_FLOAT_OES
                }
                if (1021 === t) return 6406;
                if (1022 === t) return 6407;
                if (1023 === t) return 6408;
                if (1024 === t) return 6409;
                if (1025 === t) return 6410;
                if (1026 === t) return 6402;
                if (1027 === t) return 34041;
                if (1028 === t) return 6403;
                if (100 === t) return 32774;
                if (101 === t) return 32778;
                if (102 === t) return 32779;
                if (200 === t) return 0;
                if (201 === t) return 1;
                if (202 === t) return 768;
                if (203 === t) return 769;
                if (204 === t) return 770;
                if (205 === t) return 771;
                if (206 === t) return 772;
                if (207 === t) return 773;
                if (208 === t) return 774;
                if (209 === t) return 775;
                if (210 === t) return 776;
                if ((33776 === t || 33777 === t || 33778 === t || 33779 === t) && null !== (n = e.get("WEBGL_compressed_texture_s3tc"))) {
                    if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if ((35840 === t || 35841 === t || 35842 === t || 35843 === t) && null !== (n = e.get("WEBGL_compressed_texture_pvrtc"))) {
                    if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (36196 === t && null !== (n = e.get("WEBGL_compressed_texture_etc1"))) return n.COMPRESSED_RGB_ETC1_WEBGL;
                if ((37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t) && null !== (n = e.get("WEBGL_compressed_texture_astc"))) return t;
                if (103 === t || 104 === t) {
                    if (i.isWebGL2) {
                        if (103 === t) return 32775;
                        if (104 === t) return 32776
                    }
                    if (null !== (n = e.get("EXT_blend_minmax"))) {
                        if (103 === t) return n.MIN_EXT;
                        if (104 === t) return n.MAX_EXT
                    }
                }
                if (1020 === t) {
                    if (i.isWebGL2) return 34042;
                    if (null !== (n = e.get("WEBGL_depth_texture"))) return n.UNSIGNED_INT_24_8_WEBGL
                }
                return 0
            }
        }
    }

    function Ei() {
        ot.call(this), this.type = "Group"
    }

    function Ti() {
        ot.call(this), this.type = "Camera", this.matrixWorldInverse = new y, this.projectionMatrix = new y, this.projectionMatrixInverse = new y
    }

    function Li(t, e, i, n) {
        Ti.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    function Ai(t) {
        Li.call(this), this.cameras = t || []
    }
    xi.prototype = Object.create(kt.prototype), xi.prototype.constructor = xi, xi.prototype.isMeshDepthMaterial = !0, xi.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }, bi.prototype = Object.create(kt.prototype), bi.prototype.constructor = bi, bi.prototype.isMeshDistanceMaterial = !0, bi.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
    }, Ei.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: Ei,
        isGroup: !0
    }), Ti.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: Ti,
        isCamera: !0,
        copy: function (t, e) {
            return ot.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
        },
        getWorldDirection: function (t) {
            void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new b), this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize()
        },
        updateMatrixWorld: function (t) {
            ot.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function () {
            return (new this.constructor).copy(this)
        }
    }), Li.prototype = Object.assign(Object.create(Ti.prototype), {
        constructor: Li,
        isPerspectiveCamera: !0,
        copy: function (t, e) {
            return Ti.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        },
        setFocalLength: function (t) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * g.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
        },
        getFocalLength: function () {
            var t = Math.tan(.5 * g.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function () {
            return 2 * g.RAD2DEG * Math.atan(Math.tan(.5 * g.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function () {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function () {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function (t, e, i, n, r, a) {
            this.aspect = t / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        },
        clearViewOffset: function () {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function () {
            var t = this.near,
                e = t * Math.tan(.5 * g.DEG2RAD * this.fov) / this.zoom,
                i = 2 * e,
                n = this.aspect * i,
                r = -.5 * n,
                a = this.view;
            if (null !== this.view && this.view.enabled) {
                var o = a.fullWidth,
                    s = a.fullHeight;
                r += a.offsetX * n / o, e -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s
            }
            var c = this.filmOffset;
            0 !== c && (r += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function (t) {
            var e = ot.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
    }), Ai.prototype = Object.assign(Object.create(Li.prototype), {
        constructor: Ai,
        isArrayCamera: !0
    });
    var Pi, Ri, Ci, Oi, Ii, Di, zi = new b,
        Ni = new b;

    function Bi(t, e, i) {
        zi.setFromMatrixPosition(e.matrixWorld), Ni.setFromMatrixPosition(i.matrixWorld);
        var n = zi.distanceTo(Ni),
            r = e.projectionMatrix.elements,
            a = i.projectionMatrix.elements,
            o = r[14] / (r[10] - 1),
            s = r[14] / (r[10] + 1),
            c = (r[9] + 1) / r[5],
            h = (r[9] - 1) / r[5],
            l = (r[8] - 1) / r[0],
            u = (a[8] + 1) / a[0],
            p = o * l,
            d = o * u,
            f = n / (-l + u),
            m = f * -l;
        e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.getInverse(t.matrixWorld);
        var g = o + f,
            v = s + f,
            y = p - m,
            x = d + (n - m),
            b = c * s / v * g,
            w = h * s / v * g;
        t.projectionMatrix.makePerspective(y, x, b, w, g, v)
    }

    function Ui(t) {
        var e = this,
            i = null,
            n = null,
            r = null,
            a = [],
            o = new y,
            s = new y,
            c = 1,
            h = "stage";
        "undefined" != typeof window && "VRFrameData" in window && (n = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", _, !1));
        var l = new y,
            u = new x,
            p = new b,
            d = new Li;
        d.bounds = new R(0, 0, .5, 1), d.layers.enable(1);
        var f = new Li;
        f.bounds = new R(.5, 0, .5, 1), f.layers.enable(2);
        var m, g, v = new Ai([d, f]);

        function w() {
            return null !== i && !0 === i.isPresenting
        }

        function _() {
            if (w()) {
                var n = i.getEyeParameters("left"),
                    r = n.renderWidth * c,
                    a = n.renderHeight * c;
                g = t.getPixelRatio(), m = t.getSize(), t.setDrawingBufferSize(2 * r, a, 1), E.start()
            } else e.enabled && t.setDrawingBufferSize(m.width, m.height, g), E.stop()
        }
        v.layers.enable(1), v.layers.enable(2);
        var M = [];

        function S(t) {
            for (var e = navigator.getGamepads && navigator.getGamepads(), i = 0, n = 0, r = e.length; i < r; i++) {
                var a = e[i];
                if (a && ("Daydream Controller" === a.id || "Gear VR Controller" === a.id || "Oculus Go Controller" === a.id || "OpenVR Gamepad" === a.id || a.id.startsWith("Oculus Touch") || a.id.startsWith("Spatial Controller"))) {
                    if (n === t) return a;
                    n++
                }
            }
        }
        this.enabled = !1, this.getController = function (t) {
            var e = a[t];
            return void 0 === e && ((e = new Ei).matrixAutoUpdate = !1, e.visible = !1, a[t] = e), e
        }, this.getDevice = function () {
            return i
        }, this.setDevice = function (t) {
            void 0 !== t && (i = t), E.setContext(t)
        }, this.setFramebufferScaleFactor = function (t) {
            c = t
        }, this.setFrameOfReferenceType = function (t) {
            h = t
        }, this.setPoseTarget = function (t) {
            void 0 !== t && (r = t)
        }, this.getCamera = function (t) {
            var e = "stage" === h ? 1.6 : 0;
            if (null === i) return t.position.set(0, e, 0), t;
            if (i.depthNear = t.near, i.depthFar = t.far, i.getFrameData(n), "stage" === h) {
                var c = i.stageParameters;
                c ? o.fromArray(c.sittingToStandingTransform) : o.makeTranslation(0, e, 0)
            }
            var m = n.pose,
                g = null !== r ? r : t;
            if (g.matrix.copy(o), g.matrix.decompose(g.position, g.quaternion, g.scale), null !== m.orientation && (u.fromArray(m.orientation), g.quaternion.multiply(u)), null !== m.position && (u.setFromRotationMatrix(o), p.fromArray(m.position), p.applyQuaternion(u), g.position.add(p)), g.updateMatrixWorld(), !1 === i.isPresenting) return t;
            d.near = t.near, f.near = t.near, d.far = t.far, f.far = t.far, d.matrixWorldInverse.fromArray(n.leftViewMatrix), f.matrixWorldInverse.fromArray(n.rightViewMatrix), s.getInverse(o), "stage" === h && (d.matrixWorldInverse.multiply(s), f.matrixWorldInverse.multiply(s));
            var y = g.parent;
            null !== y && (l.getInverse(y.matrixWorld), d.matrixWorldInverse.multiply(l), f.matrixWorldInverse.multiply(l)), d.matrixWorld.getInverse(d.matrixWorldInverse), f.matrixWorld.getInverse(f.matrixWorldInverse), d.projectionMatrix.fromArray(n.leftProjectionMatrix), f.projectionMatrix.fromArray(n.rightProjectionMatrix), Bi(v, d, f);
            var x = i.getLayers();
            if (x.length) {
                var b = x[0];
                null !== b.leftBounds && 4 === b.leftBounds.length && d.bounds.fromArray(b.leftBounds), null !== b.rightBounds && 4 === b.rightBounds.length && f.bounds.fromArray(b.rightBounds)
            }
            return function () {
                for (var t = 0; t < a.length; t++) {
                    var e = a[t],
                        i = S(t);
                    if (void 0 !== i && void 0 !== i.pose) {
                        if (null === i.pose) return;
                        var n = i.pose;
                        !1 === n.hasPosition && e.position.set(.2, -.6, -.05), null !== n.position && e.position.fromArray(n.position), null !== n.orientation && e.quaternion.fromArray(n.orientation), e.matrix.compose(e.position, e.quaternion, e.scale), e.matrix.premultiply(o), e.matrix.decompose(e.position, e.quaternion, e.scale), e.matrixWorldNeedsUpdate = !0, e.visible = !0;
                        var r = "Daydream Controller" === i.id ? 0 : 1;
                        M[t] !== i.buttons[r].pressed && (M[t] = i.buttons[r].pressed, !0 === M[t] ? e.dispatchEvent({
                            type: "selectstart"
                        }) : (e.dispatchEvent({
                            type: "selectend"
                        }), e.dispatchEvent({
                            type: "select"
                        })))
                    } else e.visible = !1
                }
            }(), v
        }, this.getStandingMatrix = function () {
            return o
        }, this.isPresenting = w;
        var E = new Z;
        this.setAnimationLoop = function (t) {
            E.setAnimationLoop(t)
        }, this.submitFrame = function () {
            w() && i.submitFrame()
        }, this.dispose = function () {
            "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", _)
        }
    }

    function Gi(t) {
        var e = t.context,
            i = null,
            n = null,
            r = 1,
            a = null,
            o = "stage",
            s = null,
            c = [],
            h = [];

        function l() {
            return null !== n && null !== a
        }
        var u = new Li;
        u.layers.enable(1), u.viewport = new R;
        var p = new Li;
        p.layers.enable(2), p.viewport = new R;
        var d = new Ai([u, p]);

        function f(t) {
            var e = c[h.indexOf(t.inputSource)];
            e && e.dispatchEvent({
                type: t.type
            })
        }

        function m() {
            t.setFramebuffer(null), y.stop()
        }

        function g(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld)
        }
        d.layers.enable(1), d.layers.enable(2), this.enabled = !1, this.getController = function (t) {
            var e = c[t];
            return void 0 === e && ((e = new Ei).matrixAutoUpdate = !1, e.visible = !1, c[t] = e), e
        }, this.getDevice = function () {
            return i
        }, this.setDevice = function (t) {
            void 0 !== t && (i = t), t instanceof XRDevice && e.setCompatibleXRDevice(t)
        }, this.setFramebufferScaleFactor = function (t) {
            r = t
        }, this.setFrameOfReferenceType = function (t) {
            o = t
        }, this.setSession = function (i) {
            null !== (n = i) && (n.addEventListener("select", f), n.addEventListener("selectstart", f), n.addEventListener("selectend", f), n.addEventListener("end", m), n.baseLayer = new XRWebGLLayer(n, e, {
                framebufferScaleFactor: r
            }), n.requestFrameOfReference(o).then((function (e) {
                a = e, t.setFramebuffer(n.baseLayer.framebuffer), y.setContext(n), y.start()
            })), h = n.getInputSources(), n.addEventListener("inputsourceschange", (function () {
                h = n.getInputSources(), console.log(h);
                for (var t = 0; t < c.length; t++) {
                    c[t].userData.inputSource = h[t]
                }
            })))
        }, this.getCamera = function (t) {
            if (l()) {
                var e = t.parent,
                    i = d.cameras;
                g(d, e);
                for (var n = 0; n < i.length; n++) g(i[n], e);
                t.matrixWorld.copy(d.matrixWorld);
                for (var r = t.children, a = (n = 0, r.length); n < a; n++) r[n].updateMatrixWorld(!0);
                return Bi(d, u, p), d
            }
            return t
        }, this.isPresenting = l;
        var v = null;
        var y = new Z;
        y.setAnimationLoop((function (t, e) {
            if (null !== (s = e.getDevicePose(a)))
                for (var i = n.baseLayer, r = e.views, o = 0; o < r.length; o++) {
                    var l = r[o],
                        u = i.getViewport(l),
                        p = s.getViewMatrix(l),
                        f = d.cameras[o];
                    f.matrix.fromArray(p).getInverse(f.matrix), f.projectionMatrix.fromArray(l.projectionMatrix), f.viewport.set(u.x, u.y, u.width, u.height), 0 === o && d.matrix.copy(f.matrix)
                }
            for (o = 0; o < c.length; o++) {
                var m = c[o],
                    g = h[o];
                if (g) {
                    var y = e.getInputPose(g, a);
                    if (null !== y) {
                        "targetRay" in y ? m.matrix.elements = y.targetRay.transformMatrix : "pointerMatrix" in y && (m.matrix.elements = y.pointerMatrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.visible = !0;
                        continue
                    }
                }
                m.visible = !1
            }
            v && v(t)
        })), this.setAnimationLoop = function (t) {
            v = t
        }, this.dispose = function () {}, this.getStandingMatrix = function () {
            return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4
        }, this.submitFrame = function () {}
    }

    function Fi(t) {
        console.log("THREE.WebGLRenderer", "101dev");
        var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            i = void 0 !== t.context ? t.context : null,
            n = void 0 !== t.alpha && t.alpha,
            r = void 0 === t.depth || t.depth,
            a = void 0 === t.stencil || t.stencil,
            o = void 0 !== t.antialias && t.antialias,
            s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            h = void 0 !== t.powerPreference ? t.powerPreference : "default",
            l = null,
            u = null;
        this.domElement = e, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = 1, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var p, d, f, m, v, x, w, _, M, S, E, T, L, A, P, C, O, I, z = this,
            N = !1,
            B = null,
            G = null,
            H = null,
            k = -1,
            V = {
                geometry: null,
                program: null,
                wireframe: !1
            },
            j = null,
            W = null,
            q = new R,
            X = new R,
            K = null,
            $ = 0,
            tt = e.width,
            et = e.height,
            it = 1,
            nt = new R(0, 0, tt, et),
            rt = new R(0, 0, tt, et),
            at = !1,
            ot = new U,
            st = new Qt,
            ct = !1,
            ht = !1,
            lt = new y,
            ut = new b;

        function pt() {
            return null === G ? it : 1
        }
        try {
            var dt = {
                alpha: n,
                depth: r,
                stencil: a,
                antialias: o,
                premultipliedAlpha: s,
                preserveDrawingBuffer: c,
                powerPreference: h
            };
            if (e.addEventListener("webglcontextlost", vt, !1), e.addEventListener("webglcontextrestored", yt, !1), null === (p = i || e.getContext("webgl", dt) || e.getContext("experimental-webgl", dt))) throw null !== e.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            void 0 === p.getShaderPrecisionFormat && (p.getShaderPrecisionFormat = function () {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            })
        } catch (t) {
            console.error("THREE.WebGLRenderer: " + t.message)
        }

        function ft() {
            d = new Kt(p), (f = new Zt(p, d, t)).isWebGL2 || (d.get("WEBGL_depth_texture"), d.get("OES_texture_float"), d.get("OES_texture_half_float"), d.get("OES_texture_half_float_linear"), d.get("OES_standard_derivatives"), d.get("OES_element_index_uint"), d.get("ANGLE_instanced_arrays")), d.get("OES_texture_float_linear"), I = new Si(p, d, f), (m = new _i(p, d, I, f)).scissor(X.copy(rt).multiplyScalar(it)), m.viewport(q.copy(nt).multiplyScalar(it)), v = new ee(p), x = new hi, w = new Mi(p, d, m, x, f, I, v), _ = new Q(p), M = new $t(p, _, v), S = new re(M, v), P = new ne(p), E = new ci(z, d, f), T = new di, L = new yi, A = new Yt(z, m, S, s), C = new Jt(p, d, v, f), O = new te(p, d, v, f), v.programs = E.programs, z.context = p, z.capabilities = f, z.extensions = d, z.properties = x, z.renderLists = T, z.state = m, z.info = v
        }
        ft();
        var mt = null;
        "undefined" != typeof navigator && (mt = "xr" in navigator ? new Gi(z) : new Ui(z)), this.vr = mt;
        var gt = new wi(z, S, f.maxTextureSize);

        function vt(t) {
            t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), N = !0
        }

        function yt() {
            console.log("THREE.WebGLRenderer: Context Restored."), N = !1, ft()
        }

        function xt(t) {
            var e = t.target;
            e.removeEventListener("dispose", xt),
                function (t) {
                    bt(t), x.remove(t)
                }(e)
        }

        function bt(t) {
            var e = x.get(t).program;
            t.program = void 0, void 0 !== e && E.releaseProgram(e)
        }
        this.shadowMap = gt, this.getContext = function () {
            return p
        }, this.getContextAttributes = function () {
            return p.getContextAttributes()
        }, this.forceContextLoss = function () {
            var t = d.get("WEBGL_lose_context");
            t && t.loseContext()
        }, this.forceContextRestore = function () {
            var t = d.get("WEBGL_lose_context");
            t && t.restoreContext()
        }, this.getPixelRatio = function () {
            return it
        }, this.setPixelRatio = function (t) {
            void 0 !== t && (it = t, this.setSize(tt, et, !1))
        }, this.getSize = function () {
            return {
                width: tt,
                height: et
            }
        }, this.setSize = function (t, i, n) {
            mt.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (tt = t, et = i, e.width = t * it, e.height = i * it, !1 !== n && (e.style.width = t + "px", e.style.height = i + "px"), this.setViewport(0, 0, t, i))
        }, this.getDrawingBufferSize = function () {
            return {
                width: tt * it,
                height: et * it
            }
        }, this.setDrawingBufferSize = function (t, i, n) {
            tt = t, et = i, it = n, e.width = t * n, e.height = i * n, this.setViewport(0, 0, t, i)
        }, this.getCurrentViewport = function () {
            return q
        }, this.setViewport = function (t, e, i, n) {
            nt.set(t, et - e - n, i, n), m.viewport(q.copy(nt).multiplyScalar(it))
        }, this.setScissor = function (t, e, i, n) {
            rt.set(t, et - e - n, i, n), m.scissor(X.copy(rt).multiplyScalar(it))
        }, this.setScissorTest = function (t) {
            m.setScissorTest(at = t)
        }, this.getClearColor = function () {
            return A.getClearColor()
        }, this.setClearColor = function () {
            A.setClearColor.apply(A, arguments)
        }, this.getClearAlpha = function () {
            return A.getClearAlpha()
        }, this.setClearAlpha = function () {
            A.setClearAlpha.apply(A, arguments)
        }, this.clear = function (t, e, i) {
            var n = 0;
            (void 0 === t || t) && (n |= 16384), (void 0 === e || e) && (n |= 256), (void 0 === i || i) && (n |= 1024), p.clear(n)
        }, this.clearColor = function () {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function () {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function () {
            this.clear(!1, !1, !0)
        }, this.dispose = function () {
            e.removeEventListener("webglcontextlost", vt, !1), e.removeEventListener("webglcontextrestored", yt, !1), T.dispose(), L.dispose(), x.dispose(), S.dispose(), mt.dispose(), Mt.stop()
        }, this.renderBufferImmediate = function (t, e) {
            m.initAttributes();
            var i = x.get(t);
            t.hasPositions && !i.position && (i.position = p.createBuffer()), t.hasNormals && !i.normal && (i.normal = p.createBuffer()), t.hasUvs && !i.uv && (i.uv = p.createBuffer()), t.hasColors && !i.color && (i.color = p.createBuffer());
            var n = e.getAttributes();
            t.hasPositions && (p.bindBuffer(34962, i.position), p.bufferData(34962, t.positionArray, 35048), m.enableAttribute(n.position), p.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)), t.hasNormals && (p.bindBuffer(34962, i.normal), p.bufferData(34962, t.normalArray, 35048), m.enableAttribute(n.normal), p.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (p.bindBuffer(34962, i.uv), p.bufferData(34962, t.uvArray, 35048), m.enableAttribute(n.uv), p.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)), t.hasColors && (p.bindBuffer(34962, i.color), p.bufferData(34962, t.colorArray, 35048), m.enableAttribute(n.color), p.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)), m.disableUnusedAttributes(), p.drawArrays(4, 0, t.count), t.count = 0
        }, this.renderBufferDirect = function (t, e, i, n, r, a) {
            var o = r.isMesh && r.normalMatrix.determinant() < 0;
            m.setMaterial(n, o);
            var s = Lt(t, e, n, r),
                c = !1;
            V.geometry === i.id && V.program === s.id && V.wireframe === (!0 === n.wireframe) || (V.geometry = i.id, V.program = s.id, V.wireframe = !0 === n.wireframe, c = !0), r.morphTargetInfluences && (P.update(r, i, n, s), c = !0);
            var h, l = i.index,
                u = i.attributes.position,
                g = 1;
            !0 === n.wireframe && (l = M.getWireframeAttribute(i), g = 2);
            var v = C;
            null !== l && (h = _.get(l), (v = O).setIndex(h)), c && (! function (t, e, i) {
                if (i && i.isInstancedBufferGeometry & !f.isWebGL2 && null === d.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                m.initAttributes();
                var n = i.attributes,
                    r = e.getAttributes(),
                    a = t.defaultAttributeValues;
                for (var o in r) {
                    var s = r[o];
                    if (s >= 0) {
                        var c = n[o];
                        if (void 0 !== c) {
                            var h = c.normalized,
                                l = c.itemSize,
                                u = _.get(c);
                            if (void 0 === u) continue;
                            var g = u.buffer,
                                v = u.type,
                                y = u.bytesPerElement;
                            if (c.isInterleavedBufferAttribute) {
                                var x = c.data,
                                    b = x.stride,
                                    w = c.offset;
                                x && x.isInstancedInterleavedBuffer ? (m.enableAttributeAndDivisor(s, x.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = x.meshPerAttribute * x.count)) : m.enableAttribute(s), p.bindBuffer(34962, g), p.vertexAttribPointer(s, l, v, h, b * y, w * y)
                            } else c.isInstancedBufferAttribute ? (m.enableAttributeAndDivisor(s, c.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = c.meshPerAttribute * c.count)) : m.enableAttribute(s), p.bindBuffer(34962, g), p.vertexAttribPointer(s, l, v, h, 0, 0)
                        } else if (void 0 !== a) {
                            var M = a[o];
                            if (void 0 !== M) switch (M.length) {
                            case 2:
                                p.vertexAttrib2fv(s, M);
                                break;
                            case 3:
                                p.vertexAttrib3fv(s, M);
                                break;
                            case 4:
                                p.vertexAttrib4fv(s, M);
                                break;
                            default:
                                p.vertexAttrib1fv(s, M)
                            }
                        }
                    }
                }
                m.disableUnusedAttributes()
            }(n, s, i), null !== l && p.bindBuffer(34963, h.buffer));
            var y = 1 / 0;
            null !== l ? y = l.count : void 0 !== u && (y = u.count);
            var x = i.drawRange.start * g,
                b = i.drawRange.count * g,
                w = null !== a ? a.start * g : 0,
                S = null !== a ? a.count * g : 1 / 0,
                E = Math.max(x, w),
                T = Math.min(y, x + b, w + S) - 1,
                L = Math.max(0, T - E + 1);
            if (0 !== L) {
                if (r.isMesh)
                    if (!0 === n.wireframe) m.setLineWidth(n.wireframeLinewidth * pt()), v.setMode(1);
                    else switch (r.drawMode) {
                    case 0:
                        v.setMode(4);
                        break;
                    case 1:
                        v.setMode(5);
                        break;
                    case 2:
                        v.setMode(6)
                    } else if (r.isLine) {
                        var A = n.linewidth;
                        void 0 === A && (A = 1), m.setLineWidth(A * pt()), r.isLineSegments ? v.setMode(1) : r.isLineLoop ? v.setMode(2) : v.setMode(3)
                    } else r.isPoints ? v.setMode(0) : r.isSprite && v.setMode(4);
                i && i.isInstancedBufferGeometry ? i.maxInstancedCount > 0 && v.renderInstances(i, E, L) : v.render(E, L)
            }
        }, this.compile = function (t, e) {
            (u = L.get(t, e)).init(), t.traverse((function (t) {
                t.isLight && (u.pushLight(t), t.castShadow && u.pushShadow(t))
            })), u.setupLights(e), t.traverse((function (e) {
                if (e.material)
                    if (Array.isArray(e.material))
                        for (var i = 0; i < e.material.length; i++) Tt(e.material[i], t.fog, e);
                    else Tt(e.material, t.fog, e)
            }))
        };
        var wt = null;
        var _t, Mt = new Z;

        function St(t, e, i, n) {
            for (var r = 0, a = t.length; r < a; r++) {
                var o = t[r],
                    s = o.object,
                    c = o.geometry,
                    h = void 0 === n ? o.material : n,
                    l = o.group;
                if (i.isArrayCamera) {
                    W = i;
                    for (var p = i.cameras, d = 0, f = p.length; d < f; d++) {
                        var g = p[d];
                        if (s.layers.test(g.layers)) {
                            if ("viewport" in g) m.viewport(q.copy(g.viewport));
                            else {
                                var v = g.bounds,
                                    y = v.x * tt,
                                    x = v.y * et,
                                    b = v.z * tt,
                                    w = v.w * et;
                                m.viewport(q.set(y, x, b, w).multiplyScalar(it))
                            }
                            u.setupLights(g), Et(s, e, g, c, h, l)
                        }
                    }
                } else W = null, Et(s, e, i, c, h, l)
            }
        }

        function Et(t, e, i, n, r, a) {
            if (t.onBeforeRender(z, e, i, n, r, a), u = L.get(e, W || i), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                m.setMaterial(r);
                var o = Lt(i, e.fog, r, t);
                V.geometry = null, V.program = null, V.wireframe = !1,
                    function (t, e) {
                        t.render((function (t) {
                            z.renderBufferImmediate(t, e)
                        }))
                    }(t, o)
            } else z.renderBufferDirect(i, e.fog, n, r, t, a);
            t.onAfterRender(z, e, i, n, r, a), u = L.get(e, W || i)
        }

        function Tt(t, e, i) {
            var n = x.get(t),
                r = u.state.lights,
                a = u.state.shadowsArray,
                o = n.lightsHash,
                s = r.state.hash,
                c = E.getParameters(t, r.state, a, e, st.numPlanes, st.numIntersection, i),
                h = E.getProgramCode(t, c),
                l = n.program,
                p = !0;
            if (void 0 === l) t.addEventListener("dispose", xt);
            else if (l.code !== h) bt(t);
            else if (o.stateID !== s.stateID || o.directionalLength !== s.directionalLength || o.pointLength !== s.pointLength || o.spotLength !== s.spotLength || o.rectAreaLength !== s.rectAreaLength || o.hemiLength !== s.hemiLength || o.shadowsLength !== s.shadowsLength) o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, p = !1;
            else {
                if (void 0 !== c.shaderID) return;
                p = !1
            }
            if (p) {
                if (c.shaderID) {
                    var d = J[c.shaderID];
                    n.shader = {
                        name: t.type,
                        uniforms: F(d.uniforms),
                        vertexShader: d.vertexShader,
                        fragmentShader: d.fragmentShader
                    }
                } else n.shader = {
                    name: t.type,
                    uniforms: t.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                };
                t.onBeforeCompile(n.shader, z), h = E.getProgramCode(t, c), l = E.acquireProgram(t, n.shader, c, h), n.program = l, t.program = l
            }
            var f = l.getAttributes();
            if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var m = 0; m < z.maxMorphTargets; m++) f["morphTarget" + m] >= 0 && t.numSupportedMorphTargets++
            }
            if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (m = 0; m < z.maxMorphNormals; m++) f["morphNormal" + m] >= 0 && t.numSupportedMorphNormals++
            }
            var g = n.shader.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = st.numPlanes, n.numIntersection = st.numIntersection, g.clippingPlanes = st.uniform), n.fog = e, void 0 === o && (n.lightsHash = o = {}), o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, t.lights && (g.ambientLightColor.value = r.state.ambient, g.directionalLights.value = r.state.directional, g.spotLights.value = r.state.spot, g.rectAreaLights.value = r.state.rectArea, g.pointLights.value = r.state.point, g.hemisphereLights.value = r.state.hemi, g.directionalShadowMap.value = r.state.directionalShadowMap, g.directionalShadowMatrix.value = r.state.directionalShadowMatrix, g.spotShadowMap.value = r.state.spotShadowMap, g.spotShadowMatrix.value = r.state.spotShadowMatrix, g.pointShadowMap.value = r.state.pointShadowMap, g.pointShadowMatrix.value = r.state.pointShadowMatrix);
            var v = n.program.getUniforms(),
                y = Ze.seqWithValue(v.seq, g);
            n.uniformsList = y
        }

        function Lt(t, e, i, n) {
            $ = 0;
            var r = x.get(i),
                a = u.state.lights,
                o = r.lightsHash,
                s = a.state.hash;
            if (ct && (ht || t !== j)) {
                var c = t === j && i.id === k;
                st.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, c)
            }!1 === i.needsUpdate && (void 0 === r.program || i.fog && r.fog !== e ? i.needsUpdate = !0 : (!i.lights || o.stateID === s.stateID && o.directionalLength === s.directionalLength && o.pointLength === s.pointLength && o.spotLength === s.spotLength && o.rectAreaLength === s.rectAreaLength && o.hemiLength === s.hemiLength && o.shadowsLength === s.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === st.numPlanes && r.numIntersection === st.numIntersection) || (i.needsUpdate = !0)), i.needsUpdate && (Tt(i, e, n), i.needsUpdate = !1);
            var h, l, d = !1,
                v = !1,
                y = !1,
                b = r.program,
                w = b.getUniforms(),
                _ = r.shader.uniforms;
            if (m.useProgram(b.program) && (d = !0, v = !0, y = !0), i.id !== k && (k = i.id, v = !0), d || j !== t) {
                if (w.setValue(p, "projectionMatrix", t.projectionMatrix), f.logarithmicDepthBuffer && w.setValue(p, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), j !== t && (j = t, v = !0, y = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
                    var M = w.map.cameraPosition;
                    void 0 !== M && M.setValue(p, ut.setFromMatrixPosition(t.matrixWorld))
                }(i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && w.setValue(p, "viewMatrix", t.matrixWorldInverse)
            }
            if (i.skinning) {
                w.setOptional(p, n, "bindMatrix"), w.setOptional(p, n, "bindMatrixInverse");
                var S = n.skeleton;
                if (S) {
                    var E = S.bones;
                    if (f.floatVertexTextures) {
                        if (void 0 === S.boneTexture) {
                            var T = Math.sqrt(4 * E.length);
                            T = g.ceilPowerOfTwo(T), T = Math.max(T, 4);
                            var L = new Float32Array(T * T * 4);
                            L.set(S.boneMatrices);
                            var A = new D(L, T, T, 1023, 1015);
                            A.needsUpdate = !0, S.boneMatrices = L, S.boneTexture = A, S.boneTextureSize = T
                        }
                        w.setValue(p, "boneTexture", S.boneTexture), w.setValue(p, "boneTextureSize", S.boneTextureSize)
                    } else w.setOptional(p, S, "boneMatrices")
                }
            }
            return v && (w.setValue(p, "toneMappingExposure", z.toneMappingExposure), w.setValue(p, "toneMappingWhitePoint", z.toneMappingWhitePoint), i.lights && (l = y, (h = _).ambientLightColor.needsUpdate = l, h.directionalLights.needsUpdate = l, h.pointLights.needsUpdate = l, h.spotLights.needsUpdate = l, h.rectAreaLights.needsUpdate = l, h.hemisphereLights.needsUpdate = l), e && i.fog && function (t, e) {
                t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
            }(_, e), i.isMeshBasicMaterial ? At(_, i) : i.isMeshLambertMaterial ? (At(_, i), function (t, e) {
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
            }(_, i)) : i.isMeshPhongMaterial ? (At(_, i), i.isMeshToonMaterial ? function (t, e) {
                Pt(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
            }(_, i) : Pt(_, i)) : i.isMeshStandardMaterial ? (At(_, i), i.isMeshPhysicalMaterial ? function (t, e) {
                Rt(t, e), t.reflectivity.value = e.reflectivity, t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness
            }(_, i) : Rt(_, i)) : i.isMeshMatcapMaterial ? (At(_, i), function (t, e) {
                e.matcap && (t.matcap.value = e.matcap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }(_, i)) : i.isMeshDepthMaterial ? (At(_, i), function (t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }(_, i)) : i.isMeshDistanceMaterial ? (At(_, i), function (t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
            }(_, i)) : i.isMeshNormalMaterial ? (At(_, i), function (t, e) {
                e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }(_, i)) : i.isLineBasicMaterial ? (function (t, e) {
                t.diffuse.value = e.color, t.opacity.value = e.opacity
            }(_, i), i.isLineDashedMaterial && function (t, e) {
                t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
            }(_, i)) : i.isPointsMaterial ? function (t, e) {
                t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * it, t.scale.value = .5 * et, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
            }(_, i) : i.isSpriteMaterial ? function (t, e) {
                t.diffuse.value = e.color, t.opacity.value = e.opacity, t.rotation.value = e.rotation, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
            }(_, i) : i.isShadowMaterial && (_.color.value = i.color, _.opacity.value = i.opacity), void 0 !== _.ltc_1 && (_.ltc_1.value = Y.LTC_1), void 0 !== _.ltc_2 && (_.ltc_2.value = Y.LTC_2), Ze.upload(p, r.uniformsList, _, z)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (Ze.upload(p, r.uniformsList, _, z), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && w.setValue(p, "center", n.center), w.setValue(p, "modelViewMatrix", n.modelViewMatrix), w.setValue(p, "normalMatrix", n.normalMatrix), w.setValue(p, "modelMatrix", n.matrixWorld), b
        }

        function At(t, e) {
            var i;
            t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = x.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
        }

        function Pt(t, e) {
            t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }

        function Rt(t, e) {
            t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }
        Mt.setAnimationLoop((function (t) {
            mt.isPresenting() || wt && wt(t)
        })), "undefined" != typeof window && Mt.setContext(window), this.setAnimationLoop = function (t) {
            wt = t, mt.setAnimationLoop(t), Mt.start()
        }, this.render = function (t, e, i, n) {
            if (e && e.isCamera) {
                if (!N) {
                    V.geometry = null, V.program = null, V.wireframe = !1, k = -1, j = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), mt.enabled && (e = mt.getCamera(e)), (u = L.get(t, e)).init(), t.onBeforeRender(z, t, e, i), lt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), ot.setFromMatrix(lt), ht = this.localClippingEnabled, ct = st.init(this.clippingPlanes, ht, e), (l = T.get(t, e)).init(),
                        function t(e, i, n, r) {
                            if (!1 === e.visible) return;
                            if (e.layers.test(i.layers))
                                if (e.isGroup) n = e.renderOrder;
                                else if (e.isLight) u.pushLight(e), e.castShadow && u.pushShadow(e);
                            else if (e.isSprite) {
                                if (!e.frustumCulled || ot.intersectsSprite(e)) {
                                    r && ut.setFromMatrixPosition(e.matrixWorld).applyMatrix4(lt);
                                    var a = S.update(e),
                                        o = e.material;
                                    l.push(e, a, o, n, ut.z, null)
                                }
                            } else if (e.isImmediateRenderObject) r && ut.setFromMatrixPosition(e.matrixWorld).applyMatrix4(lt), l.push(e, null, e.material, n, ut.z, null);
                            else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || ot.intersectsObject(e))) {
                                r && ut.setFromMatrixPosition(e.matrixWorld).applyMatrix4(lt);
                                a = S.update(e), o = e.material;
                                if (Array.isArray(o))
                                    for (var s = a.groups, c = 0, h = s.length; c < h; c++) {
                                        var p = s[c],
                                            d = o[p.materialIndex];
                                        d && d.visible && l.push(e, a, d, n, ut.z, p)
                                    } else o.visible && l.push(e, a, o, n, ut.z, null)
                            }
                            var f = e.children;
                            for (c = 0, h = f.length; c < h; c++) t(f[c], i, n, r)
                        }(t, e, 0, z.sortObjects), !0 === z.sortObjects && l.sort(), ct && st.beginShadows();
                    var r = u.state.shadowsArray;
                    gt.render(r, t, e), u.setupLights(e), ct && st.endShadows(), this.info.autoReset && this.info.reset(), void 0 === i && (i = null), this.setRenderTarget(i), A.render(l, t, e, n);
                    var a = l.opaque,
                        o = l.transparent;
                    if (t.overrideMaterial) {
                        var s = t.overrideMaterial;
                        a.length && St(a, t, e, s), o.length && St(o, t, e, s)
                    } else a.length && St(a, t, e), o.length && St(o, t, e);
                    i && (w.updateRenderTargetMipmap(i), w.updateMultisampleRenderTarget(i)), m.buffers.depth.setTest(!0), m.buffers.depth.setMask(!0), m.buffers.color.setMask(!0), m.setPolygonOffset(!1), t.onAfterRender(z, t, e), mt.enabled && mt.submitFrame(), l = null, u = null
                }
            } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }, this.allocTextureUnit = function () {
            var t = $;
            return t >= f.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + f.maxTextures), $ += 1, t
        }, this.setTexture2D = (_t = !1, function (t, e) {
            t && t.isWebGLRenderTarget && (_t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), _t = !0), t = t.texture), w.setTexture2D(t, e)
        }), this.setTexture3D = function (t, e) {
            w.setTexture3D(t, e)
        }, this.setTexture = function () {
            var t = !1;
            return function (e, i) {
                t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), w.setTexture2D(e, i)
            }
        }(), this.setTextureCube = function () {
            var t = !1;
            return function (e, i) {
                e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? w.setTextureCube(e, i) : w.setTextureCubeDynamic(e, i)
            }
        }(), this.setFramebuffer = function (t) {
            B = t
        }, this.getRenderTarget = function () {
            return G
        }, this.setRenderTarget = function (t) {
            G = t, t && void 0 === x.get(t).__webglFramebuffer && w.setupRenderTarget(t);
            var e = B,
                i = !1;
            if (t) {
                var n = x.get(t).__webglFramebuffer;
                t.isWebGLRenderTargetCube ? (e = n[t.activeCubeFace], i = !0) : e = t.isWebGLMultisampleRenderTarget ? x.get(t).__webglMultisampledFramebuffer : n, q.copy(t.viewport), X.copy(t.scissor), K = t.scissorTest
            } else q.copy(nt).multiplyScalar(it), X.copy(rt).multiplyScalar(it), K = at;
            if (H !== e && (p.bindFramebuffer(36160, e), H = e), m.viewport(q), m.scissor(X), m.setScissorTest(K), i) {
                var r = x.get(t.texture);
                p.framebufferTexture2D(36160, 36064, 34069 + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
            }
        }, this.readRenderTargetPixels = function (t, e, i, n, r, a) {
            if (t && t.isWebGLRenderTarget) {
                var o = x.get(t).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== H && (p.bindFramebuffer(36160, o), s = !0);
                    try {
                        var c = t.texture,
                            h = c.format,
                            l = c.type;
                        if (1023 !== h && I.convert(h) !== p.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        if (!(1009 === l || I.convert(l) === p.getParameter(35738) || 1015 === l && (f.isWebGL2 || d.get("OES_texture_float") || d.get("WEBGL_color_buffer_float")) || 1016 === l && (f.isWebGL2 ? d.get("EXT_color_buffer_float") : d.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        36053 === p.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && p.readPixels(e, i, n, r, I.convert(h), I.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        s && p.bindFramebuffer(36160, H)
                    }
                }
            } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }, this.copyFramebufferToTexture = function (t, e, i) {
            var n = e.image.width,
                r = e.image.height,
                a = I.convert(e.format);
            this.setTexture2D(e, 0), p.copyTexImage2D(3553, i || 0, a, t.x, t.y, n, r, 0)
        }, this.copyTextureToTexture = function (t, e, i, n) {
            var r = e.image.width,
                a = e.image.height,
                o = I.convert(i.format),
                s = I.convert(i.type);
            this.setTexture2D(i, 0), e.isDataTexture ? p.texSubImage2D(3553, n || 0, t.x, t.y, r, a, o, s, e.image.data) : p.texSubImage2D(3553, n || 0, t.x, t.y, o, s, e.image)
        }
    }

    function Hi(t, e) {
        this.name = "", this.color = new q(t), this.density = void 0 !== e ? e : 25e-5
    }

    function ki(t, e, i) {
        this.name = "", this.color = new q(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
    }

    function Vi() {
        ot.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    }

    function ji(t, e) {
        this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }

    function Wi(t, e, i, n) {
        this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
    }

    function qi(t) {
        kt.call(this), this.type = "SpriteMaterial", this.color = new q(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.lights = !1, this.transparent = !0, this.setValues(t)
    }

    function Xi(t) {
        if (ot.call(this), this.type = "Sprite", void 0 === Pi) {
            Pi = new St;
            var e = new ji(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
            Pi.setIndex([0, 1, 2, 0, 2, 3]), Pi.addAttribute("position", new Wi(e, 3, 0, !1)), Pi.addAttribute("uv", new Wi(e, 2, 3, !1))
        }
        this.geometry = Pi, this.material = void 0 !== t ? t : new qi, this.center = new v(.5, .5)
    }

    function Yi() {
        ot.call(this), this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }

    function Ji(t, e) {
        t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), Xt.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new y, this.bindMatrixInverse = new y
    }

    function Zi(t, e) {
        if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else {
            console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
            for (var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new y)
        }
    }

    function Qi() {
        ot.call(this), this.type = "Bone"
    }

    function Ki(t) {
        kt.call(this), this.type = "LineBasicMaterial", this.color = new q(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
    }

    function $i(t, e, i) {
        1 === i && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), ot.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new St, this.material = void 0 !== e ? e : new Ki({
            color: 16777215 * Math.random()
        })
    }

    function tn(t, e) {
        $i.call(this, t, e), this.type = "LineSegments"
    }

    function en(t, e) {
        $i.call(this, t, e), this.type = "LineLoop"
    }

    function nn(t) {
        kt.call(this), this.type = "PointsMaterial", this.color = new q(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(t)
    }

    function rn(t, e) {
        ot.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new St, this.material = void 0 !== e ? e : new nn({
            color: 16777215 * Math.random()
        })
    }

    function an(t, e, i, n, r, a, o, s, c) {
        P.call(this, t, e, i, n, r, a, o, s, c), this.format = void 0 !== o ? o : 1022, this.minFilter = void 0 !== a ? a : 1006, this.magFilter = void 0 !== r ? r : 1006, this.generateMipmaps = !1
    }

    function on(t, e, i, n, r, a, o, s, c, h, l, u) {
        P.call(this, null, a, o, s, c, h, n, r, l, u), this.image = {
            width: e,
            height: i
        }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    }

    function sn(t, e, i, n, r, a, o, s, c) {
        P.call(this, t, e, i, n, r, a, o, s, c), this.needsUpdate = !0
    }

    function cn(t, e, i, n, r, a, o, s, c, h) {
        if (1026 !== (h = void 0 !== h ? h : 1026) && 1027 !== h) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === i && 1026 === h && (i = 1012), void 0 === i && 1027 === h && (i = 1020), P.call(this, null, n, r, a, o, s, h, i, c), this.image = {
            width: t,
            height: e
        }, this.magFilter = void 0 !== o ? o : 1003, this.minFilter = void 0 !== s ? s : 1003, this.flipY = !1, this.generateMipmaps = !1
    }

    function hn() {
        var t = new Uint8Array(3);
        P.call(this, null, void 0, void 0, void 0, void 0, void 0, 1022, void 0, void 0, void 0), this.image = {
            data: t,
            width: 1,
            height: 1
        }, this.magFilter = 1003, this.minFilter = 1003, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }

    function ln(t) {
        St.call(this), this.type = "WireframeGeometry";
        var e, i, n, r, a, o, s, c, h, l, u = [],
            p = [0, 0],
            d = {},
            f = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var m = t.faces;
            for (e = 0, n = m.length; e < n; e++) {
                var g = m[e];
                for (i = 0; i < 3; i++) s = g[f[i]], c = g[f[(i + 1) % 3]], p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = {
                    index1: p[0],
                    index2: p[1]
                })
            }
            for (h in d) o = d[h], l = t.vertices[o.index1], u.push(l.x, l.y, l.z), l = t.vertices[o.index2], u.push(l.x, l.y, l.z)
        } else if (t && t.isBufferGeometry) {
            var v, y, x, w, _, M, S;
            if (l = new b, null !== t.index) {
                for (v = t.attributes.position, y = t.index, 0 === (x = t.groups).length && (x = [{
                        start: 0,
                        count: y.count,
                        materialIndex: 0
                    }]), r = 0, a = x.length; r < a; ++r)
                    for (e = _ = (w = x[r]).start, n = _ + w.count; e < n; e += 3)
                        for (i = 0; i < 3; i++) s = y.getX(e + i), c = y.getX(e + (i + 1) % 3), p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = {
                            index1: p[0],
                            index2: p[1]
                        });
                for (h in d) o = d[h], l.fromBufferAttribute(v, o.index1), u.push(l.x, l.y, l.z), l.fromBufferAttribute(v, o.index2), u.push(l.x, l.y, l.z)
            } else
                for (e = 0, n = (v = t.attributes.position).count / 3; e < n; e++)
                    for (i = 0; i < 3; i++) M = 3 * e + i, l.fromBufferAttribute(v, M), u.push(l.x, l.y, l.z), S = 3 * e + (i + 1) % 3, l.fromBufferAttribute(v, S), u.push(l.x, l.y, l.z)
        }
        this.addAttribute("position", new xt(u, 3))
    }

    function un(t, e, i) {
        lt.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: i
        }, this.fromBufferGeometry(new pn(t, e, i)), this.mergeVertices()
    }

    function pn(t, e, i) {
        St.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: i
        };
        var n, r, a = [],
            o = [],
            s = [],
            c = [],
            h = 1e-5,
            l = new b,
            u = new b,
            p = new b,
            d = new b,
            f = new b;
        t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        var m = e + 1;
        for (n = 0; n <= i; n++) {
            var g = n / i;
            for (r = 0; r <= e; r++) {
                var v = r / e;
                t(v, g, u), o.push(u.x, u.y, u.z), v - h >= 0 ? (t(v - h, g, p), d.subVectors(u, p)) : (t(v + h, g, p), d.subVectors(p, u)), g - h >= 0 ? (t(v, g - h, p), f.subVectors(u, p)) : (t(v, g + h, p), f.subVectors(p, u)), l.crossVectors(d, f).normalize(), s.push(l.x, l.y, l.z), c.push(v, g)
            }
        }
        for (n = 0; n < i; n++)
            for (r = 0; r < e; r++) {
                var y = n * m + r,
                    x = n * m + r + 1,
                    w = (n + 1) * m + r + 1,
                    _ = (n + 1) * m + r;
                a.push(y, x, _), a.push(x, w, _)
            }
        this.setIndex(a), this.addAttribute("position", new xt(o, 3)), this.addAttribute("normal", new xt(s, 3)), this.addAttribute("uv", new xt(c, 2))
    }

    function dn(t, e, i, n) {
        lt.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: n
        }, this.fromBufferGeometry(new fn(t, e, i, n)), this.mergeVertices()
    }

    function fn(t, e, i, n) {
        St.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: n
        }, i = i || 1;
        var r = [],
            a = [];

        function o(t, e, i, n) {
            var r, a, o = Math.pow(2, n),
                c = [];
            for (r = 0; r <= o; r++) {
                c[r] = [];
                var h = t.clone().lerp(i, r / o),
                    l = e.clone().lerp(i, r / o),
                    u = o - r;
                for (a = 0; a <= u; a++) c[r][a] = 0 === a && r === o ? h : h.clone().lerp(l, a / u)
            }
            for (r = 0; r < o; r++)
                for (a = 0; a < 2 * (o - r) - 1; a++) {
                    var p = Math.floor(a / 2);
                    a % 2 == 0 ? (s(c[r][p + 1]), s(c[r + 1][p]), s(c[r][p])) : (s(c[r][p + 1]), s(c[r + 1][p + 1]), s(c[r + 1][p]))
                }
        }

        function s(t) {
            r.push(t.x, t.y, t.z)
        }

        function c(e, i) {
            var n = 3 * e;
            i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
        }

        function h(t, e, i, n) {
            n < 0 && 1 === t.x && (a[e] = t.x - 1), 0 === i.x && 0 === i.z && (a[e] = n / 2 / Math.PI + .5)
        }

        function l(t) {
            return Math.atan2(t.z, -t.x)
        }

        function u(t) {
            return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
        }! function (t) {
            for (var i = new b, n = new b, r = new b, a = 0; a < e.length; a += 3) c(e[a + 0], i), c(e[a + 1], n), c(e[a + 2], r), o(i, n, r, t)
        }(n = n || 0),
        function (t) {
            for (var e = new b, i = 0; i < r.length; i += 3) e.x = r[i + 0], e.y = r[i + 1], e.z = r[i + 2], e.normalize().multiplyScalar(t), r[i + 0] = e.x, r[i + 1] = e.y, r[i + 2] = e.z
        }(i),
        function () {
            for (var t = new b, e = 0; e < r.length; e += 3) {
                t.x = r[e + 0], t.y = r[e + 1], t.z = r[e + 2];
                var i = l(t) / 2 / Math.PI + .5,
                    n = u(t) / Math.PI + .5;
                a.push(i, 1 - n)
            }(function () {
                for (var t = new b, e = new b, i = new b, n = new b, o = new v, s = new v, c = new v, u = 0, p = 0; u < r.length; u += 9, p += 6) {
                    t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), i.set(r[u + 6], r[u + 7], r[u + 8]), o.set(a[p + 0], a[p + 1]), s.set(a[p + 2], a[p + 3]), c.set(a[p + 4], a[p + 5]), n.copy(t).add(e).add(i).divideScalar(3);
                    var d = l(n);
                    h(o, p + 0, t, d), h(s, p + 2, e, d), h(c, p + 4, i, d)
                }
            })(),
            function () {
                for (var t = 0; t < a.length; t += 6) {
                    var e = a[t + 0],
                        i = a[t + 2],
                        n = a[t + 4],
                        r = Math.max(e, i, n),
                        o = Math.min(e, i, n);
                    r > .9 && o < .1 && (e < .2 && (a[t + 0] += 1), i < .2 && (a[t + 2] += 1), n < .2 && (a[t + 4] += 1))
                }
            }()
        }(), this.addAttribute("position", new xt(r, 3)), this.addAttribute("normal", new xt(r.slice(), 3)), this.addAttribute("uv", new xt(a, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
    }

    function mn(t, e) {
        lt.call(this), this.type = "TetrahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new gn(t, e)), this.mergeVertices()
    }

    function gn(t, e) {
        fn.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function vn(t, e) {
        lt.call(this), this.type = "OctahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new yn(t, e)), this.mergeVertices()
    }

    function yn(t, e) {
        fn.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function xn(t, e) {
        lt.call(this), this.type = "IcosahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new bn(t, e)), this.mergeVertices()
    }

    function bn(t, e) {
        var i = (1 + Math.sqrt(5)) / 2,
            n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
        fn.call(this, n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function wn(t, e) {
        lt.call(this), this.type = "DodecahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new _n(t, e)), this.mergeVertices()
    }

    function _n(t, e) {
        var i = (1 + Math.sqrt(5)) / 2,
            n = 1 / i,
            r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n];
        fn.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Mn(t, e, i, n, r, a) {
        lt.call(this), this.type = "TubeGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r
        }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
        var o = new Sn(t, e, i, n, r);
        this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
    }

    function Sn(t, e, i, n, r) {
        St.call(this), this.type = "TubeBufferGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r
        }, e = e || 64, i = i || 1, n = n || 8, r = r || !1;
        var a = t.computeFrenetFrames(e, r);
        this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
        var o, s, c = new b,
            h = new b,
            l = new v,
            u = new b,
            p = [],
            d = [],
            f = [],
            m = [];

        function g(r) {
            u = t.getPointAt(r / e, u);
            var o = a.normals[r],
                l = a.binormals[r];
            for (s = 0; s <= n; s++) {
                var f = s / n * Math.PI * 2,
                    m = Math.sin(f),
                    g = -Math.cos(f);
                h.x = g * o.x + m * l.x, h.y = g * o.y + m * l.y, h.z = g * o.z + m * l.z, h.normalize(), d.push(h.x, h.y, h.z), c.x = u.x + i * h.x, c.y = u.y + i * h.y, c.z = u.z + i * h.z, p.push(c.x, c.y, c.z)
            }
        }! function () {
            for (o = 0; o < e; o++) g(o);
            g(!1 === r ? e : 0),
                function () {
                    for (o = 0; o <= e; o++)
                        for (s = 0; s <= n; s++) l.x = o / e, l.y = s / n, f.push(l.x, l.y)
                }(),
                function () {
                    for (s = 1; s <= e; s++)
                        for (o = 1; o <= n; o++) {
                            var t = (n + 1) * (s - 1) + (o - 1),
                                i = (n + 1) * s + (o - 1),
                                r = (n + 1) * s + o,
                                a = (n + 1) * (s - 1) + o;
                            m.push(t, i, a), m.push(i, r, a)
                        }
                }()
        }(), this.setIndex(m), this.addAttribute("position", new xt(p, 3)), this.addAttribute("normal", new xt(d, 3)), this.addAttribute("uv", new xt(f, 2))
    }

    function En(t, e, i, n, r, a, o) {
        lt.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Tn(t, e, i, n, r, a)), this.mergeVertices()
    }

    function Tn(t, e, i, n, r, a) {
        St.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        }, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, a = a || 3;
        var o, s, c = [],
            h = [],
            l = [],
            u = [],
            p = new b,
            d = new b,
            f = new b,
            m = new b,
            g = new b,
            v = new b,
            y = new b;
        for (o = 0; o <= i; ++o) {
            var x = o / i * r * Math.PI * 2;
            for (A(x, r, a, t, f), A(x + .01, r, a, t, m), v.subVectors(m, f), y.addVectors(m, f), g.crossVectors(v, y), y.crossVectors(g, v), g.normalize(), y.normalize(), s = 0; s <= n; ++s) {
                var w = s / n * Math.PI * 2,
                    _ = -e * Math.cos(w),
                    M = e * Math.sin(w);
                p.x = f.x + (_ * y.x + M * g.x), p.y = f.y + (_ * y.y + M * g.y), p.z = f.z + (_ * y.z + M * g.z), h.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), l.push(d.x, d.y, d.z), u.push(o / i), u.push(s / n)
            }
        }
        for (s = 1; s <= i; s++)
            for (o = 1; o <= n; o++) {
                var S = (n + 1) * (s - 1) + (o - 1),
                    E = (n + 1) * s + (o - 1),
                    T = (n + 1) * s + o,
                    L = (n + 1) * (s - 1) + o;
                c.push(S, E, L), c.push(E, T, L)
            }

        function A(t, e, i, n, r) {
            var a = Math.cos(t),
                o = Math.sin(t),
                s = i / e * t,
                c = Math.cos(s);
            r.x = n * (2 + c) * .5 * a, r.y = n * (2 + c) * o * .5, r.z = n * Math.sin(s) * .5
        }
        this.setIndex(c), this.addAttribute("position", new xt(h, 3)), this.addAttribute("normal", new xt(l, 3)), this.addAttribute("uv", new xt(u, 2))
    }

    function Ln(t, e, i, n, r) {
        lt.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, this.fromBufferGeometry(new An(t, e, i, n, r)), this.mergeVertices()
    }

    function An(t, e, i, n, r) {
        St.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
        var a, o, s = [],
            c = [],
            h = [],
            l = [],
            u = new b,
            p = new b,
            d = new b;
        for (a = 0; a <= i; a++)
            for (o = 0; o <= n; o++) {
                var f = o / n * r,
                    m = a / i * Math.PI * 2;
                p.x = (t + e * Math.cos(m)) * Math.cos(f), p.y = (t + e * Math.cos(m)) * Math.sin(f), p.z = e * Math.sin(m), c.push(p.x, p.y, p.z), u.x = t * Math.cos(f), u.y = t * Math.sin(f), d.subVectors(p, u).normalize(), h.push(d.x, d.y, d.z), l.push(o / n), l.push(a / i)
            }
        for (a = 1; a <= i; a++)
            for (o = 1; o <= n; o++) {
                var g = (n + 1) * a + o - 1,
                    v = (n + 1) * (a - 1) + o - 1,
                    y = (n + 1) * (a - 1) + o,
                    x = (n + 1) * a + o;
                s.push(g, v, x), s.push(v, y, x)
            }
        this.setIndex(s), this.addAttribute("position", new xt(c, 3)), this.addAttribute("normal", new xt(h, 3)), this.addAttribute("uv", new xt(l, 2))
    }
    Hi.prototype.isFogExp2 = !0, Hi.prototype.clone = function () {
        return new Hi(this.color, this.density)
    }, Hi.prototype.toJSON = function () {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }, ki.prototype.isFog = !0, ki.prototype.clone = function () {
        return new ki(this.color, this.near, this.far)
    }, ki.prototype.toJSON = function () {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }, Vi.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: Vi,
        copy: function (t, e) {
            return ot.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
        },
        toJSON: function (t) {
            var e = ot.prototype.toJSON.call(this, t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Object.defineProperty(ji.prototype, "needsUpdate", {
        set: function (t) {
            !0 === t && this.version++
        }
    }), Object.assign(ji.prototype, {
        isInterleavedBuffer: !0,
        onUploadCallback: function () {},
        setArray: function (t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this
        },
        setDynamic: function (t) {
            return this.dynamic = t, this
        },
        copy: function (t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
        },
        copyAt: function (t, e, i) {
            t *= this.stride, i *= e.stride;
            for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
            return this
        },
        set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        onUpload: function (t) {
            return this.onUploadCallback = t, this
        }
    }), Object.defineProperties(Wi.prototype, {
        count: {
            get: function () {
                return this.data.count
            }
        },
        array: {
            get: function () {
                return this.data.array
            }
        }
    }), Object.assign(Wi.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this
        },
        setY: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this
        },
        setZ: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this
        },
        setW: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this
        },
        getX: function (t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function (t, e, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
        },
        setXYZ: function (t, e, i, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
        },
        setXYZW: function (t, e, i, n, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
        }
    }), qi.prototype = Object.create(kt.prototype), qi.prototype.constructor = qi, qi.prototype.isSpriteMaterial = !0, qi.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
    }, Xi.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: Xi,
        isSprite: !0,
        raycast: function () {
            var t = new b,
                e = new b,
                i = new b,
                n = new v,
                r = new v,
                a = new y,
                o = new b,
                s = new b,
                c = new b,
                h = new v,
                l = new v,
                u = new v;

            function p(t, e, i, o, s, c) {
                n.subVectors(t, i).addScalar(.5).multiply(o), void 0 !== s ? (r.x = c * n.x - s * n.y, r.y = s * n.x + c * n.y) : r.copy(n), t.copy(e), t.x += r.x, t.y += r.y, t.applyMatrix4(a)
            }
            return function (n, r) {
                e.setFromMatrixScale(this.matrixWorld), a.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), i.setFromMatrixPosition(this.modelViewMatrix);
                var d, f, m = this.material.rotation;
                0 !== m && (f = Math.cos(m), d = Math.sin(m));
                var g = this.center;
                p(o.set(-.5, -.5, 0), i, g, e, d, f), p(s.set(.5, -.5, 0), i, g, e, d, f), p(c.set(.5, .5, 0), i, g, e, d, f), h.set(0, 0), l.set(1, 0), u.set(1, 1);
                var y = n.ray.intersectTriangle(o, s, c, !1, t);
                if (null !== y || (p(s.set(-.5, .5, 0), i, g, e, d, f), l.set(0, 1), null !== (y = n.ray.intersectTriangle(o, c, s, !1, t)))) {
                    var x = n.ray.origin.distanceTo(t);
                    x < n.near || x > n.far || r.push({
                        distance: x,
                        point: t.clone(),
                        uv: Wt.getUV(t, o, s, c, h, l, u, new v),
                        face: null,
                        object: this
                    })
                }
            }
        }(),
        clone: function () {
            return new this.constructor(this.material).copy(this)
        },
        copy: function (t) {
            return ot.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
        }
    }), Yi.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: Yi,
        copy: function (t) {
            ot.prototype.copy.call(this, t, !1);
            for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this
        },
        addLevel: function (t, e) {
            void 0 === e && (e = 0), e = Math.abs(e);
            for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
            i.splice(n, 0, {
                distance: e,
                object: t
            }), this.add(t)
        },
        getObjectForDistance: function (t) {
            for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++);
            return e[i - 1].object
        },
        raycast: (Ri = new b, function (t, e) {
            Ri.setFromMatrixPosition(this.matrixWorld);
            var i = t.ray.origin.distanceTo(Ri);
            this.getObjectForDistance(i).raycast(t, e)
        }),
        update: function () {
            var t = new b,
                e = new b;
            return function (i) {
                var n = this.levels;
                if (n.length > 1) {
                    t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
                    var r = t.distanceTo(e);
                    n[0].object.visible = !0;
                    for (var a = 1, o = n.length; a < o && r >= n[a].distance; a++) n[a - 1].object.visible = !1, n[a].object.visible = !0;
                    for (; a < o; a++) n[a].object.visible = !1
                }
            }
        }(),
        toJSON: function (t) {
            var e = ot.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
                var a = i[n];
                e.object.levels.push({
                    object: a.object.uuid,
                    distance: a.distance
                })
            }
            return e
        }
    }), Ji.prototype = Object.assign(Object.create(Xt.prototype), {
        constructor: Ji,
        isSkinnedMesh: !0,
        bind: function (t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
        },
        pose: function () {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function () {
            for (var t = new R, e = this.geometry.attributes.skinWeight, i = 0, n = e.count; i < n; i++) {
                t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.w = e.getW(i);
                var r = 1 / t.manhattanLength();
                r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w)
            }
        },
        updateMatrixWorld: function (t) {
            Xt.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Object.assign(Zi.prototype, {
        calculateInverses: function () {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var i = new y;
                this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
            }
        },
        pose: function () {
            var t, e, i;
            for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: (Ci = new y, Oi = new y, function () {
            for (var t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, a = t.length; r < a; r++) {
                var o = t[r] ? t[r].matrixWorld : Oi;
                Ci.multiplyMatrices(o, e[r]), Ci.toArray(i, 16 * r)
            }
            void 0 !== n && (n.needsUpdate = !0)
        }),
        clone: function () {
            return new Zi(this.bones, this.boneInverses)
        },
        getBoneByName: function (t) {
            for (var e = 0, i = this.bones.length; e < i; e++) {
                var n = this.bones[e];
                if (n.name === t) return n
            }
        }
    }), Qi.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: Qi,
        isBone: !0
    }), Ki.prototype = Object.create(kt.prototype), Ki.prototype.constructor = Ki, Ki.prototype.isLineBasicMaterial = !0, Ki.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
    }, $i.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: $i,
        isLine: !0,
        computeLineDistances: (Ii = new b, Di = new b, function () {
            var t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    for (var e = t.attributes.position, i = [0], n = 1, r = e.count; n < r; n++) Ii.fromBufferAttribute(e, n - 1), Di.fromBufferAttribute(e, n), i[n] = i[n - 1], i[n] += Ii.distanceTo(Di);
                    t.addAttribute("lineDistance", new xt(i, 1))
                } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (t.isGeometry) {
                var a = t.vertices;
                for ((i = t.lineDistances)[0] = 0, n = 1, r = a.length; n < r; n++) i[n] = i[n - 1], i[n] += a[n - 1].distanceTo(a[n])
            }
            return this
        }),
        raycast: function () {
            var t = new y,
                e = new jt,
                i = new N;
            return function (n, r) {
                var a = n.linePrecision,
                    o = this.geometry,
                    s = this.matrixWorld;
                if (null === o.boundingSphere && o.computeBoundingSphere(), i.copy(o.boundingSphere), i.applyMatrix4(s), i.radius += a, !1 !== n.ray.intersectsSphere(i)) {
                    t.getInverse(s), e.copy(n.ray).applyMatrix4(t);
                    var c = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        h = c * c,
                        l = new b,
                        u = new b,
                        p = new b,
                        d = new b,
                        f = this && this.isLineSegments ? 2 : 1;
                    if (o.isBufferGeometry) {
                        var m = o.index,
                            g = o.attributes.position.array;
                        if (null !== m)
                            for (var v = m.array, y = 0, x = v.length - 1; y < x; y += f) {
                                var w = v[y],
                                    _ = v[y + 1];
                                if (l.fromArray(g, 3 * w), u.fromArray(g, 3 * _), !(e.distanceSqToSegment(l, u, d, p) > h)) d.applyMatrix4(this.matrixWorld), (E = n.ray.origin.distanceTo(d)) < n.near || E > n.far || r.push({
                                    distance: E,
                                    point: p.clone().applyMatrix4(this.matrixWorld),
                                    index: y,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            } else
                                for (y = 0, x = g.length / 3 - 1; y < x; y += f) {
                                    if (l.fromArray(g, 3 * y), u.fromArray(g, 3 * y + 3), !(e.distanceSqToSegment(l, u, d, p) > h)) d.applyMatrix4(this.matrixWorld), (E = n.ray.origin.distanceTo(d)) < n.near || E > n.far || r.push({
                                        distance: E,
                                        point: p.clone().applyMatrix4(this.matrixWorld),
                                        index: y,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                    } else if (o.isGeometry) {
                        var M = o.vertices,
                            S = M.length;
                        for (y = 0; y < S - 1; y += f) {
                            var E;
                            if (!(e.distanceSqToSegment(M[y], M[y + 1], d, p) > h)) d.applyMatrix4(this.matrixWorld), (E = n.ray.origin.distanceTo(d)) < n.near || E > n.far || r.push({
                                distance: E,
                                point: p.clone().applyMatrix4(this.matrixWorld),
                                index: y,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        }
                    }
                }
            }
        }(),
        copy: function (t) {
            return ot.prototype.copy.call(this, t), this.geometry.copy(t.geometry), this.material.copy(t.material), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        }
    }), tn.prototype = Object.assign(Object.create($i.prototype), {
        constructor: tn,
        isLineSegments: !0,
        computeLineDistances: function () {
            var t = new b,
                e = new b;
            return function () {
                var i = this.geometry;
                if (i.isBufferGeometry)
                    if (null === i.index) {
                        for (var n = i.attributes.position, r = [], a = 0, o = n.count; a < o; a += 2) t.fromBufferAttribute(n, a), e.fromBufferAttribute(n, a + 1), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + t.distanceTo(e);
                        i.addAttribute("lineDistance", new xt(r, 1))
                    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else if (i.isGeometry) {
                    var s = i.vertices;
                    for (r = i.lineDistances, a = 0, o = s.length; a < o; a += 2) t.copy(s[a]), e.copy(s[a + 1]), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + t.distanceTo(e)
                }
                return this
            }
        }()
    }), en.prototype = Object.assign(Object.create($i.prototype), {
        constructor: en,
        isLineLoop: !0
    }), nn.prototype = Object.create(kt.prototype), nn.prototype.constructor = nn, nn.prototype.isPointsMaterial = !0, nn.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
    }, rn.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: rn,
        isPoints: !0,
        raycast: function () {
            var t = new y,
                e = new jt,
                i = new N;
            return function (n, r) {
                var a = this,
                    o = this.geometry,
                    s = this.matrixWorld,
                    c = n.params.Points.threshold;
                if (null === o.boundingSphere && o.computeBoundingSphere(), i.copy(o.boundingSphere), i.applyMatrix4(s), i.radius += c, !1 !== n.ray.intersectsSphere(i)) {
                    t.getInverse(s), e.copy(n.ray).applyMatrix4(t);
                    var h = c / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        l = h * h,
                        u = new b,
                        p = new b;
                    if (o.isBufferGeometry) {
                        var d = o.index,
                            f = o.attributes.position.array;
                        if (null !== d)
                            for (var m = d.array, g = 0, v = m.length; g < v; g++) {
                                var y = m[g];
                                u.fromArray(f, 3 * y), _(u, y)
                            } else {
                                g = 0;
                                for (var x = f.length / 3; g < x; g++) u.fromArray(f, 3 * g), _(u, g)
                            }
                    } else {
                        var w = o.vertices;
                        for (g = 0, x = w.length; g < x; g++) _(w[g], g)
                    }
                }

                function _(t, i) {
                    var o = e.distanceSqToPoint(t);
                    if (o < l) {
                        e.closestPointToPoint(t, p), p.applyMatrix4(s);
                        var c = n.ray.origin.distanceTo(p);
                        if (c < n.near || c > n.far) return;
                        r.push({
                            distance: c,
                            distanceToRay: Math.sqrt(o),
                            point: p.clone(),
                            index: i,
                            face: null,
                            object: a
                        })
                    }
                }
            }
        }(),
        clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), an.prototype = Object.assign(Object.create(P.prototype), {
        constructor: an,
        isVideoTexture: !0,
        update: function () {
            var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }), on.prototype = Object.create(P.prototype), on.prototype.constructor = on, on.prototype.isCompressedTexture = !0, sn.prototype = Object.create(P.prototype), sn.prototype.constructor = sn, sn.prototype.isCanvasTexture = !0, cn.prototype = Object.create(P.prototype), cn.prototype.constructor = cn, cn.prototype.isDepthTexture = !0, hn.prototype = Object.create(P.prototype), hn.prototype.constructor = hn, hn.prototype.isDataTexture = !0, hn.prototype.isCfxTexture = !0, ln.prototype = Object.create(St.prototype), ln.prototype.constructor = ln, un.prototype = Object.create(lt.prototype), un.prototype.constructor = un, pn.prototype = Object.create(St.prototype), pn.prototype.constructor = pn, dn.prototype = Object.create(lt.prototype), dn.prototype.constructor = dn, fn.prototype = Object.create(St.prototype), fn.prototype.constructor = fn, mn.prototype = Object.create(lt.prototype), mn.prototype.constructor = mn, gn.prototype = Object.create(fn.prototype), gn.prototype.constructor = gn, vn.prototype = Object.create(lt.prototype), vn.prototype.constructor = vn, yn.prototype = Object.create(fn.prototype), yn.prototype.constructor = yn, xn.prototype = Object.create(lt.prototype), xn.prototype.constructor = xn, bn.prototype = Object.create(fn.prototype), bn.prototype.constructor = bn, wn.prototype = Object.create(lt.prototype), wn.prototype.constructor = wn, _n.prototype = Object.create(fn.prototype), _n.prototype.constructor = _n, Mn.prototype = Object.create(lt.prototype), Mn.prototype.constructor = Mn, Sn.prototype = Object.create(St.prototype), Sn.prototype.constructor = Sn, En.prototype = Object.create(lt.prototype), En.prototype.constructor = En, Tn.prototype = Object.create(St.prototype), Tn.prototype.constructor = Tn, Ln.prototype = Object.create(lt.prototype), Ln.prototype.constructor = Ln, An.prototype = Object.create(St.prototype), An.prototype.constructor = An;
    var Pn = function (t, e, i) {
        i = i || 2;
        var n, r, a, o, s, c, h, l = e && e.length,
            u = l ? e[0] * i : t.length,
            p = Rn(t, 0, u, i, !0),
            d = [];
        if (!p) return d;
        if (l && (p = function (t, e, i, n) {
                var r, a, o, s, c, h = [];
                for (r = 0, a = e.length; r < a; r++) o = e[r] * n, s = r < a - 1 ? e[r + 1] * n : t.length, (c = Rn(t, o, s, n, !1)) === c.next && (c.steiner = !0), h.push(Fn(c));
                for (h.sort(Bn), r = 0; r < h.length; r++) Un(h[r], i), i = Cn(i, i.next);
                return i
            }(t, e, p, i)), t.length > 80 * i) {
            n = a = t[0], r = o = t[1];
            for (var f = i; f < u; f += i)(s = t[f]) < n && (n = s), (c = t[f + 1]) < r && (r = c), s > a && (a = s), c > o && (o = c);
            h = 0 !== (h = Math.max(a - n, o - r)) ? 1 / h : 0
        }
        return On(p, d, i, n, r, h), d
    };

    function Rn(t, e, i, n, r) {
        var a, o;
        if (r === function (t, e, i, n) {
                for (var r = 0, a = e, o = i - n; a < i; a += n) r += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a;
                return r
            }(t, e, i, n) > 0)
            for (a = e; a < i; a += n) o = Yn(a, t[a], t[a + 1], o);
        else
            for (a = i - n; a >= e; a -= n) o = Yn(a, t[a], t[a + 1], o);
        return o && jn(o, o.next) && (Jn(o), o = o.next), o
    }

    function Cn(t, e) {
        if (!t) return t;
        e || (e = t);
        var i, n = t;
        do {
            if (i = !1, n.steiner || !jn(n, n.next) && 0 !== Vn(n.prev, n, n.next)) n = n.next;
            else {
                if (Jn(n), (n = e = n.prev) === n.next) break;
                i = !0
            }
        } while (i || n !== e);
        return e
    }

    function On(t, e, i, n, r, a, o) {
        if (t) {
            !o && a && function (t, e, i, n) {
                var r = t;
                do {
                    null === r.z && (r.z = Gn(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
                } while (r !== t);
                r.prevZ.nextZ = null, r.prevZ = null,
                    function (t) {
                        var e, i, n, r, a, o, s, c, h = 1;
                        do {
                            for (i = t, t = null, a = null, o = 0; i;) {
                                for (o++, n = i, s = 0, e = 0; e < h && (s++, n = n.nextZ); e++);
                                for (c = h; s > 0 || c > 0 && n;) 0 !== s && (0 === c || !n || i.z <= n.z) ? (r = i, i = i.nextZ, s--) : (r = n, n = n.nextZ, c--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                                i = n
                            }
                            a.nextZ = null, h *= 2
                        } while (o > 1)
                    }(r)
            }(t, n, r, a);
            for (var s, c, h = t; t.prev !== t.next;)
                if (s = t.prev, c = t.next, a ? Dn(t, n, r, a) : In(t)) e.push(s.i / i), e.push(t.i / i), e.push(c.i / i), Jn(t), t = c.next, h = c.next;
                else if ((t = c) === h) {
                o ? 1 === o ? On(t = zn(t, e, i), e, i, n, r, a, 2) : 2 === o && Nn(t, e, i, n, r, a) : On(Cn(t), e, i, n, r, a, 1);
                break
            }
        }
    }

    function In(t) {
        var e = t.prev,
            i = t,
            n = t.next;
        if (Vn(e, i, n) >= 0) return !1;
        for (var r = t.next.next; r !== t.prev;) {
            if (Hn(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && Vn(r.prev, r, r.next) >= 0) return !1;
            r = r.next
        }
        return !0
    }

    function Dn(t, e, i, n) {
        var r = t.prev,
            a = t,
            o = t.next;
        if (Vn(r, a, o) >= 0) return !1;
        for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, c = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, h = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, l = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = Gn(s, c, e, i, n), p = Gn(h, l, e, i, n), d = t.nextZ; d && d.z <= p;) {
            if (d !== t.prev && d !== t.next && Hn(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && Vn(d.prev, d, d.next) >= 0) return !1;
            d = d.nextZ
        }
        for (d = t.prevZ; d && d.z >= u;) {
            if (d !== t.prev && d !== t.next && Hn(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && Vn(d.prev, d, d.next) >= 0) return !1;
            d = d.prevZ
        }
        return !0
    }

    function zn(t, e, i) {
        var n = t;
        do {
            var r = n.prev,
                a = n.next.next;
            !jn(r, a) && Wn(r, n, n.next, a) && qn(r, a) && qn(a, r) && (e.push(r.i / i), e.push(n.i / i), e.push(a.i / i), Jn(n), Jn(n.next), n = t = a), n = n.next
        } while (n !== t);
        return n
    }

    function Nn(t, e, i, n, r, a) {
        var o = t;
        do {
            for (var s = o.next.next; s !== o.prev;) {
                if (o.i !== s.i && kn(o, s)) {
                    var c = Xn(o, s);
                    return o = Cn(o, o.next), c = Cn(c, c.next), On(o, e, i, n, r, a), void On(c, e, i, n, r, a)
                }
                s = s.next
            }
            o = o.next
        } while (o !== t)
    }

    function Bn(t, e) {
        return t.x - e.x
    }

    function Un(t, e) {
        if (e = function (t, e) {
                var i, n = e,
                    r = t.x,
                    a = t.y,
                    o = -1 / 0;
                do {
                    if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
                        var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                        if (s <= r && s > o) {
                            if (o = s, s === r) {
                                if (a === n.y) return n;
                                if (a === n.next.y) return n.next
                            }
                            i = n.x < n.next.x ? n : n.next
                        }
                    }
                    n = n.next
                } while (n !== e);
                if (!i) return null;
                if (r === o) return i.prev;
                var c, h = i,
                    l = i.x,
                    u = i.y,
                    p = 1 / 0;
                n = i.next;
                for (; n !== h;) r >= n.x && n.x >= l && r !== n.x && Hn(a < u ? r : o, a, l, u, a < u ? o : r, a, n.x, n.y) && ((c = Math.abs(a - n.y) / (r - n.x)) < p || c === p && n.x > i.x) && qn(n, t) && (i = n, p = c), n = n.next;
                return i
            }(t, e)) {
            var i = Xn(e, t);
            Cn(i, i.next)
        }
    }

    function Gn(t, e, i, n, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }

    function Fn(t) {
        var e = t,
            i = t;
        do {
            e.x < i.x && (i = e), e = e.next
        } while (e !== t);
        return i
    }

    function Hn(t, e, i, n, r, a, o, s) {
        return (r - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (n - s) - (i - o) * (e - s) >= 0 && (i - o) * (a - s) - (r - o) * (n - s) >= 0
    }

    function kn(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && ! function (t, e) {
            var i = t;
            do {
                if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Wn(i, i.next, t, e)) return !0;
                i = i.next
            } while (i !== t);
            return !1
        }(t, e) && qn(t, e) && qn(e, t) && function (t, e) {
            var i = t,
                n = !1,
                r = (t.x + e.x) / 2,
                a = (t.y + e.y) / 2;
            do {
                i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
            } while (i !== t);
            return n
        }(t, e)
    }

    function Vn(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
    }

    function jn(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function Wn(t, e, i, n) {
        return !!(jn(t, e) && jn(i, n) || jn(t, n) && jn(i, e)) || Vn(t, e, i) > 0 != Vn(t, e, n) > 0 && Vn(i, n, t) > 0 != Vn(i, n, e) > 0
    }

    function qn(t, e) {
        return Vn(t.prev, t, t.next) < 0 ? Vn(t, e, t.next) >= 0 && Vn(t, t.prev, e) >= 0 : Vn(t, e, t.prev) < 0 || Vn(t, t.next, e) < 0
    }

    function Xn(t, e) {
        var i = new Zn(t.i, t.x, t.y),
            n = new Zn(e.i, e.x, e.y),
            r = t.next,
            a = e.prev;
        return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, a.next = n, n.prev = a, n
    }

    function Yn(t, e, i, n) {
        var r = new Zn(t, e, i);
        return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
    }

    function Jn(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function Zn(t, e, i) {
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }
    var Qn = {
        area: function (t) {
            for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
            return .5 * i
        },
        isClockWise: function (t) {
            return Qn.area(t) < 0
        },
        triangulateShape: function (t, e) {
            var i = [],
                n = [],
                r = [];
            Kn(t), $n(i, t);
            var a = t.length;
            e.forEach(Kn);
            for (var o = 0; o < e.length; o++) n.push(a), a += e[o].length, $n(i, e[o]);
            var s = Pn(i, n);
            for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
            return r
        }
    };

    function Kn(t) {
        var e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop()
    }

    function $n(t, e) {
        for (var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y)
    }

    function tr(t, e) {
        lt.call(this), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: t,
            options: e
        }, this.fromBufferGeometry(new er(t, e)), this.mergeVertices()
    }

    function er(t, e) {
        St.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
            shapes: t,
            options: e
        }, t = Array.isArray(t) ? t : [t];
        for (var i = this, n = [], r = [], a = 0, o = t.length; a < o; a++) {
            s(t[a])
        }

        function s(t) {
            var a = [],
                o = void 0 !== e.curveSegments ? e.curveSegments : 12,
                s = void 0 !== e.steps ? e.steps : 1,
                c = void 0 !== e.depth ? e.depth : 100,
                h = void 0 === e.bevelEnabled || e.bevelEnabled,
                l = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                u = void 0 !== e.bevelSize ? e.bevelSize : l - 2,
                p = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
                d = e.extrudePath,
                f = void 0 !== e.UVGenerator ? e.UVGenerator : ir;
            void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = e.amount);
            var m, g, y, x, w, _, M, S, E = !1;
            d && (m = d.getSpacedPoints(s), E = !0, h = !1, g = d.computeFrenetFrames(s, !1), y = new b, x = new b, w = new b), h || (p = 0, l = 0, u = 0);
            var T = t.extractPoints(o),
                L = T.shape,
                A = T.holes;
            if (!Qn.isClockWise(L))
                for (L = L.reverse(), M = 0, S = A.length; M < S; M++) _ = A[M], Qn.isClockWise(_) && (A[M] = _.reverse());
            var P = Qn.triangulateShape(L, A),
                R = L;
            for (M = 0, S = A.length; M < S; M++) _ = A[M], L = L.concat(_);

            function C(t, e, i) {
                return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t)
            }
            var O, I, D, z, N, B, U = L.length,
                G = P.length;

            function F(t, e, i) {
                var n, r, a, o = t.x - e.x,
                    s = t.y - e.y,
                    c = i.x - t.x,
                    h = i.y - t.y,
                    l = o * o + s * s,
                    u = o * h - s * c;
                if (Math.abs(u) > Number.EPSILON) {
                    var p = Math.sqrt(l),
                        d = Math.sqrt(c * c + h * h),
                        f = e.x - s / p,
                        m = e.y + o / p,
                        g = ((i.x - h / d - f) * h - (i.y + c / d - m) * c) / (o * h - s * c),
                        y = (n = f + o * g - t.x) * n + (r = m + s * g - t.y) * r;
                    if (y <= 2) return new v(n, r);
                    a = Math.sqrt(y / 2)
                } else {
                    var x = !1;
                    o > Number.EPSILON ? c > Number.EPSILON && (x = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (x = !0) : Math.sign(s) === Math.sign(h) && (x = !0), x ? (n = -s, r = o, a = Math.sqrt(l)) : (n = o, r = s, a = Math.sqrt(l / 2))
                }
                return new v(n / a, r / a)
            }
            for (var H = [], k = 0, V = R.length, j = V - 1, W = k + 1; k < V; k++, j++, W++) j === V && (j = 0), W === V && (W = 0), H[k] = F(R[k], R[j], R[W]);
            var q, X, Y = [],
                J = H.concat();
            for (M = 0, S = A.length; M < S; M++) {
                for (_ = A[M], q = [], k = 0, j = (V = _.length) - 1, W = k + 1; k < V; k++, j++, W++) j === V && (j = 0), W === V && (W = 0), q[k] = F(_[k], _[j], _[W]);
                Y.push(q), J = J.concat(q)
            }
            for (O = 0; O < p; O++) {
                for (D = O / p, z = l * Math.cos(D * Math.PI / 2), I = u * Math.sin(D * Math.PI / 2), k = 0, V = R.length; k < V; k++) Q((N = C(R[k], H[k], I)).x, N.y, -z);
                for (M = 0, S = A.length; M < S; M++)
                    for (_ = A[M], q = Y[M], k = 0, V = _.length; k < V; k++) Q((N = C(_[k], q[k], I)).x, N.y, -z)
            }
            for (I = u, k = 0; k < U; k++) N = h ? C(L[k], J[k], I) : L[k], E ? (x.copy(g.normals[0]).multiplyScalar(N.x), y.copy(g.binormals[0]).multiplyScalar(N.y), w.copy(m[0]).add(x).add(y), Q(w.x, w.y, w.z)) : Q(N.x, N.y, 0);
            for (X = 1; X <= s; X++)
                for (k = 0; k < U; k++) N = h ? C(L[k], J[k], I) : L[k], E ? (x.copy(g.normals[X]).multiplyScalar(N.x), y.copy(g.binormals[X]).multiplyScalar(N.y), w.copy(m[X]).add(x).add(y), Q(w.x, w.y, w.z)) : Q(N.x, N.y, c / s * X);
            for (O = p - 1; O >= 0; O--) {
                for (D = O / p, z = l * Math.cos(D * Math.PI / 2), I = u * Math.sin(D * Math.PI / 2), k = 0, V = R.length; k < V; k++) Q((N = C(R[k], H[k], I)).x, N.y, c + z);
                for (M = 0, S = A.length; M < S; M++)
                    for (_ = A[M], q = Y[M], k = 0, V = _.length; k < V; k++) N = C(_[k], q[k], I), E ? Q(N.x, N.y + m[s - 1].y, m[s - 1].x + z) : Q(N.x, N.y, c + z)
            }

            function Z(t, e) {
                var i, n;
                for (k = t.length; --k >= 0;) {
                    i = k, (n = k - 1) < 0 && (n = t.length - 1);
                    var r = 0,
                        a = s + 2 * p;
                    for (r = 0; r < a; r++) {
                        var o = U * r,
                            c = U * (r + 1);
                        $(e + i + o, e + n + o, e + n + c, e + i + c)
                    }
                }
            }

            function Q(t, e, i) {
                a.push(t), a.push(e), a.push(i)
            }

            function K(t, e, r) {
                tt(t), tt(e), tt(r);
                var a = n.length / 3,
                    o = f.generateTopUV(i, n, a - 3, a - 2, a - 1);
                et(o[0]), et(o[1]), et(o[2])
            }

            function $(t, e, r, a) {
                tt(t), tt(e), tt(a), tt(e), tt(r), tt(a);
                var o = n.length / 3,
                    s = f.generateSideWallUV(i, n, o - 6, o - 3, o - 2, o - 1);
                et(s[0]), et(s[1]), et(s[3]), et(s[1]), et(s[2]), et(s[3])
            }

            function tt(t) {
                n.push(a[3 * t + 0]), n.push(a[3 * t + 1]), n.push(a[3 * t + 2])
            }

            function et(t) {
                r.push(t.x), r.push(t.y)
            }! function () {
                var t = n.length / 3;
                if (h) {
                    var e = 0,
                        r = U * e;
                    for (k = 0; k < G; k++) K((B = P[k])[2] + r, B[1] + r, B[0] + r);
                    for (r = U * (e = s + 2 * p), k = 0; k < G; k++) K((B = P[k])[0] + r, B[1] + r, B[2] + r)
                } else {
                    for (k = 0; k < G; k++) K((B = P[k])[2], B[1], B[0]);
                    for (k = 0; k < G; k++) K((B = P[k])[0] + U * s, B[1] + U * s, B[2] + U * s)
                }
                i.addGroup(t, n.length / 3 - t, 0)
            }(),
            function () {
                var t = n.length / 3,
                    e = 0;
                for (Z(R, e), e += R.length, M = 0, S = A.length; M < S; M++) Z(_ = A[M], e), e += _.length;
                i.addGroup(t, n.length / 3 - t, 1)
            }()
        }
        this.addAttribute("position", new xt(n, 3)), this.addAttribute("uv", new xt(r, 2)), this.computeVertexNormals()
    }
    tr.prototype = Object.create(lt.prototype), tr.prototype.constructor = tr, tr.prototype.toJSON = function () {
        var t = lt.prototype.toJSON.call(this);
        return nr(this.parameters.shapes, this.parameters.options, t)
    }, er.prototype = Object.create(St.prototype), er.prototype.constructor = er, er.prototype.toJSON = function () {
        var t = St.prototype.toJSON.call(this);
        return nr(this.parameters.shapes, this.parameters.options, t)
    };
    var ir = {
        generateTopUV: function (t, e, i, n, r) {
            var a = e[3 * i],
                o = e[3 * i + 1],
                s = e[3 * n],
                c = e[3 * n + 1],
                h = e[3 * r],
                l = e[3 * r + 1];
            return [new v(a, o), new v(s, c), new v(h, l)]
        },
        generateSideWallUV: function (t, e, i, n, r, a) {
            var o = e[3 * i],
                s = e[3 * i + 1],
                c = e[3 * i + 2],
                h = e[3 * n],
                l = e[3 * n + 1],
                u = e[3 * n + 2],
                p = e[3 * r],
                d = e[3 * r + 1],
                f = e[3 * r + 2],
                m = e[3 * a],
                g = e[3 * a + 1],
                y = e[3 * a + 2];
            return Math.abs(s - l) < .01 ? [new v(o, 1 - c), new v(h, 1 - u), new v(p, 1 - f), new v(m, 1 - y)] : [new v(s, 1 - c), new v(l, 1 - u), new v(d, 1 - f), new v(g, 1 - y)]
        }
    };

    function nr(t, e, i) {
        if (i.shapes = [], Array.isArray(t))
            for (var n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                i.shapes.push(a.uuid)
            } else i.shapes.push(t.uuid);
        return void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()), i
    }

    function rr(t, e) {
        lt.call(this), this.type = "TextGeometry", this.parameters = {
            text: t,
            parameters: e
        }, this.fromBufferGeometry(new ar(t, e)), this.mergeVertices()
    }

    function ar(t, e) {
        var i = (e = e || {}).font;
        if (!i || !i.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new lt;
        var n = i.generateShapes(t, e.size);
        e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), er.call(this, n, e), this.type = "TextBufferGeometry"
    }

    function or(t, e, i, n, r, a, o) {
        lt.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, this.fromBufferGeometry(new sr(t, e, i, n, r, a, o)), this.mergeVertices()
    }

    function sr(t, e, i, n, r, a, o) {
        St.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var s, c, h = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
            l = 0,
            u = [],
            p = new b,
            d = new b,
            f = [],
            m = [],
            g = [],
            v = [];
        for (c = 0; c <= i; c++) {
            var y = [],
                x = c / i;
            for (s = 0; s <= e; s++) {
                var w = s / e;
                p.x = -t * Math.cos(n + w * r) * Math.sin(a + x * o), p.y = t * Math.cos(a + x * o), p.z = t * Math.sin(n + w * r) * Math.sin(a + x * o), m.push(p.x, p.y, p.z), d.set(p.x, p.y, p.z).normalize(), g.push(d.x, d.y, d.z), v.push(w, 1 - x), y.push(l++)
            }
            u.push(y)
        }
        for (c = 0; c < i; c++)
            for (s = 0; s < e; s++) {
                var _ = u[c][s + 1],
                    M = u[c][s],
                    S = u[c + 1][s],
                    E = u[c + 1][s + 1];
                (0 !== c || a > 0) && f.push(_, M, E), (c !== i - 1 || h < Math.PI) && f.push(M, S, E)
            }
        this.setIndex(f), this.addAttribute("position", new xt(m, 3)), this.addAttribute("normal", new xt(g, 3)), this.addAttribute("uv", new xt(v, 2))
    }

    function cr(t, e, i, n, r, a) {
        lt.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        }, this.fromBufferGeometry(new hr(t, e, i, n, r, a)), this.mergeVertices()
    }

    function hr(t, e, i, n, r, a) {
        St.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8;
        var o, s, c, h = [],
            l = [],
            u = [],
            p = [],
            d = t,
            f = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1),
            m = new b,
            g = new v;
        for (s = 0; s <= n; s++) {
            for (c = 0; c <= i; c++) o = r + c / i * a, m.x = d * Math.cos(o), m.y = d * Math.sin(o), l.push(m.x, m.y, m.z), u.push(0, 0, 1), g.x = (m.x / e + 1) / 2, g.y = (m.y / e + 1) / 2, p.push(g.x, g.y);
            d += f
        }
        for (s = 0; s < n; s++) {
            var y = s * (i + 1);
            for (c = 0; c < i; c++) {
                var x = o = c + y,
                    w = o + i + 1,
                    _ = o + i + 2,
                    M = o + 1;
                h.push(x, w, M), h.push(w, _, M)
            }
        }
        this.setIndex(h), this.addAttribute("position", new xt(l, 3)), this.addAttribute("normal", new xt(u, 3)), this.addAttribute("uv", new xt(p, 2))
    }

    function lr(t, e, i, n) {
        lt.call(this), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
        }, this.fromBufferGeometry(new ur(t, e, i, n)), this.mergeVertices()
    }

    function ur(t, e, i, n) {
        St.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
        }, e = Math.floor(e) || 12, i = i || 0, n = n || 2 * Math.PI, n = g.clamp(n, 0, 2 * Math.PI);
        var r, a, o, s = [],
            c = [],
            h = [],
            l = 1 / e,
            u = new b,
            p = new v;
        for (a = 0; a <= e; a++) {
            var d = i + a * l * n,
                f = Math.sin(d),
                m = Math.cos(d);
            for (o = 0; o <= t.length - 1; o++) u.x = t[o].x * f, u.y = t[o].y, u.z = t[o].x * m, c.push(u.x, u.y, u.z), p.x = a / e, p.y = o / (t.length - 1), h.push(p.x, p.y)
        }
        for (a = 0; a < e; a++)
            for (o = 0; o < t.length - 1; o++) {
                var y = r = o + a * t.length,
                    x = r + t.length,
                    w = r + t.length + 1,
                    _ = r + 1;
                s.push(y, x, _), s.push(x, w, _)
            }
        if (this.setIndex(s), this.addAttribute("position", new xt(c, 3)), this.addAttribute("uv", new xt(h, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
            var M = this.attributes.normal.array,
                S = new b,
                E = new b,
                T = new b;
            for (r = e * t.length * 3, a = 0, o = 0; a < t.length; a++, o += 3) S.x = M[o + 0], S.y = M[o + 1], S.z = M[o + 2], E.x = M[r + o + 0], E.y = M[r + o + 1], E.z = M[r + o + 2], T.addVectors(S, E).normalize(), M[o + 0] = M[r + o + 0] = T.x, M[o + 1] = M[r + o + 1] = T.y, M[o + 2] = M[r + o + 2] = T.z
        }
    }

    function pr(t, e) {
        lt.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
            shapes: t,
            curveSegments: e
        }, this.fromBufferGeometry(new dr(t, e)), this.mergeVertices()
    }

    function dr(t, e) {
        St.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
            shapes: t,
            curveSegments: e
        }, e = e || 12;
        var i = [],
            n = [],
            r = [],
            a = [],
            o = 0,
            s = 0;
        if (!1 === Array.isArray(t)) h(t);
        else
            for (var c = 0; c < t.length; c++) h(t[c]), this.addGroup(o, s, c), o += s, s = 0;

        function h(t) {
            var o, c, h, l = n.length / 3,
                u = t.extractPoints(e),
                p = u.shape,
                d = u.holes;
            for (!1 === Qn.isClockWise(p) && (p = p.reverse()), o = 0, c = d.length; o < c; o++) h = d[o], !0 === Qn.isClockWise(h) && (d[o] = h.reverse());
            var f = Qn.triangulateShape(p, d);
            for (o = 0, c = d.length; o < c; o++) h = d[o], p = p.concat(h);
            for (o = 0, c = p.length; o < c; o++) {
                var m = p[o];
                n.push(m.x, m.y, 0), r.push(0, 0, 1), a.push(m.x, m.y)
            }
            for (o = 0, c = f.length; o < c; o++) {
                var g = f[o],
                    v = g[0] + l,
                    y = g[1] + l,
                    x = g[2] + l;
                i.push(v, y, x), s += 3
            }
        }
        this.setIndex(i), this.addAttribute("position", new xt(n, 3)), this.addAttribute("normal", new xt(r, 3)), this.addAttribute("uv", new xt(a, 2))
    }

    function fr(t, e) {
        if (e.shapes = [], Array.isArray(t))
            for (var i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.shapes.push(r.uuid)
            } else e.shapes.push(t.uuid);
        return e
    }

    function mr(t, e) {
        St.call(this), this.type = "EdgesGeometry", this.parameters = {
            thresholdAngle: e
        }, e = void 0 !== e ? e : 1;
        var i, n, r, a, o = [],
            s = Math.cos(g.DEG2RAD * e),
            c = [0, 0],
            h = {},
            l = ["a", "b", "c"];
        t.isBufferGeometry ? (a = new lt).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
        for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
            for (var m = p[d], v = 0; v < 3; v++) i = m[l[v]], n = m[l[(v + 1) % 3]], c[0] = Math.min(i, n), c[1] = Math.max(i, n), void 0 === h[r = c[0] + "," + c[1]] ? h[r] = {
                index1: c[0],
                index2: c[1],
                face1: d,
                face2: void 0
            } : h[r].face2 = d;
        for (r in h) {
            var y = h[r];
            if (void 0 === y.face2 || p[y.face1].normal.dot(p[y.face2].normal) <= s) {
                var x = u[y.index1];
                o.push(x.x, x.y, x.z), x = u[y.index2], o.push(x.x, x.y, x.z)
            }
        }
        this.addAttribute("position", new xt(o, 3))
    }

    function gr(t, e, i, n, r, a, o, s) {
        lt.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        }, this.fromBufferGeometry(new vr(t, e, i, n, r, a, o, s)), this.mergeVertices()
    }

    function vr(t, e, i, n, r, a, o, s) {
        St.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        };
        var c = this;
        t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, i = i || 1, n = Math.floor(n) || 8, r = Math.floor(r) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
        var h = [],
            l = [],
            u = [],
            p = [],
            d = 0,
            f = [],
            m = i / 2,
            g = 0;

        function y(i) {
            var r, a, f, y = new v,
                x = new b,
                w = 0,
                _ = !0 === i ? t : e,
                M = !0 === i ? 1 : -1;
            for (a = d, r = 1; r <= n; r++) l.push(0, m * M, 0), u.push(0, M, 0), p.push(.5, .5), d++;
            for (f = d, r = 0; r <= n; r++) {
                var S = r / n * s + o,
                    E = Math.cos(S),
                    T = Math.sin(S);
                x.x = _ * T, x.y = m * M, x.z = _ * E, l.push(x.x, x.y, x.z), u.push(0, M, 0), y.x = .5 * E + .5, y.y = .5 * T * M + .5, p.push(y.x, y.y), d++
            }
            for (r = 0; r < n; r++) {
                var L = a + r,
                    A = f + r;
                !0 === i ? h.push(A, A + 1, L) : h.push(A + 1, A, L), w += 3
            }
            c.addGroup(g, w, !0 === i ? 1 : 2), g += w
        }! function () {
            var a, v, y = new b,
                x = new b,
                w = 0,
                _ = (e - t) / i;
            for (v = 0; v <= r; v++) {
                var M = [],
                    S = v / r,
                    E = S * (e - t) + t;
                for (a = 0; a <= n; a++) {
                    var T = a / n,
                        L = T * s + o,
                        A = Math.sin(L),
                        P = Math.cos(L);
                    x.x = E * A, x.y = -S * i + m, x.z = E * P, l.push(x.x, x.y, x.z), y.set(A, _, P).normalize(), u.push(y.x, y.y, y.z), p.push(T, 1 - S), M.push(d++)
                }
                f.push(M)
            }
            for (a = 0; a < n; a++)
                for (v = 0; v < r; v++) {
                    var R = f[v][a],
                        C = f[v + 1][a],
                        O = f[v + 1][a + 1],
                        I = f[v][a + 1];
                    h.push(R, C, I), h.push(C, O, I), w += 6
                }
            c.addGroup(g, w, 0), g += w
        }(), !1 === a && (t > 0 && y(!0), e > 0 && y(!1)), this.setIndex(h), this.addAttribute("position", new xt(l, 3)), this.addAttribute("normal", new xt(u, 3)), this.addAttribute("uv", new xt(p, 2))
    }

    function yr(t, e, i, n, r, a, o) {
        gr.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function xr(t, e, i, n, r, a, o) {
        vr.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function br(t, e, i, n) {
        lt.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
        }, this.fromBufferGeometry(new wr(t, e, i, n)), this.mergeVertices()
    }

    function wr(t, e, i, n) {
        St.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
        }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI;
        var r, a, o = [],
            s = [],
            c = [],
            h = [],
            l = new b,
            u = new v;
        for (s.push(0, 0, 0), c.push(0, 0, 1), h.push(.5, .5), a = 0, r = 3; a <= e; a++, r += 3) {
            var p = i + a / e * n;
            l.x = t * Math.cos(p), l.y = t * Math.sin(p), s.push(l.x, l.y, l.z), c.push(0, 0, 1), u.x = (s[r] / t + 1) / 2, u.y = (s[r + 1] / t + 1) / 2, h.push(u.x, u.y)
        }
        for (r = 1; r <= e; r++) o.push(r, r + 1, 0);
        this.setIndex(o), this.addAttribute("position", new xt(s, 3)), this.addAttribute("normal", new xt(c, 3)), this.addAttribute("uv", new xt(h, 2))
    }
    rr.prototype = Object.create(lt.prototype), rr.prototype.constructor = rr, ar.prototype = Object.create(er.prototype), ar.prototype.constructor = ar, or.prototype = Object.create(lt.prototype), or.prototype.constructor = or, sr.prototype = Object.create(St.prototype), sr.prototype.constructor = sr, cr.prototype = Object.create(lt.prototype), cr.prototype.constructor = cr, hr.prototype = Object.create(St.prototype), hr.prototype.constructor = hr, lr.prototype = Object.create(lt.prototype), lr.prototype.constructor = lr, ur.prototype = Object.create(St.prototype), ur.prototype.constructor = ur, pr.prototype = Object.create(lt.prototype), pr.prototype.constructor = pr, pr.prototype.toJSON = function () {
        var t = lt.prototype.toJSON.call(this);
        return fr(this.parameters.shapes, t)
    }, dr.prototype = Object.create(St.prototype), dr.prototype.constructor = dr, dr.prototype.toJSON = function () {
        var t = St.prototype.toJSON.call(this);
        return fr(this.parameters.shapes, t)
    }, mr.prototype = Object.create(St.prototype), mr.prototype.constructor = mr, gr.prototype = Object.create(lt.prototype), gr.prototype.constructor = gr, vr.prototype = Object.create(St.prototype), vr.prototype.constructor = vr, yr.prototype = Object.create(gr.prototype), yr.prototype.constructor = yr, xr.prototype = Object.create(vr.prototype), xr.prototype.constructor = xr, br.prototype = Object.create(lt.prototype), br.prototype.constructor = br, wr.prototype = Object.create(St.prototype), wr.prototype.constructor = wr;
    var _r = Object.freeze({
        WireframeGeometry: ln,
        ParametricGeometry: un,
        ParametricBufferGeometry: pn,
        TetrahedronGeometry: mn,
        TetrahedronBufferGeometry: gn,
        OctahedronGeometry: vn,
        OctahedronBufferGeometry: yn,
        IcosahedronGeometry: xn,
        IcosahedronBufferGeometry: bn,
        DodecahedronGeometry: wn,
        DodecahedronBufferGeometry: _n,
        PolyhedronGeometry: dn,
        PolyhedronBufferGeometry: fn,
        TubeGeometry: Mn,
        TubeBufferGeometry: Sn,
        TorusKnotGeometry: En,
        TorusKnotBufferGeometry: Tn,
        TorusGeometry: Ln,
        TorusBufferGeometry: An,
        TextGeometry: rr,
        TextBufferGeometry: ar,
        SphereGeometry: or,
        SphereBufferGeometry: sr,
        RingGeometry: cr,
        RingBufferGeometry: hr,
        PlaneGeometry: Lt,
        PlaneBufferGeometry: At,
        LatheGeometry: lr,
        LatheBufferGeometry: ur,
        ShapeGeometry: pr,
        ShapeBufferGeometry: dr,
        ExtrudeGeometry: tr,
        ExtrudeBufferGeometry: er,
        EdgesGeometry: mr,
        ConeGeometry: yr,
        ConeBufferGeometry: xr,
        CylinderGeometry: gr,
        CylinderBufferGeometry: vr,
        CircleGeometry: br,
        CircleBufferGeometry: wr,
        BoxGeometry: Et,
        BoxBufferGeometry: Tt
    });

    function Mr(t) {
        kt.call(this), this.type = "ShadowMaterial", this.color = new q(0), this.transparent = !0, this.setValues(t)
    }

    function Sr(t) {
        Vt.call(this, t), this.type = "RawShaderMaterial"
    }

    function Er(t) {
        kt.call(this), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new q(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new q(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new v(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function Tr(t) {
        Er.call(this), this.defines = {
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
    }

    function Lr(t) {
        kt.call(this), this.type = "MeshPhongMaterial", this.color = new q(16777215), this.specular = new q(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new q(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new v(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function Ar(t) {
        Lr.call(this), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
    }

    function Pr(t) {
        kt.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new v(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function Rr(t) {
        kt.call(this), this.type = "MeshLambertMaterial", this.color = new q(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new q(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function Cr(t) {
        kt.call(this), this.defines = {
            MATCAP: ""
        }, this.type = "MeshMatcapMaterial", this.color = new q(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new v(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.lights = !1, this.setValues(t)
    }

    function Or(t) {
        Ki.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
    }
    Mr.prototype = Object.create(kt.prototype), Mr.prototype.constructor = Mr, Mr.prototype.isShadowMaterial = !0, Mr.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.color.copy(t.color), this
    }, Sr.prototype = Object.create(Vt.prototype), Sr.prototype.constructor = Sr, Sr.prototype.isRawShaderMaterial = !0, Er.prototype = Object.create(kt.prototype), Er.prototype.constructor = Er, Er.prototype.isMeshStandardMaterial = !0, Er.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.defines = {
            STANDARD: ""
        }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, Tr.prototype = Object.create(Er.prototype), Tr.prototype.constructor = Tr, Tr.prototype.isMeshPhysicalMaterial = !0, Tr.prototype.copy = function (t) {
        return Er.prototype.copy.call(this, t), this.defines = {
            PHYSICAL: ""
        }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
    }, Lr.prototype = Object.create(kt.prototype), Lr.prototype.constructor = Lr, Lr.prototype.isMeshPhongMaterial = !0, Lr.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, Ar.prototype = Object.create(Lr.prototype), Ar.prototype.constructor = Ar, Ar.prototype.isMeshToonMaterial = !0, Ar.prototype.copy = function (t) {
        return Lr.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
    }, Pr.prototype = Object.create(kt.prototype), Pr.prototype.constructor = Pr, Pr.prototype.isMeshNormalMaterial = !0, Pr.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, Rr.prototype = Object.create(kt.prototype), Rr.prototype.constructor = Rr, Rr.prototype.isMeshLambertMaterial = !0, Rr.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, Cr.prototype = Object.create(kt.prototype), Cr.prototype.constructor = Cr, Cr.prototype.isMeshMatcapMaterial = !0, Cr.prototype.copy = function (t) {
        return kt.prototype.copy.call(this, t), this.defines = {
            MATCAP: ""
        }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, Or.prototype = Object.create(Ki.prototype), Or.prototype.constructor = Or, Or.prototype.isLineDashedMaterial = !0, Or.prototype.copy = function (t) {
        return Ki.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
    };
    var Ir = Object.freeze({
            ShadowMaterial: Mr,
            SpriteMaterial: qi,
            RawShaderMaterial: Sr,
            ShaderMaterial: Vt,
            PointsMaterial: nn,
            MeshPhysicalMaterial: Tr,
            MeshStandardMaterial: Er,
            MeshPhongMaterial: Lr,
            MeshToonMaterial: Ar,
            MeshNormalMaterial: Pr,
            MeshLambertMaterial: Rr,
            MeshDepthMaterial: xi,
            MeshDistanceMaterial: bi,
            MeshBasicMaterial: qt,
            MeshMatcapMaterial: Cr,
            LineDashedMaterial: Or,
            LineBasicMaterial: Ki,
            Material: kt
        }),
        Dr = {
            arraySlice: function (t, e, i) {
                return Dr.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
            },
            convertArray: function (t, e, i) {
                return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
            },
            isTypedArray: function (t) {
                return ArrayBuffer.isView(t) && !(t instanceof DataView)
            },
            getKeyframeOrder: function (t) {
                for (var e = t.length, i = new Array(e), n = 0; n !== e; ++n) i[n] = n;
                return i.sort((function (e, i) {
                    return t[e] - t[i]
                })), i
            },
            sortedArray: function (t, e, i) {
                for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
                    for (var s = i[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c];
                return r
            },
            flattenJSON: function (t, e, i, n) {
                for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++];
                if (void 0 !== a) {
                    var o = a[n];
                    if (void 0 !== o)
                        if (Array.isArray(o))
                            do {
                                void 0 !== (o = a[n]) && (e.push(a.time), i.push.apply(i, o)), a = t[r++]
                            } while (void 0 !== a);
                        else if (void 0 !== o.toArray)
                        do {
                            void 0 !== (o = a[n]) && (e.push(a.time), o.toArray(i, i.length)), a = t[r++]
                        } while (void 0 !== a);
                    else
                        do {
                            void 0 !== (o = a[n]) && (e.push(a.time), i.push(o)), a = t[r++]
                        } while (void 0 !== a)
                }
            }
        };

    function zr(t, e, i, n) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
    }

    function Nr(t, e, i, n) {
        zr.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }

    function Br(t, e, i, n) {
        zr.call(this, t, e, i, n)
    }

    function Ur(t, e, i, n) {
        zr.call(this, t, e, i, n)
    }

    function Gr(t, e, i, n) {
        if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t, this.times = Dr.convertArray(e, this.TimeBufferType), this.values = Dr.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
    }

    function Fr(t, e, i) {
        Gr.call(this, t, e, i)
    }

    function Hr(t, e, i, n) {
        Gr.call(this, t, e, i, n)
    }

    function kr(t, e, i, n) {
        Gr.call(this, t, e, i, n)
    }

    function Vr(t, e, i, n) {
        zr.call(this, t, e, i, n)
    }

    function jr(t, e, i, n) {
        Gr.call(this, t, e, i, n)
    }

    function Wr(t, e, i, n) {
        Gr.call(this, t, e, i, n)
    }

    function qr(t, e, i, n) {
        Gr.call(this, t, e, i, n)
    }

    function Xr(t, e, i) {
        this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = g.generateUUID(), this.duration < 0 && this.resetDuration()
    }

    function Yr(t) {
        if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        var e = function (t) {
            switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return kr;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return qr;
            case "color":
                return Hr;
            case "quaternion":
                return jr;
            case "bool":
            case "boolean":
                return Fr;
            case "string":
                return Wr
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }(t.type);
        if (void 0 === t.times) {
            var i = [],
                n = [];
            Dr.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
    }
    Object.assign(zr.prototype, {
            evaluate: function (t) {
                var e = this.parameterPositions,
                    i = this._cachedIndex,
                    n = e[i],
                    r = e[i - 1];
                t: {
                    e: {
                        var a;i: {
                            n: if (!(t < n)) {
                                for (var o = i + 2;;) {
                                    if (void 0 === n) {
                                        if (t < r) break n;
                                        return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
                                    }
                                    if (i === o) break;
                                    if (r = n, t < (n = e[++i])) break e
                                }
                                a = e.length;
                                break i
                            }if (t >= r) break t;
                            var s = e[1];t < s && (i = 2, r = s);
                            for (o = i - 2;;) {
                                if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                                if (i === o) break;
                                if (n = r, t >= (r = e[--i - 1])) break e
                            }
                            a = i,
                            i = 0
                        }
                        for (; i < a;) {
                            var c = i + a >>> 1;
                            t < e[c] ? a = c : i = c + 1
                        }
                        if (n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0,
                        this.beforeStart_(0, t, n);
                        if (void 0 === n) return i = e.length,
                        this._cachedIndex = i,
                        this.afterEnd_(i - 1, r, t)
                    }
                    this._cachedIndex = i,
                    this.intervalChanged_(i, r, n)
                }
                return this.interpolate_(i, r, t, n)
            },
            settings: null,
            DefaultSettings_: {},
            getSettings_: function () {
                return this.settings || this.DefaultSettings_
            },
            copySampleValue_: function (t) {
                for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a) e[a] = i[r + a];
                return e
            },
            interpolate_: function () {
                throw new Error("call to abstract method")
            },
            intervalChanged_: function () {}
        }),

        Object.assign(zr.prototype, {
            beforeStart_: zr.prototype.copySampleValue_,
            afterEnd_: zr.prototype.copySampleValue_
        }), Nr.prototype = Object.assign(Object.create(zr.prototype), {
            constructor: Nr,
            DefaultSettings_: {
                endingStart: 2400,
                endingEnd: 2400
            },
            intervalChanged_: function (t, e, i) {
                var n = this.parameterPositions,
                    r = t - 2,
                    a = t + 1,
                    o = n[r],
                    s = n[a];
                if (void 0 === o) switch (this.getSettings_().endingStart) {
                case 2401:
                    r = t, o = 2 * e - i;
                    break;
                case 2402:
                    o = e + n[r = n.length - 2] - n[r + 1];
                    break;
                default:
                    r = t, o = i
                }
                if (void 0 === s) switch (this.getSettings_().endingEnd) {
                case 2401:
                    a = t, s = 2 * i - e;
                    break;
                case 2402:
                    a = 1, s = i + n[1] - n[0];
                    break;
                default:
                    a = t - 1, s = e
                }
                var c = .5 * (i - e),
                    h = this.valueSize;
                this._weightPrev = c / (e - o), this._weightNext = c / (s - i), this._offsetPrev = r * h, this._offsetNext = a * h
            },
            interpolate_: function (t, e, i, n) {
                for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - e) / (n - e), f = d * d, m = f * d, g = -u * m + 2 * u * f - u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b) r[b] = g * a[h + b] + v * a[c + b] + y * a[s + b] + x * a[l + b];
                return r
            }
        }), Br.prototype = Object.assign(Object.create(zr.prototype), {
            constructor: Br,
            interpolate_: function (t, e, i, n) {
                for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (i - e) / (n - e), l = 1 - h, u = 0; u !== o; ++u) r[u] = a[c + u] * l + a[s + u] * h;
                return r
            }
        }), Ur.prototype = Object.assign(Object.create(zr.prototype), {
            constructor: Ur,
            interpolate_: function (t) {
                return this.copySampleValue_(t - 1)
            }
        }), Object.assign(Gr, {
            toJSON: function (t) {
                var e, i = t.constructor;
                if (void 0 !== i.toJSON) e = i.toJSON(t);
                else {
                    e = {
                        name: t.name,
                        times: Dr.convertArray(t.times, Array),
                        values: Dr.convertArray(t.values, Array)
                    };
                    var n = t.getInterpolation();
                    n !== t.DefaultInterpolation && (e.interpolation = n)
                }
                return e.type = t.ValueTypeName, e
            }
        }), Object.assign(Gr.prototype, {
            constructor: Gr,
            TimeBufferType: Float32Array,
            ValueBufferType: Float32Array,
            DefaultInterpolation: 2301,
            InterpolantFactoryMethodDiscrete: function (t) {
                return new Ur(this.times, this.values, this.getValueSize(), t)
            },
            InterpolantFactoryMethodLinear: function (t) {
                return new Br(this.times, this.values, this.getValueSize(), t)
            },
            InterpolantFactoryMethodSmooth: function (t) {
                return new Nr(this.times, this.values, this.getValueSize(), t)
            },
            setInterpolation: function (t) {
                var e;
                switch (t) {
                case 2300:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    e = this.InterpolantFactoryMethodSmooth
                }
                if (void 0 === e) {
                    var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                    if (void 0 === this.createInterpolant) {
                        if (t === this.DefaultInterpolation) throw new Error(i);
                        this.setInterpolation(this.DefaultInterpolation)
                    }
                    return console.warn("THREE.KeyframeTrack:", i), this
                }
                return this.createInterpolant = e, this
            },
            getInterpolation: function () {
                switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
                }
            },
            getValueSize: function () {
                return this.values.length / this.times.length
            },
            shift: function (t) {
                if (0 !== t)
                    for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
                return this
            },
            scale: function (t) {
                if (1 !== t)
                    for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
                return this
            },
            trim: function (t, e) {
                for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r;
                for (; - 1 !== a && i[a] > e;) --a;
                if (++a, 0 !== r || a !== n) {
                    r >= a && (r = (a = Math.max(a, 1)) - 1);
                    var o = this.getValueSize();
                    this.times = Dr.arraySlice(i, r, a), this.values = Dr.arraySlice(this.values, r * o, a * o)
                }
                return this
            },
            validate: function () {
                var t = !0,
                    e = this.getValueSize();
                e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
                var i = this.times,
                    n = this.values,
                    r = i.length;
                0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
                for (var a = null, o = 0; o !== r; o++) {
                    var s = i[o];
                    if ("number" == typeof s && isNaN(s)) {
                        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), t = !1;
                        break
                    }
                    if (null !== a && a > s) {
                        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), t = !1;
                        break
                    }
                    a = s
                }
                if (void 0 !== n && Dr.isTypedArray(n)) {
                    o = 0;
                    for (var c = n.length; o !== c; ++o) {
                        var h = n[o];
                        if (isNaN(h)) {
                            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, h), t = !1;
                            break
                        }
                    }
                }
                return t
            },
            optimize: function () {
                for (var t = this.times, e = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) {
                    var s = !1,
                        c = t[o];
                    if (c !== t[o + 1] && (1 !== o || c !== c[0]))
                        if (n) s = !0;
                        else
                            for (var h = o * i, l = h - i, u = h + i, p = 0; p !== i; ++p) {
                                var d = e[h + p];
                                if (d !== e[l + p] || d !== e[u + p]) {
                                    s = !0;
                                    break
                                }
                            }
                    if (s) {
                        if (o !== r) {
                            t[r] = t[o];
                            var f = o * i,
                                m = r * i;
                            for (p = 0; p !== i; ++p) e[m + p] = e[f + p]
                        }++r
                    }
                }
                if (a > 0) {
                    t[r] = t[a];
                    for (f = a * i, m = r * i, p = 0; p !== i; ++p) e[m + p] = e[f + p];
                    ++r
                }
                return r !== t.length && (this.times = Dr.arraySlice(t, 0, r), this.values = Dr.arraySlice(e, 0, r * i)), this
            }
        }), Fr.prototype = Object.assign(Object.create(Gr.prototype), {
            constructor: Fr,
            ValueTypeName: "bool",
            ValueBufferType: Array,
            DefaultInterpolation: 2300,
            InterpolantFactoryMethodLinear: void 0,
            InterpolantFactoryMethodSmooth: void 0
        }), Hr.prototype = Object.assign(Object.create(Gr.prototype), {
            constructor: Hr,
            ValueTypeName: "color"
        }), kr.prototype = Object.assign(Object.create(Gr.prototype), {
            constructor: kr,
            ValueTypeName: "number"
        }), Vr.prototype = Object.assign(Object.create(zr.prototype), {
            constructor: Vr,
            interpolate_: function (t, e, i, n) {
                for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (i - e) / (n - e), h = s + o; s !== h; s += 4) x.slerpFlat(r, 0, a, s - o, a, s, c);
                return r
            }
        }), jr.prototype = Object.assign(Object.create(Gr.prototype), {
            constructor: jr,
            ValueTypeName: "quaternion",
            DefaultInterpolation: 2301,
            InterpolantFactoryMethodLinear: function (t) {
                return new Vr(this.times, this.values, this.getValueSize(), t)
            },
            InterpolantFactoryMethodSmooth: void 0
        }), Wr.prototype = Object.assign(Object.create(Gr.prototype), {
            constructor: Wr,
            ValueTypeName: "string",
            ValueBufferType: Array,
            DefaultInterpolation: 2300,
            InterpolantFactoryMethodLinear: void 0,
            InterpolantFactoryMethodSmooth: void 0
        }), qr.prototype = Object.assign(Object.create(Gr.prototype), {
            constructor: qr,
            ValueTypeName: "vector"
        }), Object.assign(Xr, {
            parse: function (t) {
                for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) e.push(Yr(i[r]).scale(n));
                return new Xr(t.name, t.duration, e)
            },
            toJSON: function (t) {
                for (var e = [], i = t.tracks, n = {
                        name: t.name,
                        duration: t.duration,
                        tracks: e,
                        uuid: t.uuid
                    }, r = 0, a = i.length; r !== a; ++r) e.push(Gr.toJSON(i[r]));
                return n
            },
            CreateFromMorphTargetSequence: function (t, e, i, n) {
                for (var r = e.length, a = [], o = 0; o < r; o++) {
                    var s = [],
                        c = [];
                    s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
                    var h = Dr.getKeyframeOrder(s);
                    s = Dr.sortedArray(s, 1, h), c = Dr.sortedArray(c, 1, h), n || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new kr(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / i))
                }
                return new Xr(t, -1, a)
            },
            findByName: function (t, e) {
                var i = t;
                if (!Array.isArray(t)) {
                    var n = t;
                    i = n.geometry && n.geometry.animations || n.animations
                }
                for (var r = 0; r < i.length; r++)
                    if (i[r].name === e) return i[r];
                return null
            },
            CreateClipsFromMorphTargetSequences: function (t, e, i) {
                for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                    var s = t[a],
                        c = s.name.match(r);
                    if (c && c.length > 1) {
                        var h = n[u = c[1]];
                        h || (n[u] = h = []), h.push(s)
                    }
                }
                var l = [];
                for (var u in n) l.push(Xr.CreateFromMorphTargetSequence(u, n[u], e, i));
                return l
            },
            parseAnimation: function (t, e) {
                if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
                for (var i = function (t, e, i, n, r) {
                        if (0 !== i.length) {
                            var a = [],
                                o = [];
                            Dr.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new t(e, a, o))
                        }
                    }, n = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                    var h = s[c].keys;
                    if (h && 0 !== h.length)
                        if (h[0].morphTargets) {
                            for (var l = {}, u = 0; u < h.length; u++)
                                if (h[u].morphTargets)
                                    for (var p = 0; p < h[u].morphTargets.length; p++) l[h[u].morphTargets[p]] = -1;
                            for (var d in l) {
                                var f = [],
                                    m = [];
                                for (p = 0; p !== h[u].morphTargets.length; ++p) {
                                    var g = h[u];
                                    f.push(g.time), m.push(g.morphTarget === d ? 1 : 0)
                                }
                                n.push(new kr(".morphTargetInfluence[" + d + "]", f, m))
                            }
                            a = l.length * (o || 1)
                        } else {
                            var v = ".bones[" + e[c].name + "]";
                            i(qr, v + ".position", h, "pos", n), i(jr, v + ".quaternion", h, "rot", n), i(qr, v + ".scale", h, "scl", n)
                        }
                }
                return 0 === n.length ? null : new Xr(r, a, n)
            }
        }), Object.assign(Xr.prototype, {
            resetDuration: function () {
                for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
                    var n = this.tracks[e];
                    t = Math.max(t, n.times[n.times.length - 1])
                }
                return this.duration = t, this
            },
            trim: function () {
                for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
                return this
            },
            validate: function () {
                for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
                return t
            },
            optimize: function () {
                for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
                return this
            }
        });
    var Jr = {
        enabled: !1,
        files: {},
        add: function (t, e) {
            !1 !== this.enabled && (this.files[t] = e)
        },
        get: function (t) {
            if (!1 !== this.enabled) return this.files[t]
        },
        remove: function (t) {
            delete this.files[t]
        },
        clear: function () {
            this.files = {}
        }
    };

    function Zr(t, e, i) {
        var n = this,
            r = !1,
            a = 0,
            o = 0,
            s = void 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function (t) {
            o++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, o), r = !0
        }, this.itemEnd = function (t) {
            a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad && n.onLoad())
        }, this.itemError = function (t) {
            void 0 !== n.onError && n.onError(t)
        }, this.resolveURL = function (t) {
            return s ? s(t) : t
        }, this.setURLModifier = function (t) {
            return s = t, this
        }
    }
    var Qr = new Zr,
        Kr = {};

    function $r(t) {
        this.manager = void 0 !== t ? t : Qr
    }

    function ta(t) {
        this.manager = void 0 !== t ? t : Qr, this._parser = null
    }

    function ea(t) {
        this.manager = void 0 !== t ? t : Qr
    }

    function ia(t) {
        this.manager = void 0 !== t ? t : Qr
    }

    function na(t) {
        this.manager = void 0 !== t ? t : Qr
    }

    function ra() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }

    function aa(t, e, i, n, r, a, o, s) {
        ra.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
    }

    function oa(t, e, i, n, r, a) {
        aa.call(this, t, e, i, i, n, r, a), this.type = "ArcCurve"
    }

    function sa() {
        var t = 0,
            e = 0,
            i = 0,
            n = 0;

        function r(r, a, o, s) {
            t = r, e = o, i = -3 * r + 3 * a - 2 * o - s, n = 2 * r - 2 * a + o + s
        }
        return {
            initCatmullRom: function (t, e, i, n, a) {
                r(e, i, a * (i - t), a * (n - e))
            },
            initNonuniformCatmullRom: function (t, e, i, n, a, o, s) {
                var c = (e - t) / a - (i - t) / (a + o) + (i - e) / o,
                    h = (i - e) / o - (n - e) / (o + s) + (n - i) / s;
                r(e, i, c *= o, h *= o)
            },
            calc: function (r) {
                var a = r * r;
                return t + e * r + i * a + n * (a * r)
            }
        }
    }
    Object.assign($r.prototype, {
        load: function (t, e, i, n) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                a = Jr.get(t);
            if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function () {
                e && e(a), r.manager.itemEnd(t)
            }), 0), a;
            if (void 0 === Kr[t]) {
                var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (o) {
                    var s = o[1],
                        c = !!o[2],
                        h = o[3];
                    h = decodeURIComponent(h), c && (h = atob(h));
                    try {
                        var l, u = (this.responseType || "").toLowerCase();
                        switch (u) {
                        case "arraybuffer":
                        case "blob":
                            for (var p = new Uint8Array(h.length), d = 0; d < h.length; d++) p[d] = h.charCodeAt(d);
                            l = "blob" === u ? new Blob([p.buffer], {
                                type: s
                            }) : p.buffer;
                            break;
                        case "document":
                            var f = new DOMParser;
                            l = f.parseFromString(h, s);
                            break;
                        case "json":
                            l = JSON.parse(h);
                            break;
                        default:
                            l = h
                        }
                        setTimeout((function () {
                            e && e(l), r.manager.itemEnd(t)
                        }), 0)
                    } catch (e) {
                        setTimeout((function () {
                            n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
                        }), 0)
                    }
                } else {
                    Kr[t] = [], Kr[t].push({
                        onLoad: e,
                        onProgress: i,
                        onError: n
                    });
                    var m = new XMLHttpRequest;
                    for (var g in m.open("GET", t, !0), m.addEventListener("load", (function (e) {
                            var i = this.response;
                            Jr.add(t, i);
                            var n = Kr[t];
                            if (delete Kr[t], 200 === this.status || 0 === this.status) {
                                0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                                for (var a = 0, o = n.length; a < o; a++) {
                                    (s = n[a]).onLoad && s.onLoad(i)
                                }
                                r.manager.itemEnd(t)
                            } else {
                                for (a = 0, o = n.length; a < o; a++) {
                                    var s;
                                    (s = n[a]).onError && s.onError(e)
                                }
                                r.manager.itemError(t), r.manager.itemEnd(t)
                            }
                        }), !1), m.addEventListener("progress", (function (e) {
                            for (var i = Kr[t], n = 0, r = i.length; n < r; n++) {
                                var a = i[n];
                                a.onProgress && a.onProgress(e)
                            }
                        }), !1), m.addEventListener("error", (function (e) {
                            var i = Kr[t];
                            delete Kr[t];
                            for (var n = 0, a = i.length; n < a; n++) {
                                var o = i[n];
                                o.onError && o.onError(e)
                            }
                            r.manager.itemError(t), r.manager.itemEnd(t)
                        }), !1), m.addEventListener("abort", (function (e) {
                            var i = Kr[t];
                            delete Kr[t];
                            for (var n = 0, a = i.length; n < a; n++) {
                                var o = i[n];
                                o.onError && o.onError(e)
                            }
                            r.manager.itemError(t), r.manager.itemEnd(t)
                        }), !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(g, this.requestHeader[g]);
                    m.send(null)
                }
                return r.manager.itemStart(t), m
            }
            Kr[t].push({
                onLoad: e,
                onProgress: i,
                onError: n
            })
        },
        setPath: function (t) {
            return this.path = t, this
        },
        setResponseType: function (t) {
            return this.responseType = t, this
        },
        setWithCredentials: function (t) {
            return this.withCredentials = t, this
        },
        setMimeType: function (t) {
            return this.mimeType = t, this
        },
        setRequestHeader: function (t) {
            return this.requestHeader = t, this
        }
    }), Object.assign(function (t) {
        this.manager = void 0 !== t ? t : Qr
    }.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                a = new $r(r.manager);
            a.setPath(r.path), a.load(t, (function (t) {
                e(r.parse(JSON.parse(t)))
            }), i, n)
        },
        parse: function (t, e) {
            for (var i = [], n = 0; n < t.length; n++) {
                var r = Xr.parse(t[n]);
                i.push(r)
            }
            e(i)
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(function (t) {
        this.manager = void 0 !== t ? t : Qr, this._parser = null
    }.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                a = [],
                o = new on;
            o.image = a;
            var s = new $r(this.manager);

            function c(c) {
                s.load(t[c], (function (t) {
                    var i = r._parser(t, !0);
                    a[c] = {
                        width: i.width,
                        height: i.height,
                        format: i.format,
                        mipmaps: i.mipmaps
                    }, 6 === (h += 1) && (1 === i.mipmapCount && (o.minFilter = 1006), o.format = i.format, o.needsUpdate = !0, e && e(o))
                }), i, n)
            }
            if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
                for (var h = 0, l = 0, u = t.length; l < u; ++l) c(l);
            else s.load(t, (function (t) {
                var i = r._parser(t, !0);
                if (i.isCubemap)
                    for (var n = i.mipmaps.length / i.mipmapCount, s = 0; s < n; s++) {
                        a[s] = {
                            mipmaps: []
                        };
                        for (var c = 0; c < i.mipmapCount; c++) a[s].mipmaps.push(i.mipmaps[s * i.mipmapCount + c]), a[s].format = i.format, a[s].width = i.width, a[s].height = i.height
                    } else o.image.width = i.width, o.image.height = i.height, o.mipmaps = i.mipmaps;
                1 === i.mipmapCount && (o.minFilter = 1006), o.format = i.format, o.needsUpdate = !0, e && e(o)
            }), i, n);
            return o
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(ta.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                a = new D,
                o = new $r(this.manager);
            return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(t, (function (t) {
                var i = r._parser(t);
                i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width, a.image.height = i.height, a.image.data = i.data), a.wrapS = void 0 !== i.wrapS ? i.wrapS : 1001, a.wrapT = void 0 !== i.wrapT ? i.wrapT : 1001, a.magFilter = void 0 !== i.magFilter ? i.magFilter : 1006, a.minFilter = void 0 !== i.minFilter ? i.minFilter : 1008, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps), 1 === i.mipmapCount && (a.minFilter = 1006), a.needsUpdate = !0, e && e(a, i))
            }), i, n), a
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(ea.prototype, {
        crossOrigin: "anonymous",
        load: function (t, e, i, n) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                a = Jr.get(t);
            if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function () {
                e && e(a), r.manager.itemEnd(t)
            }), 0), a;
            var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

            function s() {
                o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), Jr.add(t, this), e && e(this), r.manager.itemEnd(t)
            }

            function c(e) {
                o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
            }
            return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o
        },
        setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(ia.prototype, {
        crossOrigin: "anonymous",
        load: function (t, e, i, n) {
            var r = new ae,
                a = new ea(this.manager);
            a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
            var o = 0;

            function s(i) {
                a.load(t[i], (function (t) {
                    r.images[i] = t, 6 === ++o && (r.needsUpdate = !0, e && e(r))
                }), void 0, n)
            }
            for (var c = 0; c < t.length; ++c) s(c);
            return r
        },
        setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(na.prototype, {
        crossOrigin: "anonymous",
        load: function (t, e, i, n) {
            var r = new P,
                a = new ea(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, (function (i) {
                r.image = i;
                var n = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                r.format = n ? 1022 : 1023, r.needsUpdate = !0, void 0 !== e && e(r)
            }), i, n), r
        },
        setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(ra.prototype, {
        getPoint: function () {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null
        },
        getPointAt: function (t, e) {
            var i = this.getUtoTmapping(t);
            return this.getPoint(i, e)
        },
        getPoints: function (t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
            return e
        },
        getSpacedPoints: function (t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
            return e
        },
        getLength: function () {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function (t) {
            if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, i, n = [],
                r = this.getPoint(0),
                a = 0;
            for (n.push(0), i = 1; i <= t; i++) a += (e = this.getPoint(i / t)).distanceTo(r), n.push(a), r = e;
            return this.cacheArcLengths = n, n
        },
        updateArcLengths: function () {
            this.needsUpdate = !0, this.getLengths()
        },
        getUtoTmapping: function (t, e) {
            var i, n = this.getLengths(),
                r = 0,
                a = n.length;
            i = e || t * n[a - 1];
            for (var o, s = 0, c = a - 1; s <= c;)
                if ((o = n[r = Math.floor(s + (c - s) / 2)] - i) < 0) s = r + 1;
                else {
                    if (!(o > 0)) {
                        c = r;
                        break
                    }
                    c = r - 1
                } if (n[r = c] === i) return r / (a - 1);
            var h = n[r];
            return (r + (i - h) / (n[r + 1] - h)) / (a - 1)
        },
        getTangent: function (t) {
            var e = t - 1e-4,
                i = t + 1e-4;
            e < 0 && (e = 0), i > 1 && (i = 1);
            var n = this.getPoint(e);
            return this.getPoint(i).clone().sub(n).normalize()
        },
        getTangentAt: function (t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        },
        computeFrenetFrames: function (t, e) {
            var i, n, r, a = new b,
                o = [],
                s = [],
                c = [],
                h = new b,
                l = new y;
            for (i = 0; i <= t; i++) n = i / t, o[i] = this.getTangentAt(n), o[i].normalize();
            s[0] = new b, c[0] = new b;
            var u = Number.MAX_VALUE,
                p = Math.abs(o[0].x),
                d = Math.abs(o[0].y),
                f = Math.abs(o[0].z);
            for (p <= u && (u = p, a.set(1, 0, 0)), d <= u && (u = d, a.set(0, 1, 0)), f <= u && a.set(0, 0, 1), h.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], h), c[0].crossVectors(o[0], s[0]), i = 1; i <= t; i++) s[i] = s[i - 1].clone(), c[i] = c[i - 1].clone(), h.crossVectors(o[i - 1], o[i]), h.length() > Number.EPSILON && (h.normalize(), r = Math.acos(g.clamp(o[i - 1].dot(o[i]), -1, 1)), s[i].applyMatrix4(l.makeRotationAxis(h, r))), c[i].crossVectors(o[i], s[i]);
            if (!0 === e)
                for (r = Math.acos(g.clamp(s[0].dot(s[t]), -1, 1)), r /= t, o[0].dot(h.crossVectors(s[0], s[t])) > 0 && (r = -r), i = 1; i <= t; i++) s[i].applyMatrix4(l.makeRotationAxis(o[i], r * i)), c[i].crossVectors(o[i], s[i]);
            return {
                tangents: o,
                normals: s,
                binormals: c
            }
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this
        },
        toJSON: function () {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
        },
        fromJSON: function (t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this
        }
    }), aa.prototype = Object.create(ra.prototype), aa.prototype.constructor = aa, aa.prototype.isEllipseCurve = !0, aa.prototype.getPoint = function (t, e) {
        for (var i = e || new v, n = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += n;
        for (; r > n;) r -= n;
        r < Number.EPSILON && (r = a ? 0 : n), !0 !== this.aClockwise || a || (r === n ? r = -n : r -= n);
        var o = this.aStartAngle + t * r,
            s = this.aX + this.xRadius * Math.cos(o),
            c = this.aY + this.yRadius * Math.sin(o);
        if (0 !== this.aRotation) {
            var h = Math.cos(this.aRotation),
                l = Math.sin(this.aRotation),
                u = s - this.aX,
                p = c - this.aY;
            s = u * h - p * l + this.aX, c = u * l + p * h + this.aY
        }
        return i.set(s, c)
    }, aa.prototype.copy = function (t) {
        return ra.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }, aa.prototype.toJSON = function () {
        var t = ra.prototype.toJSON.call(this);
        return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
    }, aa.prototype.fromJSON = function (t) {
        return ra.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }, oa.prototype = Object.create(aa.prototype), oa.prototype.constructor = oa, oa.prototype.isArcCurve = !0;
    var ca = new b,
        ha = new sa,
        la = new sa,
        ua = new sa;

    function pa(t, e, i, n) {
        ra.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = i || "centripetal", this.tension = n || .5
    }

    function da(t, e, i, n, r) {
        var a = .5 * (n - e),
            o = .5 * (r - i),
            s = t * t;
        return (2 * i - 2 * n + a + o) * (t * s) + (-3 * i + 3 * n - 2 * a - o) * s + a * t + i
    }

    function fa(t, e, i, n) {
        return function (t, e) {
            var i = 1 - t;
            return i * i * e
        }(t, e) + function (t, e) {
            return 2 * (1 - t) * t * e
        }(t, i) + function (t, e) {
            return t * t * e
        }(t, n)
    }

    function ma(t, e, i, n, r) {
        return function (t, e) {
            var i = 1 - t;
            return i * i * i * e
        }(t, e) + function (t, e) {
            var i = 1 - t;
            return 3 * i * i * t * e
        }(t, i) + function (t, e) {
            return 3 * (1 - t) * t * t * e
        }(t, n) + function (t, e) {
            return t * t * t * e
        }(t, r)
    }

    function ga(t, e, i, n) {
        ra.call(this), this.type = "CubicBezierCurve", this.v0 = t || new v, this.v1 = e || new v, this.v2 = i || new v, this.v3 = n || new v
    }

    function va(t, e, i, n) {
        ra.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new b, this.v1 = e || new b, this.v2 = i || new b, this.v3 = n || new b
    }

    function ya(t, e) {
        ra.call(this), this.type = "LineCurve", this.v1 = t || new v, this.v2 = e || new v
    }

    function xa(t, e) {
        ra.call(this), this.type = "LineCurve3", this.v1 = t || new b, this.v2 = e || new b
    }

    function ba(t, e, i) {
        ra.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new v, this.v1 = e || new v, this.v2 = i || new v
    }

    function wa(t, e, i) {
        ra.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new b, this.v1 = e || new b, this.v2 = i || new b
    }

    function _a(t) {
        ra.call(this), this.type = "SplineCurve", this.points = t || []
    }
    pa.prototype = Object.create(ra.prototype), pa.prototype.constructor = pa, pa.prototype.isCatmullRomCurve3 = !0, pa.prototype.getPoint = function (t, e) {
        var i, n, r, a, o = e || new b,
            s = this.points,
            c = s.length,
            h = (c - (this.closed ? 0 : 1)) * t,
            l = Math.floor(h),
            u = h - l;
        if (this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / c) + 1) * c : 0 === u && l === c - 1 && (l = c - 2, u = 1), this.closed || l > 0 ? i = s[(l - 1) % c] : (ca.subVectors(s[0], s[1]).add(s[0]), i = ca), n = s[l % c], r = s[(l + 1) % c], this.closed || l + 2 < c ? a = s[(l + 2) % c] : (ca.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), a = ca), "centripetal" === this.curveType || "chordal" === this.curveType) {
            var p = "chordal" === this.curveType ? .5 : .25,
                d = Math.pow(i.distanceToSquared(n), p),
                f = Math.pow(n.distanceToSquared(r), p),
                m = Math.pow(r.distanceToSquared(a), p);
            f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), ha.initNonuniformCatmullRom(i.x, n.x, r.x, a.x, d, f, m), la.initNonuniformCatmullRom(i.y, n.y, r.y, a.y, d, f, m), ua.initNonuniformCatmullRom(i.z, n.z, r.z, a.z, d, f, m)
        } else "catmullrom" === this.curveType && (ha.initCatmullRom(i.x, n.x, r.x, a.x, this.tension), la.initCatmullRom(i.y, n.y, r.y, a.y, this.tension), ua.initCatmullRom(i.z, n.z, r.z, a.z, this.tension));
        return o.set(ha.calc(u), la.calc(u), ua.calc(u)), o
    }, pa.prototype.copy = function (t) {
        ra.prototype.copy.call(this, t), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push(n.clone())
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }, pa.prototype.toJSON = function () {
        var t = ra.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, i = this.points.length; e < i; e++) {
            var n = this.points[e];
            t.points.push(n.toArray())
        }
        return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
    }, pa.prototype.fromJSON = function (t) {
        ra.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push((new b).fromArray(n))
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }, ga.prototype = Object.create(ra.prototype), ga.prototype.constructor = ga, ga.prototype.isCubicBezierCurve = !0, ga.prototype.getPoint = function (t, e) {
        var i = e || new v,
            n = this.v0,
            r = this.v1,
            a = this.v2,
            o = this.v3;
        return i.set(ma(t, n.x, r.x, a.x, o.x), ma(t, n.y, r.y, a.y, o.y)), i
    }, ga.prototype.copy = function (t) {
        return ra.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }, ga.prototype.toJSON = function () {
        var t = ra.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }, ga.prototype.fromJSON = function (t) {
        return ra.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }, va.prototype = Object.create(ra.prototype), va.prototype.constructor = va, va.prototype.isCubicBezierCurve3 = !0, va.prototype.getPoint = function (t, e) {
        var i = e || new b,
            n = this.v0,
            r = this.v1,
            a = this.v2,
            o = this.v3;
        return i.set(ma(t, n.x, r.x, a.x, o.x), ma(t, n.y, r.y, a.y, o.y), ma(t, n.z, r.z, a.z, o.z)), i
    }, va.prototype.copy = function (t) {
        return ra.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }, va.prototype.toJSON = function () {
        var t = ra.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }, va.prototype.fromJSON = function (t) {
        return ra.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }, ya.prototype = Object.create(ra.prototype), ya.prototype.constructor = ya, ya.prototype.isLineCurve = !0, ya.prototype.getPoint = function (t, e) {
        var i = e || new v;
        return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
    }, ya.prototype.getPointAt = function (t, e) {
        return this.getPoint(t, e)
    }, ya.prototype.getTangent = function () {
        return this.v2.clone().sub(this.v1).normalize()
    }, ya.prototype.copy = function (t) {
        return ra.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, ya.prototype.toJSON = function () {
        var t = ra.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, ya.prototype.fromJSON = function (t) {
        return ra.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, xa.prototype = Object.create(ra.prototype), xa.prototype.constructor = xa, xa.prototype.isLineCurve3 = !0, xa.prototype.getPoint = function (t, e) {
        var i = e || new b;
        return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
    }, xa.prototype.getPointAt = function (t, e) {
        return this.getPoint(t, e)
    }, xa.prototype.copy = function (t) {
        return ra.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, xa.prototype.toJSON = function () {
        var t = ra.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, xa.prototype.fromJSON = function (t) {
        return ra.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, ba.prototype = Object.create(ra.prototype), ba.prototype.constructor = ba, ba.prototype.isQuadraticBezierCurve = !0, ba.prototype.getPoint = function (t, e) {
        var i = e || new v,
            n = this.v0,
            r = this.v1,
            a = this.v2;
        return i.set(fa(t, n.x, r.x, a.x), fa(t, n.y, r.y, a.y)), i
    }, ba.prototype.copy = function (t) {
        return ra.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, ba.prototype.toJSON = function () {
        var t = ra.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, ba.prototype.fromJSON = function (t) {
        return ra.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, wa.prototype = Object.create(ra.prototype), wa.prototype.constructor = wa, wa.prototype.isQuadraticBezierCurve3 = !0, wa.prototype.getPoint = function (t, e) {
        var i = e || new b,
            n = this.v0,
            r = this.v1,
            a = this.v2;
        return i.set(fa(t, n.x, r.x, a.x), fa(t, n.y, r.y, a.y), fa(t, n.z, r.z, a.z)), i
    }, wa.prototype.copy = function (t) {
        return ra.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, wa.prototype.toJSON = function () {
        var t = ra.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, wa.prototype.fromJSON = function (t) {
        return ra.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, _a.prototype = Object.create(ra.prototype), _a.prototype.constructor = _a, _a.prototype.isSplineCurve = !0, _a.prototype.getPoint = function (t, e) {
        var i = e || new v,
            n = this.points,
            r = (n.length - 1) * t,
            a = Math.floor(r),
            o = r - a,
            s = n[0 === a ? a : a - 1],
            c = n[a],
            h = n[a > n.length - 2 ? n.length - 1 : a + 1],
            l = n[a > n.length - 3 ? n.length - 1 : a + 2];
        return i.set(da(o, s.x, c.x, h.x, l.x), da(o, s.y, c.y, h.y, l.y)), i
    }, _a.prototype.copy = function (t) {
        ra.prototype.copy.call(this, t), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push(n.clone())
        }
        return this
    }, _a.prototype.toJSON = function () {
        var t = ra.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, i = this.points.length; e < i; e++) {
            var n = this.points[e];
            t.points.push(n.toArray())
        }
        return t
    }, _a.prototype.fromJSON = function (t) {
        ra.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push((new v).fromArray(n))
        }
        return this
    };
    var Ma = Object.freeze({
        ArcCurve: oa,
        CatmullRomCurve3: pa,
        CubicBezierCurve: ga,
        CubicBezierCurve3: va,
        EllipseCurve: aa,
        LineCurve: ya,
        LineCurve3: xa,
        QuadraticBezierCurve: ba,
        QuadraticBezierCurve3: wa,
        SplineCurve: _a
    });

    function Sa() {
        ra.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }

    function Ea(t) {
        Sa.call(this), this.type = "Path", this.currentPoint = new v, t && this.setFromPoints(t)
    }

    function Ta(t) {
        Ea.call(this, t), this.uuid = g.generateUUID(), this.type = "Shape", this.holes = []
    }

    function La(t, e) {
        ot.call(this), this.type = "Light", this.color = new q(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
    }

    function Aa(t, e, i) {
        La.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(ot.DefaultUp), this.updateMatrix(), this.groundColor = new q(e)
    }

    function Pa(t) {
        this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new v(512, 512), this.map = null, this.matrix = new y
    }

    function Ra() {
        Pa.call(this, new Li(50, 1, .5, 500))
    }

    function Ca(t, e, i, n, r, a) {
        La.call(this, t, e), this.type = "SpotLight", this.position.copy(ot.DefaultUp), this.updateMatrix(), this.target = new ot, Object.defineProperty(this, "power", {
            get: function () {
                return this.intensity * Math.PI
            },
            set: function (t) {
                this.intensity = t / Math.PI
            }
        }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Ra
    }

    function Oa(t, e, i, n) {
        La.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function () {
                return 4 * this.intensity * Math.PI
            },
            set: function (t) {
                this.intensity = t / (4 * Math.PI)
            }
        }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new Pa(new Li(90, 1, .5, 500))
    }

    function Ia(t, e, i, n, r, a) {
        Ti.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== t ? t : -1, this.right = void 0 !== e ? e : 1, this.top = void 0 !== i ? i : 1, this.bottom = void 0 !== n ? n : -1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
    }

    function Da() {
        Pa.call(this, new Ia(-5, 5, 5, -5, .5, 500))
    }

    function za(t, e) {
        La.call(this, t, e), this.type = "DirectionalLight", this.position.copy(ot.DefaultUp), this.updateMatrix(), this.target = new ot, this.shadow = new Da
    }

    function Na(t, e) {
        La.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
    }

    function Ba(t, e, i, n) {
        La.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
    }

    function Ua(t) {
        this.manager = void 0 !== t ? t : Qr, this.textures = {}
    }
    Sa.prototype = Object.assign(Object.create(ra.prototype), {
        constructor: Sa,
        add: function (t) {
            this.curves.push(t)
        },
        closePath: function () {
            var t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new ya(e, t))
        },
        getPoint: function (t) {
            for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
                if (i[n] >= e) {
                    var r = i[n] - e,
                        a = this.curves[n],
                        o = a.getLength(),
                        s = 0 === o ? 0 : 1 - r / o;
                    return a.getPointAt(s)
                }
                n++
            }
            return null
        },
        getLength: function () {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function () {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
        },
        getCurveLengths: function () {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
            return this.cacheLengths = t, t
        },
        getSpacedPoints: function (t) {
            void 0 === t && (t = 40);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
            return this.autoClose && e.push(e[0]), e
        },
        getPoints: function (t) {
            t = t || 12;
            for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
                for (var a = r[n], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
                    var h = s[c];
                    e && e.equals(h) || (i.push(h), e = h)
                }
            return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
        },
        copy: function (t) {
            ra.prototype.copy.call(this, t), this.curves = [];
            for (var e = 0, i = t.curves.length; e < i; e++) {
                var n = t.curves[e];
                this.curves.push(n.clone())
            }
            return this.autoClose = t.autoClose, this
        },
        toJSON: function () {
            var t = ra.prototype.toJSON.call(this);
            t.autoClose = this.autoClose, t.curves = [];
            for (var e = 0, i = this.curves.length; e < i; e++) {
                var n = this.curves[e];
                t.curves.push(n.toJSON())
            }
            return t
        },
        fromJSON: function (t) {
            ra.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
            for (var e = 0, i = t.curves.length; e < i; e++) {
                var n = t.curves[e];
                this.curves.push((new Ma[n.type]).fromJSON(n))
            }
            return this
        }
    }), Ea.prototype = Object.assign(Object.create(Sa.prototype), {
        constructor: Ea,
        setFromPoints: function (t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function (t, e) {
            this.currentPoint.set(t, e)
        },
        lineTo: function (t, e) {
            var i = new ya(this.currentPoint.clone(), new v(t, e));
            this.curves.push(i), this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function (t, e, i, n) {
            var r = new ba(this.currentPoint.clone(), new v(t, e), new v(i, n));
            this.curves.push(r), this.currentPoint.set(i, n)
        },
        bezierCurveTo: function (t, e, i, n, r, a) {
            var o = new ga(this.currentPoint.clone(), new v(t, e), new v(i, n), new v(r, a));
            this.curves.push(o), this.currentPoint.set(r, a)
        },
        splineThru: function (t) {
            var e = new _a([this.currentPoint.clone()].concat(t));
            this.curves.push(e), this.currentPoint.copy(t[t.length - 1])
        },
        arc: function (t, e, i, n, r, a) {
            var o = this.currentPoint.x,
                s = this.currentPoint.y;
            this.absarc(t + o, e + s, i, n, r, a)
        },
        absarc: function (t, e, i, n, r, a) {
            this.absellipse(t, e, i, i, n, r, a)
        },
        ellipse: function (t, e, i, n, r, a, o, s) {
            var c = this.currentPoint.x,
                h = this.currentPoint.y;
            this.absellipse(t + c, e + h, i, n, r, a, o, s)
        },
        absellipse: function (t, e, i, n, r, a, o, s) {
            var c = new aa(t, e, i, n, r, a, o, s);
            if (this.curves.length > 0) {
                var h = c.getPoint(0);
                h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
            }
            this.curves.push(c);
            var l = c.getPoint(1);
            this.currentPoint.copy(l)
        },
        copy: function (t) {
            return Sa.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
        },
        toJSON: function () {
            var t = Sa.prototype.toJSON.call(this);
            return t.currentPoint = this.currentPoint.toArray(), t
        },
        fromJSON: function (t) {
            return Sa.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
        }
    }), Ta.prototype = Object.assign(Object.create(Ea.prototype), {
        constructor: Ta,
        getPointsHoles: function (t) {
            for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
            return e
        },
        extractPoints: function (t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        copy: function (t) {
            Ea.prototype.copy.call(this, t), this.holes = [];
            for (var e = 0, i = t.holes.length; e < i; e++) {
                var n = t.holes[e];
                this.holes.push(n.clone())
            }
            return this
        },
        toJSON: function () {
            var t = Ea.prototype.toJSON.call(this);
            t.uuid = this.uuid, t.holes = [];
            for (var e = 0, i = this.holes.length; e < i; e++) {
                var n = this.holes[e];
                t.holes.push(n.toJSON())
            }
            return t
        },
        fromJSON: function (t) {
            Ea.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
            for (var e = 0, i = t.holes.length; e < i; e++) {
                var n = t.holes[e];
                this.holes.push((new Ea).fromJSON(n))
            }
            return this
        }
    }), La.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: La,
        isLight: !0,
        copy: function (t) {
            return ot.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
        },
        toJSON: function (t) {
            var e = ot.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
        }
    }), Aa.prototype = Object.assign(Object.create(La.prototype), {
        constructor: Aa,
        isHemisphereLight: !0,
        copy: function (t) {
            return La.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
        }
    }), Object.assign(Pa.prototype, {
        copy: function (t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        toJSON: function () {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
        }
    }), Ra.prototype = Object.assign(Object.create(Pa.prototype), {
        constructor: Ra,
        isSpotLightShadow: !0,
        update: function (t) {
            var e = this.camera,
                i = 2 * g.RAD2DEG * t.angle,
                n = this.mapSize.width / this.mapSize.height,
                r = t.distance || e.far;
            i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix())
        }
    }), Ca.prototype = Object.assign(Object.create(La.prototype), {
        constructor: Ca,
        isSpotLight: !0,
        copy: function (t) {
            return La.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), Oa.prototype = Object.assign(Object.create(La.prototype), {
        constructor: Oa,
        isPointLight: !0,
        copy: function (t) {
            return La.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
        }
    }), Ia.prototype = Object.assign(Object.create(Ti.prototype), {
        constructor: Ia,
        isOrthographicCamera: !0,
        copy: function (t, e) {
            return Ti.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
        },
        setViewOffset: function (t, e, i, n, r, a) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        },
        clearViewOffset: function () {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function () {
            var t = (this.right - this.left) / (2 * this.zoom),
                e = (this.top - this.bottom) / (2 * this.zoom),
                i = (this.right + this.left) / 2,
                n = (this.top + this.bottom) / 2,
                r = i - t,
                a = i + t,
                o = n + e,
                s = n - e;
            if (null !== this.view && this.view.enabled) {
                var c = this.zoom / (this.view.width / this.view.fullWidth),
                    h = this.zoom / (this.view.height / this.view.fullHeight),
                    l = (this.right - this.left) / this.view.width,
                    u = (this.top - this.bottom) / this.view.height;
                a = (r += l * (this.view.offsetX / c)) + l * (this.view.width / c), s = (o -= u * (this.view.offsetY / h)) - u * (this.view.height / h)
            }
            this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function (t) {
            var e = ot.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
        }
    }), Da.prototype = Object.assign(Object.create(Pa.prototype), {
        constructor: Da
    }), za.prototype = Object.assign(Object.create(La.prototype), {
        constructor: za,
        isDirectionalLight: !0,
        copy: function (t) {
            return La.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), Na.prototype = Object.assign(Object.create(La.prototype), {
        constructor: Na,
        isAmbientLight: !0
    }), Ba.prototype = Object.assign(Object.create(La.prototype), {
        constructor: Ba,
        isRectAreaLight: !0,
        copy: function (t) {
            return La.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
        },
        toJSON: function (t) {
            var e = La.prototype.toJSON.call(this, t);
            return e.object.width = this.width, e.object.height = this.height, e
        }
    }), Object.assign(Ua.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                a = new $r(r.manager);
            a.setPath(r.path), a.load(t, (function (t) {
                e(r.parse(JSON.parse(t)))
            }), i, n)
        },
        parse: function (t) {
            var e = this.textures;

            function i(t) {
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
            }
            var n = new Ir[t.type];
            if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && n.specular.setHex(t.specular), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearCoat && (n.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (n.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.combine && (n.combine = t.combine), void 0 !== t.side && (n.side = t.side), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (n.skinning = t.skinning), void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.uniforms)
                for (var r in t.uniforms) {
                    var a = t.uniforms[r];
                    switch (n.uniforms[r] = {}, a.type) {
                    case "t":
                        n.uniforms[r].value = i(a.value);
                        break;
                    case "c":
                        n.uniforms[r].value = (new q).setHex(a.value);
                        break;
                    case "v2":
                        n.uniforms[r].value = (new v).fromArray(a.value);
                        break;
                    case "v3":
                        n.uniforms[r].value = (new b).fromArray(a.value);
                        break;
                    case "v4":
                        n.uniforms[r].value = (new R).fromArray(a.value);
                        break;
                    case "m3":
                        n.uniforms[r].value = (new w).fromArray(a.value);
                    case "m4":
                        n.uniforms[r].value = (new y).fromArray(a.value);
                        break;
                    default:
                        n.uniforms[r].value = a.value
                    }
                }
            if (void 0 !== t.defines && (n.defines = t.defines), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
                for (var o in t.extensions) n.extensions[o] = t.extensions[o];
            if (void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = i(t.map)), void 0 !== t.alphaMap && (n.alphaMap = i(t.alphaMap), n.transparent = !0), void 0 !== t.bumpMap && (n.bumpMap = i(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = i(t.normalMap)), void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
                var s = t.normalScale;
                !1 === Array.isArray(s) && (s = [s, s]), n.normalScale = (new v).fromArray(s)
            }
            return void 0 !== t.displacementMap && (n.displacementMap = i(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = i(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = i(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = i(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = i(t.specularMap)), void 0 !== t.envMap && (n.envMap = i(t.envMap)), void 0 !== t.envMapIntensity && (n.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.lightMap && (n.lightMap = i(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = i(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = i(t.gradientMap)), n
        },
        setPath: function (t) {
            return this.path = t, this
        },
        setTextures: function (t) {
            return this.textures = t, this
        }
    });
    var Ga = function (t) {
        var e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.substr(0, e + 1)
    };

    function Fa(t) {
        this.manager = void 0 !== t ? t : Qr
    }
    Object.assign(Fa.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                a = new $r(r.manager);
            a.setPath(r.path), a.load(t, (function (t) {
                e(r.parse(JSON.parse(t)))
            }), i, n)
        },
        parse: function (t) {
            var e = new St,
                i = t.data.index;
            if (void 0 !== i) {
                var n = new Ha[i.type](i.array);
                e.setIndex(new ut(n, 1))
            }
            var r = t.data.attributes;
            for (var a in r) {
                var o = r[a];
                n = new Ha[o.type](o.array);
                e.addAttribute(a, new ut(n, o.itemSize, o.normalized))
            }
            var s = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== s)
                for (var c = 0, h = s.length; c !== h; ++c) {
                    var l = s[c];
                    e.addGroup(l.start, l.count, l.materialIndex)
                }
            var u = t.data.boundingSphere;
            if (void 0 !== u) {
                var p = new b;
                void 0 !== u.center && p.fromArray(u.center), e.boundingSphere = new N(p, u.radius)
            }
            return t.name && (e.name = t.name), t.userData && (e.userData = t.userData), e
        },
        setPath: function (t) {
            return this.path = t, this
        }
    });
    var Ha = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };

    function ka(t) {
        this.manager = void 0 !== t ? t : Qr, this.resourcePath = ""
    }
    Object.assign(ka.prototype, {
        crossOrigin: "anonymous",
        load: function (t, e, i, n) {
            var r = this,
                a = void 0 === this.path ? Ga(t) : this.path;
            this.resourcePath = this.resourcePath || a;
            var o = new $r(r.manager);
            o.setPath(this.path), o.load(t, (function (i) {
                var a = null;
                try {
                    a = JSON.parse(i)
                } catch (e) {
                    return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                }
                var o = a.metadata;
                void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? r.parse(a, e) : console.error("THREE.ObjectLoader: Can't load " + t)
            }), i, n)
        },
        setPath: function (t) {
            return this.path = t, this
        },
        setResourcePath: function (t) {
            return this.resourcePath = t, this
        },
        setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        },
        parse: function (t, e) {
            var i = this.parseShape(t.shapes),
                n = this.parseGeometries(t.geometries, i),
                r = this.parseImages(t.images, (function () {
                    void 0 !== e && e(s)
                })),
                a = this.parseTextures(t.textures, r),
                o = this.parseMaterials(t.materials, a),
                s = this.parseObject(t.object, n, o);
            return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
        },
        parseShape: function (t) {
            var e = {};
            if (void 0 !== t)
                for (var i = 0, n = t.length; i < n; i++) {
                    var r = (new Ta).fromJSON(t[i]);
                    e[r.uuid] = r
                }
            return e
        },
        parseGeometries: function (t, e) {
            var i = {};
            if (void 0 !== t)
                for (var n = new Fa, r = 0, a = t.length; r < a; r++) {
                    var o, s = t[r];
                    switch (s.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        o = new _r[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        o = new _r[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        o = new _r[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        o = new _r[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        o = new _r[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        o = new _r[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "DodecahedronBufferGeometry":
                    case "IcosahedronGeometry":
                    case "IcosahedronBufferGeometry":
                    case "OctahedronGeometry":
                    case "OctahedronBufferGeometry":
                    case "TetrahedronGeometry":
                    case "TetrahedronBufferGeometry":
                        o = new _r[s.type](s.radius, s.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        o = new _r[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        o = new _r[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        o = new _r[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        o = new _r[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                        break;
                    case "PolyhedronGeometry":
                    case "PolyhedronBufferGeometry":
                        o = new _r[s.type](s.vertices, s.indices, s.radius, s.details);
                        break;
                    case "ShapeGeometry":
                    case "ShapeBufferGeometry":
                        for (var c = [], h = 0, l = s.shapes.length; h < l; h++) {
                            var u = e[s.shapes[h]];
                            c.push(u)
                        }
                        o = new _r[s.type](c, s.curveSegments);
                        break;
                    case "ExtrudeGeometry":
                    case "ExtrudeBufferGeometry":
                        for (c = [], h = 0, l = s.shapes.length; h < l; h++) {
                            u = e[s.shapes[h]];
                            c.push(u)
                        }
                        var p = s.options.extrudePath;
                        void 0 !== p && (s.options.extrudePath = (new Ma[p.type]).fromJSON(p)), o = new _r[s.type](c, s.options);
                        break;
                    case "BufferGeometry":
                        o = n.parse(s);
                        break;
                    case "Geometry":
                        if ("THREE" in window && "LegacyJSONLoader" in THREE) o = (new THREE.LegacyJSONLoader).parse(s, this.resourcePath).geometry;
                        else console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                        continue
                    }
                    o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData), i[s.uuid] = o
                }
            return i
        },
        parseMaterials: function (t, e) {
            var i = {},
                n = {};
            if (void 0 !== t) {
                var r = new Ua;
                r.setTextures(e);
                for (var a = 0, o = t.length; a < o; a++) {
                    var s = t[a];
                    if ("MultiMaterial" === s.type) {
                        for (var c = [], h = 0; h < s.materials.length; h++) {
                            var l = s.materials[h];
                            void 0 === i[l.uuid] && (i[l.uuid] = r.parse(l)), c.push(i[l.uuid])
                        }
                        n[s.uuid] = c
                    } else n[s.uuid] = r.parse(s), i[s.uuid] = n[s.uuid]
                }
            }
            return n
        },
        parseAnimations: function (t) {
            for (var e = [], i = 0; i < t.length; i++) {
                var n = t[i],
                    r = Xr.parse(n);
                void 0 !== n.uuid && (r.uuid = n.uuid), e.push(r)
            }
            return e
        },
        parseImages: function (t, e) {
            var i = this,
                n = {};

            function r(t) {
                return i.manager.itemStart(t), a.load(t, (function () {
                    i.manager.itemEnd(t)
                }), void 0, (function () {
                    i.manager.itemError(t), i.manager.itemEnd(t)
                }))
            }
            if (void 0 !== t && t.length > 0) {
                var a = new ea(new Zr(e));
                a.setCrossOrigin(this.crossOrigin);
                for (var o = 0, s = t.length; o < s; o++) {
                    var c = t[o],
                        h = c.url;
                    if (Array.isArray(h)) {
                        n[c.uuid] = [];
                        for (var l = 0, u = h.length; l < u; l++) {
                            var p = h[l],
                                d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : i.resourcePath + p;
                            n[c.uuid].push(r(d))
                        }
                    } else {
                        d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : i.resourcePath + c.url;
                        n[c.uuid] = r(d)
                    }
                }
            }
            return n
        },
        parseTextures: function (t, e) {
            function i(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
            }
            var n = {};
            if (void 0 !== t)
                for (var r = 0, a = t.length; r < a; r++) {
                    var o, s = t[r];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(e[s.image]) ? new ae(e[s.image]) : new P(e[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = i(s.mapping, Ya)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = i(s.wrap[0], Ja), o.wrapT = i(s.wrap[1], Ja)), void 0 !== s.format && (o.format = s.format), void 0 !== s.type && (o.type = s.type), void 0 !== s.encoding && (o.encoding = s.encoding), void 0 !== s.minFilter && (o.minFilter = i(s.minFilter, Za)), void 0 !== s.magFilter && (o.magFilter = i(s.magFilter, Za)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (o.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (o.unpackAlignment = s.unpackAlignment), n[s.uuid] = o
                }
            return n
        },
        parseObject: function (t, e, i) {
            var n;

            function r(t) {
                return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
            }

            function a(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        for (var e = [], n = 0, r = t.length; n < r; n++) {
                            var a = t[n];
                            void 0 === i[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(i[a])
                        }
                        return e
                    }
                    return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t), i[t]
                }
            }
            switch (t.type) {
            case "Scene":
                n = new Vi, void 0 !== t.background && Number.isInteger(t.background) && (n.background = new q(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? n.fog = new ki(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (n.fog = new Hi(t.fog.color, t.fog.density)));
                break;
            case "PerspectiveCamera":
                n = new Li(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (n.focus = t.focus), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.filmGauge && (n.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (n.filmOffset = t.filmOffset), void 0 !== t.view && (n.view = Object.assign({}, t.view));
                break;
            case "OrthographicCamera":
                n = new Ia(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.view && (n.view = Object.assign({}, t.view));
                break;
            case "AmbientLight":
                n = new Na(t.color, t.intensity);
                break;
            case "DirectionalLight":
                n = new za(t.color, t.intensity);
                break;
            case "PointLight":
                n = new Oa(t.color, t.intensity, t.distance, t.decay);
                break;
            case "RectAreaLight":
                n = new Ba(t.color, t.intensity, t.width, t.height);
                break;
            case "SpotLight":
                n = new Ca(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                break;
            case "HemisphereLight":
                n = new Aa(t.color, t.groundColor, t.intensity);
                break;
            case "SkinnedMesh":
                console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
            case "Mesh":
                var o = r(t.geometry),
                    s = a(t.material);
                n = o.bones && o.bones.length > 0 ? new Ji(o, s) : new Xt(o, s);
                break;
            case "LOD":
                n = new Yi;
                break;
            case "Line":
                n = new $i(r(t.geometry), a(t.material), t.mode);
                break;
            case "LineLoop":
                n = new en(r(t.geometry), a(t.material));
                break;
            case "LineSegments":
                n = new tn(r(t.geometry), a(t.material));
                break;
            case "PointCloud":
            case "Points":
                n = new rn(r(t.geometry), a(t.material));
                break;
            case "Sprite":
                n = new Xi(a(t.material));
                break;
            case "Group":
                n = new Ei;
                break;
            default:
                n = new ot
            }
            if (n.uuid = t.uuid, void 0 !== t.name && (n.name = t.name), void 0 !== t.matrix ? (n.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (n.matrixAutoUpdate = t.matrixAutoUpdate), n.matrixAutoUpdate && n.matrix.decompose(n.position, n.quaternion, n.scale)) : (void 0 !== t.position && n.position.fromArray(t.position), void 0 !== t.rotation && n.rotation.fromArray(t.rotation), void 0 !== t.quaternion && n.quaternion.fromArray(t.quaternion), void 0 !== t.scale && n.scale.fromArray(t.scale)), void 0 !== t.castShadow && (n.castShadow = t.castShadow), void 0 !== t.receiveShadow && (n.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (n.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (n.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && n.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (n.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.frustumCulled && (n.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (n.renderOrder = t.renderOrder), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.layers && (n.layers.mask = t.layers), void 0 !== t.children)
                for (var c = t.children, h = 0; h < c.length; h++) n.add(this.parseObject(c[h], e, i));
            if ("LOD" === t.type)
                for (var l = t.levels, u = 0; u < l.length; u++) {
                    var p = l[u],
                        d = n.getObjectByProperty("uuid", p.object);
                    void 0 !== d && n.addLevel(d, p.distance)
                }
            return n
        }
    });
    var Va, ja, Wa, qa, Xa, Ya = {
            UVMapping: 300,
            CubeReflectionMapping: 301,
            CubeRefractionMapping: 302,
            EquirectangularReflectionMapping: 303,
            EquirectangularRefractionMapping: 304,
            SphericalReflectionMapping: 305,
            CubeUVReflectionMapping: 306,
            CubeUVRefractionMapping: 307
        },
        Ja = {
            RepeatWrapping: 1e3,
            ClampToEdgeWrapping: 1001,
            MirroredRepeatWrapping: 1002
        },
        Za = {
            NearestFilter: 1003,
            NearestMipMapNearestFilter: 1004,
            NearestMipMapLinearFilter: 1005,
            LinearFilter: 1006,
            LinearMipMapNearestFilter: 1007,
            LinearMipMapLinearFilter: 1008
        };

    function Qa(t) {
        "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== t ? t : Qr, this.options = void 0
    }

    function Ka() {
        this.type = "ShapePath", this.color = new q, this.subPaths = [], this.currentPath = null
    }

    function $a(t) {
        this.type = "Font", this.data = t
    }

    function to(t, e, i, n, r) {
        var a = r.glyphs[t] || r.glyphs["?"];
        if (a) {
            var o, s, c, h, l, u, p, d, f = new Ka;
            if (a.o)
                for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), g = 0, v = m.length; g < v;) {
                    switch (m[g++]) {
                    case "m":
                        o = m[g++] * e + i, s = m[g++] * e + n, f.moveTo(o, s);
                        break;
                    case "l":
                        o = m[g++] * e + i, s = m[g++] * e + n, f.lineTo(o, s);
                        break;
                    case "q":
                        c = m[g++] * e + i, h = m[g++] * e + n, l = m[g++] * e + i, u = m[g++] * e + n, f.quadraticCurveTo(l, u, c, h);
                        break;
                    case "b":
                        c = m[g++] * e + i, h = m[g++] * e + n, l = m[g++] * e + i, u = m[g++] * e + n, p = m[g++] * e + i, d = m[g++] * e + n, f.bezierCurveTo(l, u, p, d, c, h)
                    }
                }
            return {
                offsetX: a.ha * e,
                path: f
            }
        }
    }

    function eo() {}
    Qa.prototype = {
        constructor: Qa,
        setOptions: function (t) {
            return this.options = t, this
        },
        load: function (t, e, i, n) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                a = Jr.get(t);
            if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function () {
                e && e(a), r.manager.itemEnd(t)
            }), 0), a;
            fetch(t).then((function (t) {
                return t.blob()
            })).then((function (t) {
                return createImageBitmap(t, r.options)
            })).then((function (i) {
                Jr.add(t, i), e && e(i), r.manager.itemEnd(t)
            })).catch((function (e) {
                n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
            }))
        },
        setCrossOrigin: function () {
            return this
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }, Object.assign(Ka.prototype, {
        moveTo: function (t, e) {
            this.currentPath = new Ea, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
        },
        lineTo: function (t, e) {
            this.currentPath.lineTo(t, e)
        },
        quadraticCurveTo: function (t, e, i, n) {
            this.currentPath.quadraticCurveTo(t, e, i, n)
        },
        bezierCurveTo: function (t, e, i, n, r, a) {
            this.currentPath.bezierCurveTo(t, e, i, n, r, a)
        },
        splineThru: function (t) {
            this.currentPath.splineThru(t)
        },
        toShapes: function (t, e) {
            function i(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++) {
                    var r = t[i],
                        a = new Ta;
                    a.curves = r.curves, e.push(a)
                }
                return e
            }

            function n(t, e) {
                for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
                    var o = e[r],
                        s = e[a],
                        c = s.x - o.x,
                        h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (h < 0 && (o = e[a], c = -c, s = e[r], h = -h), t.y < o.y || t.y > s.y) continue;
                        if (t.y === o.y) {
                            if (t.x === o.x) return !0
                        } else {
                            var l = h * (t.x - o.x) - c * (t.y - o.y);
                            if (0 === l) return !0;
                            if (l < 0) continue;
                            n = !n
                        }
                    } else {
                        if (t.y !== o.y) continue;
                        if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
                    }
                }
                return n
            }
            var r = Qn.isClockWise,
                a = this.subPaths;
            if (0 === a.length) return [];
            if (!0 === e) return i(a);
            var o, s, c, h = [];
            if (1 === a.length) return s = a[0], (c = new Ta).curves = s.curves, h.push(c), h;
            var l = !r(a[0].getPoints());
            l = t ? !l : l;
            var u, p, d = [],
                f = [],
                m = [],
                g = 0;
            f[g] = void 0, m[g] = [];
            for (var v = 0, y = a.length; v < y; v++) o = r(u = (s = a[v]).getPoints()), (o = t ? !o : o) ? (!l && f[g] && g++, f[g] = {
                s: new Ta,
                p: u
            }, f[g].s.curves = s.curves, l && g++, m[g] = []) : m[g].push({
                h: s,
                p: u[0]
            });
            if (!f[0]) return i(a);
            if (f.length > 1) {
                for (var x = !1, b = [], w = 0, _ = f.length; w < _; w++) d[w] = [];
                for (w = 0, _ = f.length; w < _; w++)
                    for (var M = m[w], S = 0; S < M.length; S++) {
                        for (var E = M[S], T = !0, L = 0; L < f.length; L++) n(E.p, f[L].p) && (w !== L && b.push({
                            froms: w,
                            tos: L,
                            hole: S
                        }), T ? (T = !1, d[L].push(E)) : x = !0);
                        T && d[w].push(E)
                    }
                b.length > 0 && (x || (m = d))
            }
            v = 0;
            for (var A = f.length; v < A; v++) {
                c = f[v].s, h.push(c);
                for (var P = 0, R = (p = m[v]).length; P < R; P++) c.holes.push(p[P].h)
            }
            return h
        }
    }), Object.assign($a.prototype, {
        isFont: !0,
        generateShapes: function (t, e) {
            void 0 === e && (e = 100);
            for (var i = [], n = function (t, e, i) {
                    for (var n = Array.from ? Array.from(t) : String(t).split(""), r = e / i.resolution, a = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r, o = [], s = 0, c = 0, h = 0; h < n.length; h++) {
                        var l = n[h];
                        if ("\n" === l) s = 0, c -= a;
                        else {
                            var u = to(l, r, s, c, i);
                            s += u.offsetX, o.push(u.path)
                        }
                    }
                    return o
                }(t, e, this.data), r = 0, a = n.length; r < a; r++) Array.prototype.push.apply(i, n[r].toShapes());
            return i
        }
    }), Object.assign(function (t) {
        this.manager = void 0 !== t ? t : Qr
    }.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                a = new $r(this.manager);
            a.setPath(this.path), a.load(t, (function (t) {
                var i;
                try {
                    i = JSON.parse(t)
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(t.substring(65, t.length - 2))
                }
                var n = r.parse(i);
                e && e(n)
            }), i, n)
        },
        parse: function (t) {
            return new $a(t)
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), eo.Handlers = {
        handlers: [],
        add: function (t, e) {
            this.handlers.push(t, e)
        },
        get: function (t) {
            for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
                var r = e[i],
                    a = e[i + 1];
                if (r.test(t)) return a
            }
            return null
        }
    }, Object.assign(eo.prototype, {
        crossOrigin: "anonymous",
        onLoadStart: function () {},
        onLoadProgress: function () {},
        onLoadComplete: function () {},
        initMaterials: function (t, e, i) {
            for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i);
            return n
        },
        createMaterial: (Va = {
            NoBlending: 0,
            NormalBlending: 1,
            AdditiveBlending: 2,
            SubtractiveBlending: 3,
            MultiplyBlending: 4,
            CustomBlending: 5
        }, ja = new q, Wa = new na, qa = new Ua, function (t, e, i) {
            var n = {};

            function r(t, r, a, o, s) {
                var c, h = e + t,
                    l = eo.Handlers.get(h);
                null !== l ? c = l.load(h) : (Wa.setCrossOrigin(i), c = Wa.load(h)), void 0 !== r && (c.repeat.fromArray(r), 1 !== r[0] && (c.wrapS = 1e3), 1 !== r[1] && (c.wrapT = 1e3)), void 0 !== a && c.offset.fromArray(a), void 0 !== o && ("repeat" === o[0] && (c.wrapS = 1e3), "mirror" === o[0] && (c.wrapS = 1002), "repeat" === o[1] && (c.wrapT = 1e3), "mirror" === o[1] && (c.wrapT = 1002)), void 0 !== s && (c.anisotropy = s);
                var u = g.generateUUID();
                return n[u] = c, u
            }
            var a = {
                uuid: g.generateUUID(),
                type: "MeshLambertMaterial"
            };
            for (var o in t) {
                var s = t[o];
                switch (o) {
                case "DbgColor":
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                    break;
                case "DbgName":
                    a.name = s;
                    break;
                case "blending":
                    a.blending = Va[s];
                    break;
                case "colorAmbient":
                case "mapAmbient":
                    console.warn("THREE.Loader.createMaterial:", o, "is no longer supported.");
                    break;
                case "colorDiffuse":
                    a.color = ja.fromArray(s).getHex();
                    break;
                case "colorSpecular":
                    a.specular = ja.fromArray(s).getHex();
                    break;
                case "colorEmissive":
                    a.emissive = ja.fromArray(s).getHex();
                    break;
                case "specularCoef":
                    a.shininess = s;
                    break;
                case "shading":
                    "basic" === s.toLowerCase() && (a.type = "MeshBasicMaterial"), "phong" === s.toLowerCase() && (a.type = "MeshPhongMaterial"), "standard" === s.toLowerCase() && (a.type = "MeshStandardMaterial");
                    break;
                case "mapDiffuse":
                    a.map = r(s, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy);
                    break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                    break;
                case "mapEmissive":
                    a.emissiveMap = r(s, t.mapEmissiveRepeat, t.mapEmissiveOffset, t.mapEmissiveWrap, t.mapEmissiveAnisotropy);
                    break;
                case "mapEmissiveRepeat":
                case "mapEmissiveOffset":
                case "mapEmissiveWrap":
                case "mapEmissiveAnisotropy":
                    break;
                case "mapLight":
                    a.lightMap = r(s, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy);
                    break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                    break;
                case "mapAO":
                    a.aoMap = r(s, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy);
                    break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                    break;
                case "mapBump":
                    a.bumpMap = r(s, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy);
                    break;
                case "mapBumpScale":
                    a.bumpScale = s;
                    break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                    break;
                case "mapNormal":
                    a.normalMap = r(s, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy);
                    break;
                case "mapNormalFactor":
                    a.normalScale = s;
                    break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                    break;
                case "mapSpecular":
                    a.specularMap = r(s, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy);
                    break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                    break;
                case "mapMetalness":
                    a.metalnessMap = r(s, t.mapMetalnessRepeat, t.mapMetalnessOffset, t.mapMetalnessWrap, t.mapMetalnessAnisotropy);
                    break;
                case "mapMetalnessRepeat":
                case "mapMetalnessOffset":
                case "mapMetalnessWrap":
                case "mapMetalnessAnisotropy":
                    break;
                case "mapRoughness":
                    a.roughnessMap = r(s, t.mapRoughnessRepeat, t.mapRoughnessOffset, t.mapRoughnessWrap, t.mapRoughnessAnisotropy);
                    break;
                case "mapRoughnessRepeat":
                case "mapRoughnessOffset":
                case "mapRoughnessWrap":
                case "mapRoughnessAnisotropy":
                    break;
                case "mapAlpha":
                    a.alphaMap = r(s, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy);
                    break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                    break;
                case "flipSided":
                    a.side = 1;
                    break;
                case "doubleSided":
                    a.side = 2;
                    break;
                case "transparency":
                    console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), a.opacity = s;
                    break;
                case "depthTest":
                case "depthWrite":
                case "colorWrite":
                case "opacity":
                case "reflectivity":
                case "transparent":
                case "visible":
                case "wireframe":
                    a[o] = s;
                    break;
                case "vertexColors":
                    !0 === s && (a.vertexColors = 2), "face" === s && (a.vertexColors = 1);
                    break;
                default:
                    console.error("THREE.Loader.createMaterial: Unsupported", o, s)
                }
            }
            return "MeshBasicMaterial" === a.type && delete a.emissive, "MeshPhongMaterial" !== a.type && delete a.specular, a.opacity < 1 && (a.transparent = !0), qa.setTextures(n), qa.parse(a)
        })
    });
    var io, no, ro, ao, oo, so, co, ho, lo, uo, po = function () {
        return void 0 === Xa && (Xa = new(window.AudioContext || window.webkitAudioContext)), Xa
    };

    function fo(t) {
        this.manager = void 0 !== t ? t : Qr
    }

    function mo(t, e, i, n) {
        ot.call(this), this.type = "CubeCamera";
        var r = new Li(90, 1, t, e);
        r.up.set(0, -1, 0), r.lookAt(new b(1, 0, 0)), this.add(r);
        var a = new Li(90, 1, t, e);
        a.up.set(0, -1, 0), a.lookAt(new b(-1, 0, 0)), this.add(a);
        var o = new Li(90, 1, t, e);
        o.up.set(0, 0, 1), o.lookAt(new b(0, 1, 0)), this.add(o);
        var s = new Li(90, 1, t, e);
        s.up.set(0, 0, -1), s.lookAt(new b(0, -1, 0)), this.add(s);
        var c = new Li(90, 1, t, e);
        c.up.set(0, -1, 0), c.lookAt(new b(0, 0, 1)), this.add(c);
        var h = new Li(90, 1, t, e);
        h.up.set(0, -1, 0), h.lookAt(new b(0, 0, -1)), this.add(h), n = n || {
            format: 1022,
            magFilter: 1006,
            minFilter: 1006
        }, this.renderTarget = new I(i, i, n), this.renderTarget.texture.name = "CubeCamera", this.update = function (t, e) {
            null === this.parent && this.updateMatrixWorld();
            var i = t.getRenderTarget(),
                n = this.renderTarget,
                l = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, n.activeCubeFace = 0, t.render(e, r, n), n.activeCubeFace = 1, t.render(e, a, n), n.activeCubeFace = 2, t.render(e, o, n), n.activeCubeFace = 3, t.render(e, s, n), n.activeCubeFace = 4, t.render(e, c, n), n.texture.generateMipmaps = l, n.activeCubeFace = 5, t.render(e, h, n), t.setRenderTarget(i)
        }, this.clear = function (t, e, i, n) {
            for (var r = t.getRenderTarget(), a = this.renderTarget, o = 0; o < 6; o++) a.activeCubeFace = o, t.setRenderTarget(a), t.clear(e, i, n);
            t.setRenderTarget(r)
        }
    }

    function go(t) {
        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }

    function vo() {
        ot.call(this), this.type = "AudioListener", this.context = po(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0
    }

    function yo(t) {
        ot.call(this), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }

    function xo(t) {
        yo.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }

    function bo(t, e) {
        this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
    }

    function wo(t, e, i) {
        this.binding = t, this.valueSize = i;
        var n, r = Float64Array;
        switch (e) {
        case "quaternion":
            n = this._slerp;
            break;
        case "string":
        case "bool":
            r = Array, n = this._select;
            break;
        default:
            n = this._lerp
        }
        this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    }
    Object.assign(fo.prototype, {
        load: function (t, e, i, n) {
            var r = new $r(this.manager);
            r.setResponseType("arraybuffer"), r.setPath(this.path), r.load(t, (function (t) {
                var i = t.slice(0);
                po().decodeAudioData(i, (function (t) {
                    e(t)
                }))
            }), i, n)
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(function () {
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Li, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Li, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }.prototype, {
        update: (lo = new y, uo = new y, function (t) {
            if (io !== this || no !== t.focus || ro !== t.fov || ao !== t.aspect * this.aspect || oo !== t.near || so !== t.far || co !== t.zoom || ho !== this.eyeSep) {
                io = this, no = t.focus, ro = t.fov, ao = t.aspect * this.aspect, oo = t.near, so = t.far, co = t.zoom;
                var e, i, n = t.projectionMatrix.clone(),
                    r = (ho = this.eyeSep / 2) * oo / no,
                    a = oo * Math.tan(g.DEG2RAD * ro * .5) / co;
                uo.elements[12] = -ho, lo.elements[12] = ho, e = -a * ao + r, i = a * ao + r, n.elements[0] = 2 * oo / (i - e), n.elements[8] = (i + e) / (i - e), this.cameraL.projectionMatrix.copy(n), e = -a * ao - r, i = a * ao - r, n.elements[0] = 2 * oo / (i - e), n.elements[8] = (i + e) / (i - e), this.cameraR.projectionMatrix.copy(n)
            }
            this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(uo), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(lo)
        })
    }), mo.prototype = Object.create(ot.prototype), mo.prototype.constructor = mo, Object.assign(go.prototype, {
        start: function () {
            this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        },
        stop: function () {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1
        },
        getElapsedTime: function () {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function () {
            var t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    }), vo.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: vo,
        getInput: function () {
            return this.gain
        },
        removeFilter: function () {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
        },
        getFilter: function () {
            return this.filter
        },
        setFilter: function (t) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
        },
        getMasterVolume: function () {
            return this.gain.gain.value
        },
        setMasterVolume: function (t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
        },
        updateMatrixWorld: function () {
            var t = new b,
                e = new x,
                i = new b,
                n = new b,
                r = new go;
            return function (a) {
                ot.prototype.updateMatrixWorld.call(this, a);
                var o = this.context.listener,
                    s = this.up;
                if (this.timeDelta = r.getDelta(), this.matrixWorld.decompose(t, e, i), n.set(0, 0, -1).applyQuaternion(e), o.positionX) {
                    var c = this.context.currentTime + this.timeDelta;
                    o.positionX.linearRampToValueAtTime(t.x, c), o.positionY.linearRampToValueAtTime(t.y, c), o.positionZ.linearRampToValueAtTime(t.z, c), o.forwardX.linearRampToValueAtTime(n.x, c), o.forwardY.linearRampToValueAtTime(n.y, c), o.forwardZ.linearRampToValueAtTime(n.z, c), o.upX.linearRampToValueAtTime(s.x, c), o.upY.linearRampToValueAtTime(s.y, c), o.upZ.linearRampToValueAtTime(s.z, c)
                } else o.setPosition(t.x, t.y, t.z), o.setOrientation(n.x, n.y, n.z, s.x, s.y, s.z)
            }
        }()
    }), yo.prototype = Object.assign(Object.create(ot.prototype), {
        constructor: yo,
        getOutput: function () {
            return this.gain
        },
        setNodeSource: function (t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
        },
        setMediaElementSource: function (t) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
        },
        setBuffer: function (t) {
            return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
        },
        play: function () {
            if (!0 !== this.isPlaying) {
                if (!1 !== this.hasPlaybackControl) {
                    var t = this.context.createBufferSource();
                    return t.buffer = this.buffer, t.detune.value = this.detune, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            } else console.warn("THREE.Audio: Audio is already playing.")
        },
        pause: function () {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        stop: function () {
            if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        connect: function () {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function () {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function () {
            return this.filters
        },
        setFilters: function (t) {
            return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
        },
        setDetune: function (t) {
            return this.detune = t, !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
        },
        getDetune: function () {
            return this.detune
        },
        getFilter: function () {
            return this.getFilters()[0]
        },
        setFilter: function (t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function (t) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getPlaybackRate: function () {
            return this.playbackRate
        },
        onEnded: function () {
            this.isPlaying = !1
        },
        getLoop: function () {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        },
        setLoop: function (t) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getVolume: function () {
            return this.gain.gain.value
        },
        setVolume: function (t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
        }
    }), xo.prototype = Object.assign(Object.create(yo.prototype), {
        constructor: xo,
        getOutput: function () {
            return this.panner
        },
        getRefDistance: function () {
            return this.panner.refDistance
        },
        setRefDistance: function (t) {
            return this.panner.refDistance = t, this
        },
        getRolloffFactor: function () {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function (t) {
            return this.panner.rolloffFactor = t, this
        },
        getDistanceModel: function () {
            return this.panner.distanceModel
        },
        setDistanceModel: function (t) {
            return this.panner.distanceModel = t, this
        },
        getMaxDistance: function () {
            return this.panner.maxDistance
        },
        setMaxDistance: function (t) {
            return this.panner.maxDistance = t, this
        },
        setDirectionalCone: function (t, e, i) {
            return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = i, this
        },
        updateMatrixWorld: function () {
            var t = new b,
                e = new x,
                i = new b,
                n = new b;
            return function (r) {
                if (ot.prototype.updateMatrixWorld.call(this, r), !1 !== this.isPlaying) {
                    this.matrixWorld.decompose(t, e, i), n.set(0, 0, 1).applyQuaternion(e);
                    var a = this.panner;
                    if (a.positionX) {
                        var o = this.context.currentTime + this.listener.timeDelta;
                        a.positionX.linearRampToValueAtTime(t.x, o), a.positionY.linearRampToValueAtTime(t.y, o), a.positionZ.linearRampToValueAtTime(t.z, o), a.orientationX.linearRampToValueAtTime(n.x, o), a.orientationY.linearRampToValueAtTime(n.y, o), a.orientationZ.linearRampToValueAtTime(n.z, o)
                    } else a.setPosition(t.x, t.y, t.z), a.setOrientation(n.x, n.y, n.z)
                }
            }
        }()
    }), Object.assign(bo.prototype, {
        getFrequencyData: function () {
            return this.analyser.getByteFrequencyData(this.data), this.data
        },
        getAverageFrequency: function () {
            for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i];
            return t / e.length
        }
    }), Object.assign(wo.prototype, {
        accumulate: function (t, e) {
            var i = this.buffer,
                n = this.valueSize,
                r = t * n + n,
                a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== n; ++o) i[r + o] = i[o];
                a = e
            } else {
                var s = e / (a += e);
                this._mixBufferRegion(i, r, 0, s, n)
            }
            this.cumulativeWeight = a
        },
        apply: function (t) {
            var e = this.valueSize,
                i = this.buffer,
                n = t * e + e,
                r = this.cumulativeWeight,
                a = this.binding;
            if (this.cumulativeWeight = 0, r < 1) {
                var o = 3 * e;
                this._mixBufferRegion(i, n, o, 1 - r, e)
            }
            for (var s = e, c = e + e; s !== c; ++s)
                if (i[s] !== i[s + e]) {
                    a.setValue(i, n);
                    break
                }
        },
        saveOriginalState: function () {
            var t = this.binding,
                e = this.buffer,
                i = this.valueSize,
                n = 3 * i;
            t.getValue(e, n);
            for (var r = i, a = n; r !== a; ++r) e[r] = e[n + r % i];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function () {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        },
        _select: function (t, e, i, n, r) {
            if (n >= .5)
                for (var a = 0; a !== r; ++a) t[e + a] = t[i + a]
        },
        _slerp: function (t, e, i, n) {
            x.slerpFlat(t, e, t, e, t, i, n)
        },
        _lerp: function (t, e, i, n, r) {
            for (var a = 1 - n, o = 0; o !== r; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[i + o] * n
            }
        }
    });
    var _o, Mo, So, Eo, To, Lo, Ao, Po, Ro, Co, Oo, Io, Do, zo;

    function No(t, e, i) {
        var n = i || Bo.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, n)
    }

    function Bo(t, e, i) {
        this.path = e, this.parsedPath = i || Bo.parseTrackName(e), this.node = Bo.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
    }

    function Uo(t, e, i) {
        this._mixer = t, this._clip = e, this._localRoot = i || null;
        for (var n = e.tracks, r = n.length, a = new Array(r), o = {
                endingStart: 2400,
                endingEnd: 2400
            }, s = 0; s !== r; ++s) {
            var c = n[s].createInterpolant(null);
            a[s] = c, c.settings = o
        }
        this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    function Go(t) {
        this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }

    function Fo(t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
    }

    function Ho() {
        St.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    function ko(t, e, i) {
        ji.call(this, t, e), this.meshPerAttribute = i || 1
    }

    function Vo(t, e, i, n) {
        "number" == typeof i && (n = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), ut.call(this, t, e, i), this.meshPerAttribute = n || 1
    }

    function jo(t, e) {
        return t.distance - e.distance
    }

    function Wo(t, e, i, n) {
        if (!1 !== t.visible && (t.raycast(e, i), !0 === n))
            for (var r = t.children, a = 0, o = r.length; a < o; a++) Wo(r[a], e, i, !0)
    }

    function qo(t, e) {
        this.min = void 0 !== t ? t : new v(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new v(-1 / 0, -1 / 0)
    }

    function Xo(t, e) {
        this.start = void 0 !== t ? t : new b, this.end = void 0 !== e ? e : new b
    }

    function Yo(t) {
        ot.call(this), this.material = t, this.render = function () {}
    }

    function Jo(t, e, i, n) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var r = void 0 !== i ? i : 16711680,
            a = void 0 !== n ? n : 1,
            o = 0,
            s = this.object.geometry;
        s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
        var c = new St,
            h = new xt(2 * o * 3, 3);
        c.addAttribute("position", h), tn.call(this, c, new Ki({
            color: r,
            linewidth: a
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function Zo(t, e) {
        ot.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
        for (var i = new St, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
            var o = r / 32 * Math.PI * 2,
                s = a / 32 * Math.PI * 2;
            n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
        }
        i.addAttribute("position", new xt(n, 3));
        var c = new Ki({
            fog: !1
        });
        this.cone = new tn(i, c), this.add(this.cone), this.update()
    }

    function Qo(t) {
        for (var e = function t(e) {
                var i = [];
                e && e.isBone && i.push(e);
                for (var n = 0; n < e.children.length; n++) i.push.apply(i, t(e.children[n]));
                return i
            }(t), i = new St, n = [], r = [], a = new q(0, 0, 1), o = new q(0, 1, 0), s = 0; s < e.length; s++) {
            var c = e[s];
            c.parent && c.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
        }
        i.addAttribute("position", new xt(n, 3)), i.addAttribute("color", new xt(r, 3));
        var h = new Ki({
            vertexColors: 2,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        tn.call(this, i, h), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }

    function Ko(t, e, i) {
        this.light = t, this.light.updateMatrixWorld(), this.color = i;
        var n = new sr(e, 4, 2),
            r = new qt({
                wireframe: !0,
                fog: !1
            });
        Xt.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    function $o(t, e) {
        this.type = "RectAreaLightHelper", this.light = t, this.color = e;
        var i = new St;
        i.addAttribute("position", new xt([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3)), i.computeBoundingSphere();
        var n = new Ki({
            fog: !1
        });
        $i.call(this, i, n);
        var r = new St;
        r.addAttribute("position", new xt([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3)), r.computeBoundingSphere(), this.add(new Xt(r, new qt({
            side: THREE.BackSide,
            fog: !1
        }))), this.update()
    }

    function ts(t, e, i) {
        ot.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i;
        var n = new yn(e);
        n.rotateY(.5 * Math.PI), this.material = new qt({
            wireframe: !0,
            fog: !1
        }), void 0 === this.color && (this.material.vertexColors = 2);
        var r = n.getAttribute("position"),
            a = new Float32Array(3 * r.count);
        n.addAttribute("color", new ut(a, 3)), this.add(new Xt(n, this.material)), this.update()
    }

    function es(t, e, i, n) {
        t = t || 10, e = e || 10, i = new q(void 0 !== i ? i : 4473924), n = new q(void 0 !== n ? n : 8947848);
        for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= e; h++, u += a) {
            s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
            var p = h === r ? i : n;
            p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3
        }
        var d = new St;
        d.addAttribute("position", new xt(s, 3)), d.addAttribute("color", new xt(c, 3));
        var f = new Ki({
            vertexColors: 2
        });
        tn.call(this, d, f)
    }

    function is(t, e, i, n, r, a) {
        t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new q(void 0 !== r ? r : 4473924), a = new q(void 0 !== a ? a : 8947848);
        var o, s, c, h, l, u, p, d = [],
            f = [];
        for (h = 0; h <= e; h++) c = h / e * (2 * Math.PI), o = Math.sin(c) * t, s = Math.cos(c) * t, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & h ? r : a, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b);
        for (h = 0; h <= i; h++)
            for (p = 1 & h ? r : a, u = t - t / i * h, l = 0; l < n; l++) c = l / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b), c = (l + 1) / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b);
        var m = new St;
        m.addAttribute("position", new xt(d, 3)), m.addAttribute("color", new xt(f, 3));
        var g = new Ki({
            vertexColors: 2
        });
        tn.call(this, m, g)
    }

    function ns(t, e, i, n) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var r = void 0 !== i ? i : 16776960,
            a = void 0 !== n ? n : 1,
            o = 0,
            s = this.object.geometry;
        s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new St,
            h = new xt(2 * o * 3, 3);
        c.addAttribute("position", h), tn.call(this, c, new Ki({
            color: r,
            linewidth: a
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function rs(t, e, i) {
        ot.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
        var n = new St;
        n.addAttribute("position", new xt([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
        var r = new Ki({
            fog: !1
        });
        this.lightPlane = new $i(n, r), this.add(this.lightPlane), (n = new St).addAttribute("position", new xt([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new $i(n, r), this.add(this.targetLine), this.update()
    }

    function as(t) {
        var e = new St,
            i = new Ki({
                color: 16777215,
                vertexColors: 1
            }),
            n = [],
            r = [],
            a = {},
            o = new q(16755200),
            s = new q(16711680),
            c = new q(43775),
            h = new q(16777215),
            l = new q(3355443);

        function u(t, e, i) {
            p(t, i), p(e, i)
        }

        function p(t, e) {
            n.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === a[t] && (a[t] = []), a[t].push(n.length / 3 - 1)
        }
        u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", h), u("p", "c", l), u("cn1", "cn2", l), u("cn3", "cn4", l), u("cf1", "cf2", l), u("cf3", "cf4", l), e.addAttribute("position", new xt(n, 3)), e.addAttribute("color", new xt(r, 3)), tn.call(this, e, i), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
    }

    function os(t, e) {
        this.object = t, void 0 === e && (e = 16776960);
        var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            n = new Float32Array(24),
            r = new St;
        r.setIndex(new ut(i, 1)), r.addAttribute("position", new ut(n, 3)), tn.call(this, r, new Ki({
            color: e
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function ss(t, e) {
        this.type = "Box3Helper", this.box = t;
        var i = void 0 !== e ? e : 16776960,
            n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            r = new St;
        r.setIndex(new ut(n, 1)), r.addAttribute("position", new xt([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), tn.call(this, r, new Ki({
            color: i
        })), this.geometry.computeBoundingSphere()
    }

    function cs(t, e, i) {
        this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
        var n = void 0 !== i ? i : 16776960,
            r = new St;
        r.addAttribute("position", new xt([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), $i.call(this, r, new Ki({
            color: n
        }));
        var a = new St;
        a.addAttribute("position", new xt([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new Xt(a, new qt({
            color: n,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        })))
    }

    function hs(t, e, i, n, r, a) {
        ot.call(this), void 0 === t && (t = new THREE.Vector3(0, 0, 1)), void 0 === e && (e = new THREE.Vector3(0, 0, 0)), void 0 === i && (i = 1), void 0 === n && (n = 16776960), void 0 === r && (r = .2 * i), void 0 === a && (a = .2 * r), void 0 === Oo && ((Oo = new St).addAttribute("position", new xt([0, 0, 0, 0, 1, 0], 3)), (Io = new vr(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new $i(Oo, new Ki({
            color: n
        })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Xt(Io, new qt({
            color: n
        })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a)
    }

    function ls(t) {
        var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
            i = new St;
        i.addAttribute("position", new xt(e, 3)), i.addAttribute("color", new xt([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
        var n = new Ki({
            vertexColors: 2
        });
        tn.call(this, i, n)
    }
    Object.assign(No.prototype, {
            getValue: function (t, e) {
                this.bind();
                var i = this._targetGroup.nCachedObjects_,
                    n = this._bindings[i];
                void 0 !== n && n.getValue(t, e)
            },
            setValue: function (t, e) {
                for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
            },
            bind: function () {
                for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
            },
            unbind: function () {
                for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
            }
        }), Object.assign(Bo, {
            Composite: No,
            create: function (t, e, i) {
                return t && t.isAnimationObjectGroup ? new Bo.Composite(t, e, i) : new Bo(t, e, i)
            },
            sanitizeNodeName: (Po = new RegExp("[\\[\\]\\.:\\/]", "g"), function (t) {
                return t.replace(/\s/g, "_").replace(Po, "")
            }),
            parseTrackName: (_o = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", Mo = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"), So = /(WCOD+)?/.source.replace("WCOD", _o), Eo = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"), To = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"), Lo = new RegExp("^" + Mo + So + Eo + To + "$"), Ao = ["material", "materials", "bones"], function (t) {
                var e = Lo.exec(t);
                if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
                var i = {
                        nodeName: e[2],
                        objectName: e[3],
                        objectIndex: e[4],
                        propertyName: e[5],
                        propertyIndex: e[6]
                    },
                    n = i.nodeName && i.nodeName.lastIndexOf(".");
                if (void 0 !== n && -1 !== n) {
                    var r = i.nodeName.substring(n + 1); - 1 !== Ao.indexOf(r) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = r)
                }
                if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
                return i
            }),
            findNode: function (t, e) {
                if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
                if (t.skeleton) {
                    var i = t.skeleton.getBoneByName(e);
                    if (void 0 !== i) return i
                }
                if (t.children) {
                    var n = function (t) {
                            for (var i = 0; i < t.length; i++) {
                                var r = t[i];
                                if (r.name === e || r.uuid === e) return r;
                                var a = n(r.children);
                                if (a) return a
                            }
                            return null
                        },
                        r = n(t.children);
                    if (r) return r
                }
                return null
            }
        }), Object.assign(Bo.prototype, {
            _getValue_unavailable: function () {},
            _setValue_unavailable: function () {},
            BindingType: {
                Direct: 0,
                EntireArray: 1,
                ArrayElement: 2,
                HasFromToArray: 3
            },
            Versioning: {
                None: 0,
                NeedsUpdate: 1,
                MatrixWorldNeedsUpdate: 2
            },
            GetterByBindingType: [function (t, e) {
                t[e] = this.node[this.propertyName]
            }, function (t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
            }, function (t, e) {
                t[e] = this.resolvedProperty[this.propertyIndex]
            }, function (t, e) {
                this.resolvedProperty.toArray(t, e)
            }],
            SetterByBindingTypeAndVersioning: [
                [function (t, e) {
                    this.targetObject[this.propertyName] = t[e]
                }, function (t, e) {
                    this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
                }, function (t, e) {
                    this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
                }],
                [function (t, e) {
                    for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
                }, function (t, e) {
                    for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                    this.targetObject.needsUpdate = !0
                }, function (t, e) {
                    for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                    this.targetObject.matrixWorldNeedsUpdate = !0
                }],
                [function (t, e) {
                    this.resolvedProperty[this.propertyIndex] = t[e]
                }, function (t, e) {
                    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
                }, function (t, e) {
                    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
                }],
                [function (t, e) {
                    this.resolvedProperty.fromArray(t, e)
                }, function (t, e) {
                    this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
                }, function (t, e) {
                    this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
                }]
            ],
            getValue: function (t, e) {
                this.bind(), this.getValue(t, e)
            },
            setValue: function (t, e) {
                this.bind(), this.setValue(t, e)
            },
            bind: function () {
                var t = this.node,
                    e = this.parsedPath,
                    i = e.objectName,
                    n = e.propertyName,
                    r = e.propertyIndex;
                if (t || (t = Bo.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                    if (i) {
                        var a = e.objectIndex;
                        switch (i) {
                        case "materials":
                            if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            t = t.material.materials;
                            break;
                        case "bones":
                            if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            t = t.skeleton.bones;
                            for (var o = 0; o < t.length; o++)
                                if (t[o].name === a) {
                                    a = o;
                                    break
                                } break;
                        default:
                            if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            t = t[i]
                        }
                        if (void 0 !== a) {
                            if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                            t = t[a]
                        }
                    }
                    var s = t[n];
                    if (void 0 !== s) {
                        var c = this.Versioning.None;
                        this.targetObject = t, void 0 !== t.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
                        var h = this.BindingType.Direct;
                        if (void 0 !== r) {
                            if ("morphTargetInfluences" === n) {
                                if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                                if (t.geometry.isBufferGeometry) {
                                    if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                    for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                                        if (t.geometry.morphAttributes.position[o].name === r) {
                                            r = o;
                                            break
                                        }
                                } else {
                                    if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                    for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                                        if (t.geometry.morphTargets[o].name === r) {
                                            r = o;
                                            break
                                        }
                                }
                            }
                            h = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
                        } else void 0 !== s.fromArray && void 0 !== s.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (h = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
                        this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c]
                    } else {
                        var l = e.nodeName;
                        console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + n + " but it wasn't found.", t)
                    }
                } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
            },
            unbind: function () {
                this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
            }
        }),

        Object.assign(Bo.prototype, {
            _getValue_unbound: Bo.prototype.getValue,
            _setValue_unbound: Bo.prototype.setValue
        }), Object.assign(function () {
            this.uuid = g.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            var t = {};
            this._indicesByUUID = t;
            for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            var n = this;
            this.stats = {
                objects: {
                    get total() {
                        return n._objects.length
                    },
                    get inUse() {
                        return this.total - n.nCachedObjects_
                    }
                },
                get bindingsPerObject() {
                    return n._bindings.length
                }
            }
        }.prototype, {
            isAnimationObjectGroup: !0,
            add: function () {
                for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, h = 0, l = arguments.length; h !== l; ++h) {
                    var u = arguments[h],
                        p = u.uuid,
                        d = n[p];
                    if (void 0 === d) {
                        d = e++, n[p] = d, t.push(u);
                        for (var f = 0, m = s; f !== m; ++f) o[f].push(new Bo(u, r[f], a[f]))
                    } else if (d < i) {
                        c = t[d];
                        var g = --i,
                            v = t[g];
                        n[v.uuid] = d, t[d] = v, n[p] = g, t[g] = u;
                        for (f = 0, m = s; f !== m; ++f) {
                            var y = o[f],
                                x = y[g],
                                b = y[d];
                            y[d] = x, void 0 === b && (b = new Bo(u, r[f], a[f])), y[g] = b
                        }
                    } else t[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
                }
                this.nCachedObjects_ = i
            },
            remove: function () {
                for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
                    var s = arguments[a],
                        c = s.uuid,
                        h = i[c];
                    if (void 0 !== h && h >= e) {
                        var l = e++,
                            u = t[l];
                        i[u.uuid] = h, t[h] = u, i[c] = l, t[l] = s;
                        for (var p = 0, d = r; p !== d; ++p) {
                            var f = n[p],
                                m = f[l],
                                g = f[h];
                            f[h] = m, f[l] = g
                        }
                    }
                }
                this.nCachedObjects_ = e
            },
            uncache: function () {
                for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                    var c = arguments[o],
                        h = c.uuid,
                        l = n[h];
                    if (void 0 !== l)
                        if (delete n[h], l < i) {
                            var u = --i,
                                p = t[u],
                                d = t[y = --e];
                            n[p.uuid] = l, t[l] = p, n[d.uuid] = u, t[u] = d, t.pop();
                            for (var f = 0, m = a; f !== m; ++f) {
                                var g = (x = r[f])[u],
                                    v = x[y];
                                x[l] = g, x[u] = v, x.pop()
                            }
                        } else {
                            var y;
                            n[(d = t[y = --e]).uuid] = l, t[l] = d, t.pop();
                            for (f = 0, m = a; f !== m; ++f) {
                                var x;
                                (x = r[f])[l] = x[y], x.pop()
                            }
                        }
                }
                this.nCachedObjects_ = i
            },
            subscribe_: function (t, e) {
                var i = this._bindingsIndicesByPath,
                    n = i[t],
                    r = this._bindings;
                if (void 0 !== n) return r[n];
                var a = this._paths,
                    o = this._parsedPaths,
                    s = this._objects,
                    c = s.length,
                    h = this.nCachedObjects_,
                    l = new Array(c);
                n = r.length, i[t] = n, a.push(t), o.push(e), r.push(l);
                for (var u = h, p = s.length; u !== p; ++u) {
                    var d = s[u];
                    l[u] = new Bo(d, t, e)
                }
                return l
            },
            unsubscribe_: function (t) {
                var e = this._bindingsIndicesByPath,
                    i = e[t];
                if (void 0 !== i) {
                    var n = this._paths,
                        r = this._parsedPaths,
                        a = this._bindings,
                        o = a.length - 1,
                        s = a[o];
                    e[t[o]] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
                }
            }
        }), Object.assign(Uo.prototype, {
            play: function () {
                return this._mixer._activateAction(this), this
            },
            stop: function () {
                return this._mixer._deactivateAction(this), this.reset()
            },
            reset: function () {
                return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
            },
            isRunning: function () {
                return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
            },
            isScheduled: function () {
                return this._mixer._isActiveAction(this)
            },
            startAt: function (t) {
                return this._startTime = t, this
            },
            setLoop: function (t, e) {
                return this.loop = t, this.repetitions = e, this
            },
            setEffectiveWeight: function (t) {
                return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
            },
            getEffectiveWeight: function () {
                return this._effectiveWeight
            },
            fadeIn: function (t) {
                return this._scheduleFading(t, 0, 1)
            },
            fadeOut: function (t) {
                return this._scheduleFading(t, 1, 0)
            },
            crossFadeFrom: function (t, e, i) {
                if (t.fadeOut(e), this.fadeIn(e), i) {
                    var n = this._clip.duration,
                        r = t._clip.duration,
                        a = r / n,
                        o = n / r;
                    t.warp(1, a, e), this.warp(o, 1, e)
                }
                return this
            },
            crossFadeTo: function (t, e, i) {
                return t.crossFadeFrom(this, e, i)
            },
            stopFading: function () {
                var t = this._weightInterpolant;
                return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
            },
            setEffectiveTimeScale: function (t) {
                return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
            },
            getEffectiveTimeScale: function () {
                return this._effectiveTimeScale
            },
            setDuration: function (t) {
                return this.timeScale = this._clip.duration / t, this.stopWarping()
            },
            syncWith: function (t) {
                return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
            },
            halt: function (t) {
                return this.warp(this._effectiveTimeScale, 0, t)
            },
            warp: function (t, e, i) {
                var n = this._mixer,
                    r = n.time,
                    a = this._timeScaleInterpolant,
                    o = this.timeScale;
                null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
                var s = a.parameterPositions,
                    c = a.sampleValues;
                return s[0] = r, s[1] = r + i, c[0] = t / o, c[1] = e / o, this
            },
            stopWarping: function () {
                var t = this._timeScaleInterpolant;
                return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
            },
            getMixer: function () {
                return this._mixer
            },
            getClip: function () {
                return this._clip
            },
            getRoot: function () {
                return this._localRoot || this._mixer._root
            },
            _update: function (t, e, i, n) {
                if (this.enabled) {
                    var r = this._startTime;
                    if (null !== r) {
                        var a = (t - r) * i;
                        if (a < 0 || 0 === i) return;
                        this._startTime = null, e = i * a
                    }
                    e *= this._updateTimeScale(t);
                    var o = this._updateTime(e),
                        s = this._updateWeight(t);
                    if (s > 0)
                        for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l) c[l].evaluate(o), h[l].accumulate(n, s)
                } else this._updateWeight(t)
            },
            _updateWeight: function (t) {
                var e = 0;
                if (this.enabled) {
                    e = this.weight;
                    var i = this._weightInterpolant;
                    if (null !== i) {
                        var n = i.evaluate(t)[0];
                        e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
                    }
                }
                return this._effectiveWeight = e, e
            },
            _updateTimeScale: function (t) {
                var e = 0;
                if (!this.paused) {
                    e = this.timeScale;
                    var i = this._timeScaleInterpolant;
                    if (null !== i) e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
                }
                return this._effectiveTimeScale = e, e
            },
            _updateTime: function (t) {
                var e = this.time + t,
                    i = this._clip.duration,
                    n = this.loop,
                    r = this._loopCount,
                    a = 2202 === n;
                if (0 === t) return -1 === r ? e : a && 1 == (1 & r) ? i - e : e;
                if (2200 === n) {
                    -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                    t: {
                        if (e >= i) e = i;
                        else {
                            if (!(e < 0)) break t;
                            e = 0
                        }
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: t < 0 ? -1 : 1
                        })
                    }
                } else {
                    if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= i || e < 0) {
                        var o = Math.floor(e / i);
                        e -= i * o, r += Math.abs(o);
                        var s = this.repetitions - r;
                        if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: t > 0 ? 1 : -1
                        });
                        else {
                            if (1 === s) {
                                var c = t < 0;
                                this._setEndings(c, !c, a)
                            } else this._setEndings(!1, !1, a);
                            this._loopCount = r, this._mixer.dispatchEvent({
                                type: "loop",
                                action: this,
                                loopDelta: o
                            })
                        }
                    }
                    if (a && 1 == (1 & r)) return this.time = e, i - e
                }
                return this.time = e, e
            },
            _setEndings: function (t, e, i) {
                var n = this._interpolantSettings;
                i ? (n.endingStart = 2401, n.endingEnd = 2401) : (n.endingStart = t ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, n.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
            },
            _scheduleFading: function (t, e, i) {
                var n = this._mixer,
                    r = n.time,
                    a = this._weightInterpolant;
                null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
                var o = a.parameterPositions,
                    s = a.sampleValues;
                return o[0] = r, s[0] = e, o[1] = r + t, s[1] = i, this
            }
        }), Go.prototype = Object.assign(Object.create(n.prototype), {
            constructor: Go,
            _bindAction: function (t, e) {
                var i = t._localRoot || this._root,
                    n = t._clip.tracks,
                    r = n.length,
                    a = t._propertyBindings,
                    o = t._interpolants,
                    s = i.uuid,
                    c = this._bindingsByRootAndName,
                    h = c[s];
                void 0 === h && (h = {}, c[s] = h);
                for (var l = 0; l !== r; ++l) {
                    var u = n[l],
                        p = u.name,
                        d = h[p];
                    if (void 0 !== d) a[l] = d;
                    else {
                        if (void 0 !== (d = a[l])) {
                            null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
                            continue
                        }
                        var f = e && e._propertyBindings[l].binding.parsedPath;
                        ++(d = new wo(Bo.create(i, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[l] = d
                    }
                    o[l].resultBuffer = d.buffer
                }
            },
            _activateAction: function (t) {
                if (!this._isActiveAction(t)) {
                    if (null === t._cacheIndex) {
                        var e = (t._localRoot || this._root).uuid,
                            i = t._clip.uuid,
                            n = this._actionsByClip[i];
                        this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
                    }
                    for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
                        var s = r[a];
                        0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                    }
                    this._lendAction(t)
                }
            },
            _deactivateAction: function (t) {
                if (this._isActiveAction(t)) {
                    for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                        var r = e[i];
                        0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                    }
                    this._takeBackAction(t)
                }
            },
            _initMemoryManager: function () {
                this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
                var t = this;
                this.stats = {
                    actions: {
                        get total() {
                            return t._actions.length
                        },
                        get inUse() {
                            return t._nActiveActions
                        }
                    },
                    bindings: {
                        get total() {
                            return t._bindings.length
                        },
                        get inUse() {
                            return t._nActiveBindings
                        }
                    },
                    controlInterpolants: {
                        get total() {
                            return t._controlInterpolants.length
                        },
                        get inUse() {
                            return t._nActiveControlInterpolants
                        }
                    }
                }
            },
            _isActiveAction: function (t) {
                var e = t._cacheIndex;
                return null !== e && e < this._nActiveActions
            },
            _addInactiveAction: function (t, e, i) {
                var n = this._actions,
                    r = this._actionsByClip,
                    a = r[e];
                if (void 0 === a) a = {
                    knownActions: [t],
                    actionByRoot: {}
                }, t._byClipCacheIndex = 0, r[e] = a;
                else {
                    var o = a.knownActions;
                    t._byClipCacheIndex = o.length, o.push(t)
                }
                t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t
            },
            _removeInactiveAction: function (t) {
                var e = this._actions,
                    i = e[e.length - 1],
                    n = t._cacheIndex;
                i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
                var r = t._clip.uuid,
                    a = this._actionsByClip,
                    o = a[r],
                    s = o.knownActions,
                    c = s[s.length - 1],
                    h = t._byClipCacheIndex;
                c._byClipCacheIndex = h, s[h] = c, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(t)
            },
            _removeInactiveBindingsForAction: function (t) {
                for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                    var r = e[i];
                    0 == --r.referenceCount && this._removeInactiveBinding(r)
                }
            },
            _lendAction: function (t) {
                var e = this._actions,
                    i = t._cacheIndex,
                    n = this._nActiveActions++,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
            },
            _takeBackAction: function (t) {
                var e = this._actions,
                    i = t._cacheIndex,
                    n = --this._nActiveActions,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
            },
            _addInactiveBinding: function (t, e, i) {
                var n = this._bindingsByRootAndName,
                    r = n[e],
                    a = this._bindings;
                void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = a.length, a.push(t)
            },
            _removeInactiveBinding: function (t) {
                var e = this._bindings,
                    i = t.binding,
                    n = i.rootNode.uuid,
                    r = i.path,
                    a = this._bindingsByRootAndName,
                    o = a[n],
                    s = e[e.length - 1],
                    c = t._cacheIndex;
                s._cacheIndex = c, e[c] = s, e.pop(), delete o[r];
                t: {
                    for (var h in o) break t;delete a[n]
                }
            },
            _lendBinding: function (t) {
                var e = this._bindings,
                    i = t._cacheIndex,
                    n = this._nActiveBindings++,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
            },
            _takeBackBinding: function (t) {
                var e = this._bindings,
                    i = t._cacheIndex,
                    n = --this._nActiveBindings,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
            },
            _lendControlInterpolant: function () {
                var t = this._controlInterpolants,
                    e = this._nActiveControlInterpolants++,
                    i = t[e];
                return void 0 === i && ((i = new Br(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = i), i
            },
            _takeBackControlInterpolant: function (t) {
                var e = this._controlInterpolants,
                    i = t.__cacheIndex,
                    n = --this._nActiveControlInterpolants,
                    r = e[n];
                t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
            },
            _controlInterpolantsResultBuffer: new Float32Array(1),
            clipAction: function (t, e) {
                var i = e || this._root,
                    n = i.uuid,
                    r = "string" == typeof t ? Xr.findByName(i, t) : t,
                    a = null !== r ? r.uuid : t,
                    o = this._actionsByClip[a],
                    s = null;
                if (void 0 !== o) {
                    var c = o.actionByRoot[n];
                    if (void 0 !== c) return c;
                    s = o.knownActions[0], null === r && (r = s._clip)
                }
                if (null === r) return null;
                var h = new Uo(this, r, e);
                return this._bindAction(h, s), this._addInactiveAction(h, a, n), h
            },
            existingAction: function (t, e) {
                var i = e || this._root,
                    n = i.uuid,
                    r = "string" == typeof t ? Xr.findByName(i, t) : t,
                    a = r ? r.uuid : t,
                    o = this._actionsByClip[a];
                return void 0 !== o && o.actionByRoot[n] || null
            },
            stopAllAction: function () {
                var t = this._actions,
                    e = this._nActiveActions,
                    i = this._bindings,
                    n = this._nActiveBindings;
                this._nActiveActions = 0, this._nActiveBindings = 0;
                for (var r = 0; r !== e; ++r) t[r].reset();
                for (r = 0; r !== n; ++r) i[r].useCount = 0;
                return this
            },
            update: function (t) {
                t *= this.timeScale;
                for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
                    e[o]._update(n, t, r, a)
                }
                var s = this._bindings,
                    c = this._nActiveBindings;
                for (o = 0; o !== c; ++o) s[o].apply(a);
                return this
            },
            getRoot: function () {
                return this._root
            },
            uncacheClip: function (t) {
                var e = this._actions,
                    i = t.uuid,
                    n = this._actionsByClip,
                    r = n[i];
                if (void 0 !== r) {
                    for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                        var c = a[o];
                        this._deactivateAction(c);
                        var h = c._cacheIndex,
                            l = e[e.length - 1];
                        c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = h, e[h] = l, e.pop(), this._removeInactiveBindingsForAction(c)
                    }
                    delete n[i]
                }
            },
            uncacheRoot: function (t) {
                var e = t.uuid,
                    i = this._actionsByClip;
                for (var n in i) {
                    var r = i[n].actionByRoot[e];
                    void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
                }
                var a = this._bindingsByRootAndName[e];
                if (void 0 !== a)
                    for (var o in a) {
                        var s = a[o];
                        s.restoreOriginalState(), this._removeInactiveBinding(s)
                    }
            },
            uncacheAction: function (t, e) {
                var i = this.existingAction(t, e);
                null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
            }
        }), Fo.prototype.clone = function () {
            return new Fo(void 0 === this.value.clone ? this.value : this.value.clone())
        }, Ho.prototype = Object.assign(Object.create(St.prototype), {
            constructor: Ho,
            isInstancedBufferGeometry: !0,
            copy: function (t) {
                return St.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
            },
            clone: function () {
                return (new this.constructor).copy(this)
            }
        }), ko.prototype = Object.assign(Object.create(ji.prototype), {
            constructor: ko,
            isInstancedInterleavedBuffer: !0,
            copy: function (t) {
                return ji.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
            }
        }), Vo.prototype = Object.assign(Object.create(ut.prototype), {
            constructor: Vo,
            isInstancedBufferAttribute: !0,
            copy: function (t) {
                return ut.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
            }
        }), Object.assign(function (t, e, i, n) {
            this.ray = new jt(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = {
                Mesh: {},
                Line: {},
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            }, Object.defineProperties(this.params, {
                PointCloud: {
                    get: function () {
                        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                    }
                }
            })
        }.prototype, {
            linePrecision: 1,
            set: function (t, e) {
                this.ray.set(t, e)
            },
            setFromCamera: function (t, e) {
                e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
            },
            intersectObject: function (t, e, i) {
                var n = i || [];
                return Wo(t, this, n, e), n.sort(jo), n
            },
            intersectObjects: function (t, e, i) {
                var n = i || [];
                if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
                for (var r = 0, a = t.length; r < a; r++) Wo(t[r], this, n, e);
                return n.sort(jo), n
            }
        }), Object.assign(function (t, e, i) {
            return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
        }.prototype, {
            set: function (t, e, i) {
                return this.radius = t, this.phi = e, this.theta = i, this
            },
            clone: function () {
                return (new this.constructor).copy(this)
            },
            copy: function (t) {
                return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
            },
            makeSafe: function () {
                return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
            },
            setFromVector3: function (t) {
                return this.setFromCartesianCoords(t.x, t.y, t.z)
            },
            setFromCartesianCoords: function (t, e, i) {
                return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(g.clamp(e / this.radius, -1, 1))), this
            }
        }), Object.assign(function (t, e, i) {
            return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
        }.prototype, {
            set: function (t, e, i) {
                return this.radius = t, this.theta = e, this.y = i, this
            },
            clone: function () {
                return (new this.constructor).copy(this)
            },
            copy: function (t) {
                return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
            },
            setFromVector3: function (t) {
                return this.setFromCartesianCoords(t.x, t.y, t.z)
            },
            setFromCartesianCoords: function (t, e, i) {
                return this.radius = Math.sqrt(t * t + i * i), this.theta = Math.atan2(t, i), this.y = e, this
            }
        }), Object.assign(qo.prototype, {
            set: function (t, e) {
                return this.min.copy(t), this.max.copy(e), this
            },
            setFromPoints: function (t) {
                this.makeEmpty();
                for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
                return this
            },
            setFromCenterAndSize: function () {
                var t = new v;
                return function (e, i) {
                    var n = t.copy(i).multiplyScalar(.5);
                    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
                }
            }(),
            clone: function () {
                return (new this.constructor).copy(this)
            },
            copy: function (t) {
                return this.min.copy(t.min), this.max.copy(t.max), this
            },
            makeEmpty: function () {
                return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
            },
            isEmpty: function () {
                return this.max.x < this.min.x || this.max.y < this.min.y
            },
            getCenter: function (t) {
                return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new v), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
            },
            getSize: function (t) {
                return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new v), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
            },
            expandByPoint: function (t) {
                return this.min.min(t), this.max.max(t), this
            },
            expandByVector: function (t) {
                return this.min.sub(t), this.max.add(t), this
            },
            expandByScalar: function (t) {
                return this.min.addScalar(-t), this.max.addScalar(t), this
            },
            containsPoint: function (t) {
                return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
            },
            containsBox: function (t) {
                return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
            },
            getParameter: function (t, e) {
                return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new v), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
            },
            intersectsBox: function (t) {
                return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
            },
            clampPoint: function (t, e) {
                return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new v), e.copy(t).clamp(this.min, this.max)
            },
            distanceToPoint: function () {
                var t = new v;
                return function (e) {
                    return t.copy(e).clamp(this.min, this.max).sub(e).length()
                }
            }(),
            intersect: function (t) {
                return this.min.max(t.min), this.max.min(t.max), this
            },
            union: function (t) {
                return this.min.min(t.min), this.max.max(t.max), this
            },
            translate: function (t) {
                return this.min.add(t), this.max.add(t), this
            },
            equals: function (t) {
                return t.min.equals(this.min) && t.max.equals(this.max)
            }
        }), Object.assign(Xo.prototype, {
            set: function (t, e) {
                return this.start.copy(t), this.end.copy(e), this
            },
            clone: function () {
                return (new this.constructor).copy(this)
            },
            copy: function (t) {
                return this.start.copy(t.start), this.end.copy(t.end), this
            },
            getCenter: function (t) {
                return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new b), t.addVectors(this.start, this.end).multiplyScalar(.5)
            },
            delta: function (t) {
                return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new b), t.subVectors(this.end, this.start)
            },
            distanceSq: function () {
                return this.start.distanceToSquared(this.end)
            },
            distance: function () {
                return this.start.distanceTo(this.end)
            },
            at: function (t, e) {
                return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new b), this.delta(e).multiplyScalar(t).add(this.start)
            },
            closestPointToPointParameter: (Ro = new b, Co = new b, function (t, e) {
                Ro.subVectors(t, this.start), Co.subVectors(this.end, this.start);
                var i = Co.dot(Co),
                    n = Co.dot(Ro) / i;
                return e && (n = g.clamp(n, 0, 1)), n
            }),
            closestPointToPoint: function (t, e, i) {
                var n = this.closestPointToPointParameter(t, e);
                return void 0 === i && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), i = new b), this.delta(i).multiplyScalar(n).add(this.start)
            },
            applyMatrix4: function (t) {
                return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
            },
            equals: function (t) {
                return t.start.equals(this.start) && t.end.equals(this.end)
            }
        }), Yo.prototype = Object.create(ot.prototype), Yo.prototype.constructor = Yo, Yo.prototype.isImmediateRenderObject = !0, Jo.prototype = Object.create(tn.prototype), Jo.prototype.constructor = Jo, Jo.prototype.update = function () {
            var t = new b,
                e = new b,
                i = new w;
            return function () {
                var n = ["a", "b", "c"];
                this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
                var r = this.object.matrixWorld,
                    a = this.geometry.attributes.position,
                    o = this.object.geometry;
                if (o && o.isGeometry)
                    for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++)
                        for (var p = c[l], d = 0, f = p.vertexNormals.length; d < f; d++) {
                            var m = s[p[n[d]]],
                                g = p.vertexNormals[d];
                            t.copy(m).applyMatrix4(r), e.copy(g).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(h, e.x, e.y, e.z), h += 1
                        } else if (o && o.isBufferGeometry) {
                            var v = o.attributes.position,
                                y = o.attributes.normal;
                            for (h = 0, d = 0, f = v.count; d < f; d++) t.set(v.getX(d), v.getY(d), v.getZ(d)).applyMatrix4(r), e.set(y.getX(d), y.getY(d), y.getZ(d)), e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(h, e.x, e.y, e.z), h += 1
                        } a.needsUpdate = !0
            }
        }(), Zo.prototype = Object.create(ot.prototype), Zo.prototype.constructor = Zo, Zo.prototype.dispose = function () {
            this.cone.geometry.dispose(), this.cone.material.dispose()
        }, Zo.prototype.update = function () {
            var t = new b;
            return function () {
                this.light.updateMatrixWorld();
                var e = this.light.distance ? this.light.distance : 1e3,
                    i = e * Math.tan(this.light.angle);
                this.cone.scale.set(i, i, e), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
            }
        }(), Qo.prototype = Object.create(tn.prototype), Qo.prototype.constructor = Qo, Qo.prototype.updateMatrixWorld = function () {
            var t = new b,
                e = new y,
                i = new y;
            return function (n) {
                var r = this.bones,
                    a = this.geometry,
                    o = a.getAttribute("position");
                i.getInverse(this.root.matrixWorld);
                for (var s = 0, c = 0; s < r.length; s++) {
                    var h = r[s];
                    h.parent && h.parent.isBone && (e.multiplyMatrices(i, h.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(c, t.x, t.y, t.z), e.multiplyMatrices(i, h.parent.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(c + 1, t.x, t.y, t.z), c += 2)
                }
                a.getAttribute("position").needsUpdate = !0, ot.prototype.updateMatrixWorld.call(this, n)
            }
        }(), Ko.prototype = Object.create(Xt.prototype), Ko.prototype.constructor = Ko, Ko.prototype.dispose = function () {
            this.geometry.dispose(), this.material.dispose()
        }, Ko.prototype.update = function () {
            void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
        }, $o.prototype = Object.create($i.prototype), $o.prototype.constructor = $o, $o.prototype.update = function () {
            if (this.scale.set(.5 * this.light.width, .5 * this.light.height, 1), void 0 !== this.color) this.material.color.set(this.color), this.children[0].material.color.set(this.color);
            else {
                this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
                var t = this.material.color,
                    e = Math.max(t.r, t.g, t.b);
                e > 1 && t.multiplyScalar(1 / e), this.children[0].material.color.copy(this.material.color)
            }
        }, $o.prototype.dispose = function () {
            this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose()
        }, ts.prototype = Object.create(ot.prototype), ts.prototype.constructor = ts, ts.prototype.dispose = function () {
            this.children[0].geometry.dispose(), this.children[0].material.dispose()
        }, ts.prototype.update = function () {
            var t = new b,
                e = new q,
                i = new q;
            return function () {
                var n = this.children[0];
                if (void 0 !== this.color) this.material.color.set(this.color);
                else {
                    var r = n.geometry.getAttribute("color");
                    e.copy(this.light.color), i.copy(this.light.groundColor);
                    for (var a = 0, o = r.count; a < o; a++) {
                        var s = a < o / 2 ? e : i;
                        r.setXYZ(a, s.r, s.g, s.b)
                    }
                    r.needsUpdate = !0
                }
                n.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
            }
        }(), es.prototype = Object.create(tn.prototype), es.prototype.constructor = es, is.prototype = Object.create(tn.prototype), is.prototype.constructor = is, ns.prototype = Object.create(tn.prototype), ns.prototype.constructor = ns, ns.prototype.update = function () {
            var t = new b,
                e = new b,
                i = new w;
            return function () {
                this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
                for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
                    var u = s[h],
                        p = u.normal;
                    t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n), e.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), r.setXYZ(c, t.x, t.y, t.z), c += 1, r.setXYZ(c, e.x, e.y, e.z), c += 1
                }
                r.needsUpdate = !0
            }
        }(), rs.prototype = Object.create(ot.prototype), rs.prototype.constructor = rs, rs.prototype.dispose = function () {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
        }, rs.prototype.update = function () {
            var t = new b,
                e = new b,
                i = new b;
            return function () {
                t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(e, t), this.lightPlane.lookAt(e), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(e), this.targetLine.scale.z = i.length()
            }
        }(), as.prototype = Object.create(tn.prototype), as.prototype.constructor = as, as.prototype.update = function () {
            var t, e, i = new b,
                n = new Ti;

            function r(r, a, o, s) {
                i.set(a, o, s).unproject(n);
                var c = e[r];
                if (void 0 !== c)
                    for (var h = t.getAttribute("position"), l = 0, u = c.length; l < u; l++) h.setXYZ(c[l], i.x, i.y, i.z)
            }
            return function () {
                t = this.geometry, e = this.pointMap;
                n.projectionMatrix.copy(this.camera.projectionMatrix), r("c", 0, 0, -1), r("t", 0, 0, 1), r("n1", -1, -1, -1), r("n2", 1, -1, -1), r("n3", -1, 1, -1), r("n4", 1, 1, -1), r("f1", -1, -1, 1), r("f2", 1, -1, 1), r("f3", -1, 1, 1), r("f4", 1, 1, 1), r("u1", .7, 1.1, -1), r("u2", -.7, 1.1, -1), r("u3", 0, 2, -1), r("cf1", -1, 0, 1), r("cf2", 1, 0, 1), r("cf3", 0, -1, 1), r("cf4", 0, 1, 1), r("cn1", -1, 0, -1), r("cn2", 1, 0, -1), r("cn3", 0, -1, -1), r("cn4", 0, 1, -1), t.getAttribute("position").needsUpdate = !0
            }
        }(), os.prototype = Object.create(tn.prototype), os.prototype.constructor = os, os.prototype.update = function () {
            var t = new z;
            return function (e) {
                if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
                    var i = t.min,
                        n = t.max,
                        r = this.geometry.attributes.position,
                        a = r.array;
                    a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = i.x, a[4] = n.y, a[5] = n.z, a[6] = i.x, a[7] = i.y, a[8] = n.z, a[9] = n.x, a[10] = i.y, a[11] = n.z, a[12] = n.x, a[13] = n.y, a[14] = i.z, a[15] = i.x, a[16] = n.y, a[17] = i.z, a[18] = i.x, a[19] = i.y, a[20] = i.z, a[21] = n.x, a[22] = i.y, a[23] = i.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
                }
            }
        }(), os.prototype.setFromObject = function (t) {
            return this.object = t, this.update(), this
        }, os.prototype.copy = function (t) {
            return tn.prototype.copy.call(this, t), this.object = t.object, this
        }, os.prototype.clone = function () {
            return (new this.constructor).copy(this)
        }, ss.prototype = Object.create(tn.prototype), ss.prototype.constructor = ss, ss.prototype.updateMatrixWorld = function (t) {
            var e = this.box;
            e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), ot.prototype.updateMatrixWorld.call(this, t))
        }, cs.prototype = Object.create($i.prototype), cs.prototype.constructor = cs, cs.prototype.updateMatrixWorld = function (t) {
            var e = -this.plane.constant;
            Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), ot.prototype.updateMatrixWorld.call(this, t)
        }, hs.prototype = Object.create(ot.prototype), hs.prototype.constructor = hs, hs.prototype.setDirection = (zo = new b, function (t) {
            t.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : t.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (zo.set(t.z, 0, -t.x).normalize(), Do = Math.acos(t.y), this.quaternion.setFromAxisAngle(zo, Do))
        }), hs.prototype.setLength = function (t, e, i) {
            void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
        }, hs.prototype.setColor = function (t) {
            this.line.material.color.copy(t), this.cone.material.color.copy(t)
        }, hs.prototype.copy = function (t) {
            return ot.prototype.copy.call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this
        }, hs.prototype.clone = function () {
            return (new this.constructor).copy(this)
        }, ls.prototype = Object.create(tn.prototype), ls.prototype.constructor = ls;

    function us(t) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), pa.call(this, t), this.type = "catmullrom"
    }
    ra.create = function (t, e) {
        return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(ra.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
    }, Object.assign(Sa.prototype, {
        createPointsGeometry: function (t) {
            console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getPoints(t);
            return this.createGeometry(e)
        },
        createSpacedPointsGeometry: function (t) {
            console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        },
        createGeometry: function (t) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var e = new lt, i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.vertices.push(new b(r.x, r.y, r.z || 0))
            }
            return e
        }
    }), Object.assign(Ea.prototype, {
        fromPoints: function (t) {
            console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
        }
    }), Object.create(pa.prototype), Object.create(pa.prototype), us.prototype = Object.create(pa.prototype), Object.assign(us.prototype, {
        initFromArray: function () {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function () {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function () {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    }), es.prototype.setColors = function () {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, Qo.prototype.update = function () {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }, Object.assign(eo.prototype, {
        extractUrlBase: function (t) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Ga(t)
        }
    }), Object.assign(ka.prototype, {
        setTexturePath: function (t) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t)
        }
    }), Object.assign(qo.prototype, {
        center: function (t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
        },
        empty: function () {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function (t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        size: function (t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), Object.assign(z.prototype, {
        center: function (t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
        },
        empty: function () {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function (t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        isIntersectionSphere: function (t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        },
        size: function (t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), Xo.prototype.center = function (t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
    }, Object.assign(g, {
        random16: function () {
            return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
        },
        nearestPowerOfTwo: function (t) {
            return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), g.floorPowerOfTwo(t)
        },
        nextPowerOfTwo: function (t) {
            return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), g.ceilPowerOfTwo(t)
        }
    }), Object.assign(w.prototype, {
        flattenToArrayOffset: function (t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        },
        multiplyVector3: function (t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
        },
        multiplyVector3Array: function () {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBuffer: function (t) {
            return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function () {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }), Object.assign(y.prototype, {
        extractPosition: function (t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
        },
        flattenToArrayOffset: function (t, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        },
        getPosition: function () {
            var t;
            return function () {
                return void 0 === t && (t = new b), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3)
            }
        }(),
        setRotationFromQuaternion: function (t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
        },
        multiplyToArray: function () {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function (t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        multiplyVector4: function (t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        multiplyVector3Array: function () {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function (t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
        },
        crossVector: function (t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        translate: function () {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function () {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function () {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function () {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function () {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function (t) {
            return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function () {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function (t, e, i, n, r, a) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, n, i, r, a)
        }
    }), B.prototype.isIntersectionLine = function (t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
    }, x.prototype.multiplyVector3 = function (t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
    }, Object.assign(jt.prototype, {
        isIntersectionBox: function (t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        isIntersectionPlane: function (t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
        },
        isIntersectionSphere: function (t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        }
    }), Object.assign(Wt.prototype, {
        area: function () {
            return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
        },
        barycoordFromPoint: function (t, e) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e)
        },
        midpoint: function (t) {
            return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t)
        },
        normal: function (t) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t)
        },
        plane: function (t) {
            return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t)
        }
    }), Object.assign(Wt, {
        barycoordFromPoint: function (t, e, i, n, r) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Wt.getBarycoord(t, e, i, n, r)
        },
        normal: function (t, e, i, n) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Wt.getNormal(t, e, i, n)
        }
    }), Object.assign(Ta.prototype, {
        extractAllPoints: function (t) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
        },
        extrude: function (t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new tr(this, t)
        },
        makeGeometry: function (t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new pr(this, t)
        }
    }), Object.assign(v.prototype, {
        fromAttribute: function (t, e, i) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
        },
        distanceToManhattan: function (t) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
        },
        lengthManhattan: function () {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(b.prototype, {
        setEulerFromRotationMatrix: function () {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function () {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function (t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function (t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function (t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
        },
        applyProjection: function (t) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
        },
        fromAttribute: function (t, e, i) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
        },
        distanceToManhattan: function (t) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
        },
        lengthManhattan: function () {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(R.prototype, {
        fromAttribute: function (t, e, i) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
        },
        lengthManhattan: function () {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(lt.prototype, {
        computeTangents: function () {
            console.error("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function () {
            console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
        }
    }), Object.assign(ot.prototype, {
        getChildByName: function (t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
        },
        renderDepth: function () {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function (t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
        },
        getWorldRotation: function () {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
        }
    }), Object.defineProperties(ot.prototype, {
        eulerOrder: {
            get: function () {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            },
            set: function (t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function () {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function () {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.defineProperties(Yi.prototype, {
        objects: {
            get: function () {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), Object.defineProperty(Zi.prototype, "useVertexTexture", {
        get: function () {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function () {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    }), Ji.prototype.initBones = function () {
        console.error("THREE.SkinnedMesh: initBones() has been removed.")
    }, Object.defineProperty(ra.prototype, "__arcLengthDivisions", {
        get: function () {
            return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
        },
        set: function (t) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
        }
    }), Li.prototype.setLens = function (t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
    }, Object.defineProperties(La.prototype, {
        onlyShadow: {
            set: function () {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function () {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function (t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function () {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function (t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function (t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
            }
        }
    }), Object.defineProperties(ut.prototype, {
        length: {
            get: function () {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
            }
        },
        copyIndicesArray: function () {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
        }
    }), Object.assign(St.prototype, {
        addIndex: function (t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
        },
        addDrawCall: function (t, e, i) {
            void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
        },
        clearDrawCalls: function () {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        },
        computeTangents: function () {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function () {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }), Object.defineProperties(St.prototype, {
        drawcalls: {
            get: function () {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        },
        offsets: {
            get: function () {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.assign(er.prototype, {
        getArrays: function () {
            console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
        },
        addShapeList: function () {
            console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
        },
        addShape: function () {
            console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
        }
    }), Object.defineProperties(Fo.prototype, {
        dynamic: {
            set: function () {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function () {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
            }
        }
    }), Object.defineProperties(kt.prototype, {
        wrapAround: {
            get: function () {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function () {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        overdraw: {
            get: function () {
                console.warn("THREE.Material: .overdraw has been removed.")
            },
            set: function () {
                console.warn("THREE.Material: .overdraw has been removed.")
            }
        },
        wrapRGB: {
            get: function () {
                return console.warn("THREE.Material: .wrapRGB has been removed."), new q
            }
        },
        shading: {
            get: function () {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function (t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
            }
        }
    }), Object.defineProperties(Lr.prototype, {
        metal: {
            get: function () {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            },
            set: function () {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }), Object.defineProperties(Vt.prototype, {
        derivatives: {
            get: function () {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            },
            set: function (t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
            }
        }
    }), Object.assign(Fi.prototype, {
        clearTarget: function (t, e, i, n) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, i, n)
        },
        animate: function (t) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t)
        },
        getCurrentRenderTarget: function () {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
        },
        getMaxAnisotropy: function () {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function () {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
        },
        resetGLState: function () {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
        },
        supportsFloatTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function () {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function () {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function () {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function (t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
        },
        initMaterial: function () {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function () {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function () {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function () {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        },
        setFaceCulling: function () {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
        }
    }), Object.defineProperties(Fi.prototype, {
        shadowMapEnabled: {
            get: function () {
                return this.shadowMap.enabled
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function () {
                return this.shadowMap.type
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function () {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function () {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            }
        }
    }), Object.defineProperties(wi.prototype, {
        cullFace: {
            get: function () {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function () {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        renderReverseSided: {
            get: function () {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            },
            set: function () {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            }
        },
        renderSingleSided: {
            get: function () {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            },
            set: function () {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            }
        }
    }), Object.defineProperties(C.prototype, {
        wrapS: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
            }
        },
        offset: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
            }
        },
        repeat: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
            }
        },
        format: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
            }
        },
        type: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            },
            set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
            }
        }
    }), Object.defineProperties(Ui.prototype, {
        standing: {
            set: function () {
                console.warn("THREE.WebVRManager: .standing has been removed.")
            }
        },
        userHeight: {
            set: function () {
                console.warn("THREE.WebVRManager: .userHeight has been removed.")
            }
        }
    }), yo.prototype.load = function (t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var e = this;
        return (new fo).load(t, (function (t) {
            e.setBuffer(t)
        })), this
    }, bo.prototype.getData = function () {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
    }, mo.prototype.updateCubeMap = function (t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
    };
    L.crossOrigin = void 0, L.loadTexture = function (t, e, i, n) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var r = new na;
        r.setCrossOrigin(this.crossOrigin);
        var a = r.load(t, i, void 0, n);
        return e && (a.mapping = e), a
    }, L.loadTextureCube = function (t, e, i, n) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var r = new ia;
        r.setCrossOrigin(this.crossOrigin);
        var a = r.load(t, i, void 0, n);
        return e && (a.mapping = e), a
    }, L.loadCompressedTexture = function () {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }, L.loadCompressedTextureCube = function () {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    };
    (new class {
        initialize() {
            window.addEventListener("message", t => {
                this.request = t.data.request
            }), window.addEventListener("resize", t => {
                this.resize()
            });
            const t = new Ia(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1e4, 1e4);
            t.position.z = 100;
            const e = new Vi,
                i = new C(window.innerWidth, window.innerHeight, {
                    minFilter: 1006,
                    magFilter: 1003,
                    format: 1023,
                    type: 1009
                }),
                n = new hn;
            n.needsUpdate = !0;
            const r = new Vt({
                uniforms: {
                    tDiffuse: {
                        value: n
                    }
                },
                vertexShader: "\n\t\t\tvarying vec2 vUv;\n\n\t\t\tvoid main() {\n\t\t\t\tvUv = vec2(uv.x, 1.0-uv.y); // fuck gl uv coords\n\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t}\n",
                fragmentShader: "\n\t\t\tvarying vec2 vUv;\n\t\t\tuniform sampler2D tDiffuse;\n\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = texture2D( tDiffuse, vUv );\n\t\t\t}\n"
            });
            this.material = r;
            const a = new Xt(new At(window.innerWidth, window.innerHeight), r);
            a.position.z = -100, e.add(a);
            const o = new Fi;
            o.setPixelRatio(window.devicePixelRatio), o.setSize(window.innerWidth, window.innerHeight), o.autoClear = !1, document.getElementById("app").appendChild(o.domElement), document.getElementById("app").style.display = "none", this.renderer = o, this.rtTexture = i, this.sceneRTT = e, this.cameraRTT = t, this.animate = this.animate.bind(this), requestAnimationFrame(this.animate)
        }
        resize() {
            const t = new Ia(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1e4, 1e4);
            t.position.z = 100, this.cameraRTT = t;
            const e = new Vi,
                i = new Xt(new At(window.innerWidth, window.innerHeight), this.material);
            i.position.z = -100, e.add(i), this.sceneRTT = e, this.rtTexture = new C(window.innerWidth, window.innerHeight, {
                minFilter: 1006,
                magFilter: 1003,
                format: 1023,
                type: 1009
            }), this.renderer.setSize(window.innerWidth, window.innerHeight)
        }
        animate() {
            if (requestAnimationFrame(this.animate), this.renderer.clear(), this.renderer.render(this.sceneRTT, this.cameraRTT, this.rtTexture, !0), this.request) {
                const t = this.request;
                this.request = null, this.handleRequest(t)
            }
        }
        handleRequest(t) {
            const e = new Uint8Array(window.innerWidth * window.innerHeight * 4);
            this.renderer.readRenderTargetPixels(this.rtTexture, 0, 0, window.innerWidth, window.innerHeight, e);
            const i = document.createElement("canvas");
            i.style.display = "inline", i.width = window.innerWidth, i.height = window.innerHeight;
            const n = new Uint8ClampedArray(e.buffer);
            i.getContext("2d").putImageData(new ImageData(n, window.innerWidth, window.innerHeight), 0, 0);
            let r = "image/png";
            switch (t.encoding) {
            case "jpg":
                r = "image/jpeg";
                break;
            case "png":
                r = "image/png";
                break;
            case "webp":
                r = "image/webp"
            }
            t.quality || (t.quality = .92);
            const a = i.toDataURL(r, t.quality);
            fetch(t.targetURL, {
                method: "POST",
                mode: "cors",
                body: t.targetField ? (() => {
                    const e = new FormData;
                    return e.append(t.targetField, function (t) {
                        const e = atob(t.split(",")[1]),
                            i = t.split(",")[0].split(":")[1].split(";")[0],
                            n = new ArrayBuffer(e.length),
                            r = new Uint8Array(n);
                        for (let t = 0; t < e.length; t++) r[t] = e.charCodeAt(t);
                        return new Blob([n], {
                            type: i
                        })
                    }(a), "screenshot." + t.encoding), e
                })() : JSON.stringify({
                    data: a,
                    id: t.correlation
                })
            }).then(t => t.text()).then(e => {
                t.resultURL && fetch(t.resultURL, {
                    method: "POST",
                    mode: "cors",
                    body: JSON.stringify({
                        data: e,
                        id: t.correlation
                    })
                })
            })
        }
    }).initialize()
}]);