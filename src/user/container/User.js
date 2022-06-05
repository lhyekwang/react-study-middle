import React , {useEffect} from 'react';
import { Row ,Col ,Typography, PageHeader, Descriptions, Space , Spin} from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actions  , Types} from '../state';
import useFetchInfo from '../../common/hook/useFetchInfo';
/**
 *
 * @param {object} param
 * @param {import('react-router').match} param.match
 */

export default function User({ match }) {
  const history = useHistory();
  const dispatch =useDispatch();
  const user = useSelector(state => state.user.user);

  const name = match.params.name;
  useEffect(() => {
    dispatch(actions.fetchUser(name));
  }, [dispatch, name]);
 
  const { isFetched , isSlow } = useFetchInfo(Types.FetchUser);

  return (
    <>
       <Row justify="center">
        <Col xs={24} md={20} lg={14}>
          <PageHeader
            onBack={history.goBack}
            title={
              <Space>
                  사용자 정보
                  { isSlow && <Spin size="small"/> }
              </Space>
            }
          >
          {user && (
              <Descriptions layout="vertical" bordered column={1}>
                <Descriptions.Item label="이름">
                  <Typography.Text>{user.name}</Typography.Text>
                </Descriptions.Item>
                <Descriptions.Item label='소속'>{user.department}</Descriptions.Item>
                <Descriptions.Item label='태그'>{user.tag}</Descriptions.Item>
                <Descriptions.Item label='수정 내역'>수정 내역</Descriptions.Item>
              </Descriptions>
          )}
          {!user && isFetched && ( //사용자 정보도 없고, 정보를 불러오고 있는중
            <Typography.Text>존재하지 않는 사용자 입니다.</Typography.Text>
          )}
          </PageHeader>
        </Col>
    </Row>
    </>
    );
}