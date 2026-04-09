/* tslint:disable */
/* eslint-disable */

export class CanvasApplication {
    free(): void;
    [Symbol.dispose](): void;
    execute_attack(): void;
    constructor(canvas_id: string);
    on_keydown(_e: KeyboardEvent): void;
    on_mousedown(e: MouseEvent): void;
    on_mousemove(_e: MouseEvent): void;
    on_mouseup(_e: MouseEvent): void;
    render(): void;
    reset_game(): void;
    run(): void;
    update_attack_button(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_canvasapplication_free: (a: number, b: number) => void;
    readonly canvasapplication_execute_attack: (a: number) => void;
    readonly canvasapplication_new: (a: number, b: number) => [number, number, number];
    readonly canvasapplication_on_keydown: (a: number, b: any) => void;
    readonly canvasapplication_on_mousedown: (a: number, b: any) => void;
    readonly canvasapplication_on_mouseup: (a: number, b: any) => void;
    readonly canvasapplication_render: (a: number) => void;
    readonly canvasapplication_reset_game: (a: number) => void;
    readonly canvasapplication_run: (a: number) => void;
    readonly canvasapplication_update_attack_button: (a: number) => void;
    readonly canvasapplication_on_mousemove: (a: number, b: any) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
