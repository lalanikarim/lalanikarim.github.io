/**
 * Main CanvasApplication struct
 */
export class CanvasApplication {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CanvasApplicationFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_canvasapplication_free(ptr, 0);
    }
    /**
     * Get canvas height
     * @returns {number}
     */
    get_canvas_height() {
        const ret = wasm.canvasapplication_get_canvas_height(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Get canvas width
     * @returns {number}
     */
    get_canvas_width() {
        const ret = wasm.canvasapplication_get_canvas_width(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Return the number of particles
     * @returns {number}
     */
    get_particle_count() {
        const ret = wasm.canvasapplication_get_particle_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Create a new CanvasApplication with the given canvas element ID
     * @param {string} canvas_id
     */
    constructor(canvas_id) {
        const ptr0 = passStringToWasm0(canvas_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.canvasapplication_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        CanvasApplicationFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Handle keyboard events
     * @param {KeyboardEvent} e
     */
    on_keydown(e) {
        wasm.canvasapplication_on_keydown(this.__wbg_ptr, e);
    }
    /**
     * Handle mouse down (click)
     * @param {MouseEvent} e
     */
    on_mousedown(e) {
        wasm.canvasapplication_on_mousedown(this.__wbg_ptr, e);
    }
    /**
     * Handle mouse movement
     * @param {MouseEvent} e
     */
    on_mousemove(e) {
        wasm.canvasapplication_on_mousemove(this.__wbg_ptr, e);
    }
    /**
     * Handle mouse up (release)
     * @param {MouseEvent} _e
     */
    on_mouseup(_e) {
        wasm.canvasapplication_on_mouseup(this.__wbg_ptr, _e);
    }
    /**
     * Render the current frame
     */
    render() {
        wasm.canvasapplication_render(this.__wbg_ptr);
    }
    /**
     * Run the main game loop
     */
    run() {
        wasm.canvasapplication_run(this.__wbg_ptr);
    }
    /**
     * Update game state
     * @param {number} delta_time
     */
    update(delta_time) {
        wasm.canvasapplication_update(this.__wbg_ptr, delta_time);
    }
}
if (Symbol.dispose) CanvasApplication.prototype[Symbol.dispose] = CanvasApplication.prototype.free;
export function __wbg___wbindgen_debug_string_dd5d2d07ce9e6c57(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_is_undefined_c0cca72b82b86f4d(arg0) {
    const ret = arg0 === undefined;
    return ret;
}
export function __wbg___wbindgen_number_get_7579aab02a8a620c(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
}
export function __wbg___wbindgen_throw_81fc77679af83bc6(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg_arc_a01205d471446260() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
    arg0.arc(arg1, arg2, arg3, arg4, arg5);
}, arguments); }
export function __wbg_beginPath_a1e53d163e17614b(arg0) {
    arg0.beginPath();
}
export function __wbg_clearRect_c5e58b9fc5680954(arg0, arg1, arg2, arg3, arg4) {
    arg0.clearRect(arg1, arg2, arg3, arg4);
}
export function __wbg_document_a28a21ae315de4ea(arg0) {
    const ret = arg0.document;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_fillRect_a7f9306dd4dccb50(arg0, arg1, arg2, arg3, arg4) {
    arg0.fillRect(arg1, arg2, arg3, arg4);
}
export function __wbg_fillText_74f2fec94a63d2bb() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
}, arguments); }
export function __wbg_fill_f32839c7afadf949(arg0) {
    arg0.fill();
}
export function __wbg_getContext_8f1ff363618c55da() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_getElementById_1a2b69d69d3a074f(arg0, arg1, arg2) {
    const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_height_734034c3ff2654af(arg0) {
    const ret = arg0.height;
    return ret;
}
export function __wbg_innerHeight_af403eb4a16face3() { return handleError(function (arg0) {
    const ret = arg0.innerHeight;
    return ret;
}, arguments); }
export function __wbg_innerWidth_d8f82a528896a3dc() { return handleError(function (arg0) {
    const ret = arg0.innerWidth;
    return ret;
}, arguments); }
export function __wbg_instanceof_Window_c0fee4c064502536(arg0) {
    let result;
    try {
        result = arg0 instanceof Window;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_key_7cfa20193d517a74(arg0, arg1) {
    const ret = arg1.key;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_log_b1898a1636986dad(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
}
export function __wbg_offsetX_d5506d9f2ef678c5(arg0) {
    const ret = arg0.offsetX;
    return ret;
}
export function __wbg_offsetY_d6793027eb77ac8b(arg0) {
    const ret = arg0.offsetY;
    return ret;
}
export function __wbg_set_fillStyle_06ca63831e299ec6(arg0, arg1, arg2) {
    arg0.fillStyle = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_font_1cb7225ed52d9f14(arg0, arg1, arg2) {
    arg0.font = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_height_26ab95ff99e2b620(arg0, arg1) {
    arg0.height = arg1 >>> 0;
}
export function __wbg_set_width_81fa781e87b17891(arg0, arg1) {
    arg0.width = arg1 >>> 0;
}
export function __wbg_static_accessor_GLOBAL_THIS_a1248013d790bf5f() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_GLOBAL_f2e0f995a21329ff() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_SELF_24f78b6d23f286ea() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_WINDOW_59fd959c540fe405() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_width_80cea93fc7f63070(arg0) {
    const ret = arg0.width;
    return ret;
}
export function __wbindgen_cast_0000000000000001(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
}
const CanvasApplicationFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_canvasapplication_free(ptr >>> 0, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
