import * as React from 'react';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import BasicPage, { BasicPageData } from '../presentation/BasicPage';
import { TutoralStateType, } from '../reducers';
import { fetchTopicPageIfNeeded } from '../actions';

interface RenderBasicPageData {
    dispatch: thunk.Dispatch<TutoralStateType>;
    content: string;
    topic: string;
    id: string;
    isFetching: boolean;
};

class RenderBasicPage extends React.Component<RenderBasicPageData, {}> {
    constructor(props: RenderBasicPageData) {
        super(props);
    }
    componentDidMount() {
        const { dispatch, topic, id, content } = this.props;
        dispatch(fetchTopicPageIfNeeded(topic, id, content));
    }
    componentWillReceiveProps(nextProps) {
        const { dispatch, topic, id, content } = nextProps;
        dispatch(fetchTopicPageIfNeeded(topic, id, content));
    }
    render() {
        const BasicProps: BasicPageData = {
            type: 'plain',
            content: this.props.content
        };
        return BasicPage(BasicProps);
    }
}

const mapStateToProps = (state: TutoralStateType) => {
    const {topic, id, content, isFetching} = state.TOPIC_STATE;
    return {
        content,
        topic,
        id,
        isFetching: true
    };
};

const ActiveQuestionPage = connect(mapStateToProps)(RenderBasicPage);

export default ActiveQuestionPage;
