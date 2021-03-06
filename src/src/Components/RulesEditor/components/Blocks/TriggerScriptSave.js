import GenericBlock from '../GenericBlock';

class TriggerScriptSave extends GenericBlock {
    constructor(props) {
        super(props, TriggerScriptSave.getStaticData());
    }

    static compile(config, context) {
        return `if (__%%CONDITION%%__) {
__%%THEN%%__
} else {
__%%ELSE%%__
}`;
    }

    onTagChange(tagCard) {
        this.setState({
            inputs: [
                {
                    nameRender: 'renderNameText',
                    defaultValue: 'On script save or adapter start',
                    attr: 'script'
                },
            ]
        }, () => super.onTagChange());
    }

    static getStaticData() {
        return {
            acceptedBy: 'triggers',
            name: 'Start script',
            id: 'TriggerScriptSave',
            icon: 'PlayArrow',
            title: 'Triggers the on script saving or the javascript instance restart'
        }
    }

    getData() {
        return TriggerScriptSave.getStaticData();
    }
}

export default TriggerScriptSave;
