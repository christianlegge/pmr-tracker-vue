import type { Options } from "@/stores/config";

export type TrackableItemInfo = {
	chapter?: number;
	name: string;
	image: string;
	multiple?: number;
	label?: string;
	type: string;
	show?: (settings: Options) => boolean;
	turnInCheck?: string;
	hoverTooltip?: string;
};
