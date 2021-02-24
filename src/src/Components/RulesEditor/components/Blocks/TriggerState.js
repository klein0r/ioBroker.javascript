import GenericBlock from '../GenericBlock';
import Compile from '../../Compile';

class TriggerState extends GenericBlock {
    constructor(props) {
        super(props, TriggerState.getStaticData());
    }

    static compile(config, context) {
        return `on({id: "${config.oid || ''}", change: ${config.tagCard === 'on update' ? 'any' : 'ne'}}, ${Compile.STANDARD_FUNCTION});`
    }

    onTagChange(tagCard) {
        this.setState({
            inputs: [
                {
                    nameRender: 'renderObjectID',
                    attr: 'oid',
                    defaultValue: ''
                }
            ]
        });
    }

    static getStaticData() {
        return {
            acceptedBy: 'triggers',
            name: { en: 'State', ru: 'State' },
            id: 'TriggerState',
            icon: 'FlashOn',
            tagCardArray: ['on update', 'on change']
        }
    }

    getData() {
        return TriggerState.getStaticData();
    }
}

export default TriggerState;