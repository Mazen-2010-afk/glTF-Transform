import { defineConfig } from 'tsdown';

export default defineConfig({
	format: ['esm', 'cjs'],
	platform: 'neutral',
	treeshake: { moduleSideEffects: false },
	// For gl-matrix bundling. See: https://tsdown.dev/options/platform#module-resolution
	inputOptions: { resolve: { mainFields: ['module', 'main'] } },
	// Emit source maps so c8 can map coverage back to original .ts sources
	// instead of reporting on bundled dist files. See: https://tsdown.dev/options/sourcemap
	sourcemap: true,
});
