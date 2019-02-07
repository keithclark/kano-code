import { BlocklyTransformer } from '../../../legacy/loader.js';

export function legacyTransform(app : any) {
    if (!app.parts || !app.source) {
        return;
    }
    const ids : string[] = app.parts.filter((part : any) => part.type === 'slider').map((p : any) => p.id);
    const root = BlocklyTransformer.getDOM(app.source);
    if (root) {
        ids.forEach(id => {
            BlocklyTransformer.transformBlock(root, `block[type="${id}#set_value"]`, (block) => {
                block.setAttribute('type', block.getAttribute('type')!.replace(/(.+)#(.+)/, 'set_$1_value'));
            });
            BlocklyTransformer.transformBlock(root, `block[type="${id}#get_value"]`, (block) => {
                block.setAttribute('type', block.getAttribute('type')!.replace(/(.+)#(.+)/, 'get_$1_value'));
            });
        });
        const serializer = new XMLSerializer();
        app.source = serializer.serializeToString(root);
    }
}