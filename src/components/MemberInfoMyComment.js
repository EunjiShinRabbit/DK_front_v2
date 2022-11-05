import { Link } from "react-router-dom";
import "../style/member.scss"
import defaultProfileImg from "../resource/kriby_study2.png";
import rankIcon1 from "../resource/kirby_icon1.png";
import Write from "./Write";
import BoardName from "./BoardName";
import { useState, useEffect } from "react";
import api from "../api/api";

const MemberInfoMyComment = () =>{
  const [memberInfo, setMemberInfo] = useState('');
  const getNickname = window.localStorage.getItem("userNickname");

  useEffect(() => {    
    const memberData = async () => {
        try {
            const response = await api.memberInfo(getNickname);
            setMemberInfo(response.data);
            console.log(response.data)
        } catch (e) {
            console.log(e);
        }
    };
    memberData();
  }, []);
  return(
    <div className="memberinfomain">
      <div className="memberinfoheader">
        <div className="profilecard">
          <div className="profileimg">
            <img src={defaultProfileImg} alt="�⺻ ������ �̹���(�����ϴ� Ŀ��)"/>
          </div>
          <div className="profileinfo">
          {memberInfo && memberInfo.map(member => (
                    <div key={member.nickname}>
                        <p>ȸ����ȣ : {member.member_num}</p>
                        <p>�г��� : {member.nickname}</p>
                        <p>������ : {member.join}</p>
                        <p>��ȭ��ȣ : {member.phone}</p>
                        <p>�̸��� : {member.email}</p>
                        <p>ȸ����� : {member.grade}</p>
                    </div>
          ))}
          </div>
          <Link to="/login" className="logout">�α׾ƿ�</Link>
        </div>
      </div>
      <div className="memberinfocenter">
        <BoardName name="���� ��� �ۼ���"/>
        <div className="mywriteview">
          <Write/>
        </div>
      </div>
    </div>
  );

};
export default MemberInfoMyComment;