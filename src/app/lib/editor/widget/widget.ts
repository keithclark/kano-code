/**
 * A widget that can be added using the Content Widget API
 */
export interface IEditorWidget {
    [K : string] : any;
    getDomNode() : HTMLElement;
    getPosition() : string|null;
}
