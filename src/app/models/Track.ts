export class Track {
	id : number;
	name : string;
	artist_name : string;
	album_name : string;
	cover_art: string;

	constructor(obj?: any){
		this.id = obj.track_id || null;
		this.name = obj.track_name || null;
		this.artist_name = obj.artist_name || null;
		this.album_name = obj.album_name || null;
		this.cover_art = obj.album_coverart_100x100 || null;
	} 
}