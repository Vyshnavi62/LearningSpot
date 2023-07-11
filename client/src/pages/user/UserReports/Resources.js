import React from "react";
import PageTitle from "../../../component/PageTitle";
import { useSearchParams } from "react-router-dom";
import { Row, Col } from "antd";

function Resources() {
  // console.log(subject,marks);
  const [searchParams] = useSearchParams();
  const subject = searchParams.get("subject");
  const score = searchParams.get("score");

  return (
    <div>
      <PageTitle title="Resources" />
      <div className="divider"></div>

      {/* Java */}
      {subject === "Java" && Number(score) === 0 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://www.bing.com/th?id=OIP.rOZthr59eY5rMedLs5cT0QAAAA&pid=3.1&cb=&w=300&h=300&p=0" alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/live/CFD9EFcNZTQ?feature=share', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/A74TOX803D0/maxresdefault.jpg" alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=UmnCZ7-9yDY', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://i.pinimg.com/originals/5f/8b/d8/5f8bd82984e8ab9e11cfef00b4916a1f.jpg" alt='' height={150} width={150} onClick={() => window.open('https://www.w3schools.com/java/', '_blank')} /><br/><br/><br/>
              <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305131111/Java-programming.png"  alt='' height={150} width={150} onClick={() => window.open('https://www.geeksforgeeks.org/java/', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/NHauG5BaqYg/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/java-tutorial/', '_blank')} /><br/><br/><br/>
              <img src="https://assets.website-files.com/60d04c4106d835bf99aa4c35/637e2e93982438467349e114_Basics%20of%20Java.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://edyst.com/course-info/basics-of-java', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Java" && Number(score) === 1 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://www.bing.com/th?id=OIP.rOZthr59eY5rMedLs5cT0QAAAA&pid=3.1&cb=&w=300&h=300&p=0"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/live/CFD9EFcNZTQ?feature=share', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/A74TOX803D0/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=UmnCZ7-9yDY', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://i.pinimg.com/originals/5f/8b/d8/5f8bd82984e8ab9e11cfef00b4916a1f.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.w3schools.com/java/', '_blank')} /><br/><br/><br/>
              <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305131111/Java-programming.png" alt=''  height={150} width={150} onClick={() => window.open('https://www.geeksforgeeks.org/java/', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/NHauG5BaqYg/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/java-tutorial/', '_blank')} /><br/><br/><br/>
              <img src="https://assets.website-files.com/60d04c4106d835bf99aa4c35/637e2e93982438467349e114_Basics%20of%20Java.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://edyst.com/course-info/basics-of-java', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Java" && Number(score) === 2 && (
        <div>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            YOUTUBE LINK<br/><br/><br/>
            <img src="https://marketing-assets.teamtreehouse.com/meta_images/production/meta_images/Intermediate_Java.png" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/live/vIXcT4hbR0U?feature=share', '_blank')} /><br/><br/><br/>
          </Col>
          <Col span={6}>
            TEXT BOOK<br/><br/><br/>
            <img src="https://www.madrasshoppe.com/5585-large_default/sams-teach-yourself-java-in-21-days-covering-java-7-and-android-6-e-1e-cadenhead.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/LearnJava.pdf', '_blank')} /><br/><br/><br/>
            <img src="https://m.media-amazon.com/images/I/71fVtA5La1L._CR0,579,949,949_UX175.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://gfgc.kar.nic.in/sirmv-science/GenericDocHandler/138-a2973dc6-c024-4d81-be6d-5c3344f232ce.pdf', '_blank')} /><br/><br/><br/>
          </Col>
          <Col span={6}>
            COURSE LINK<br/><br/><br/>
            <img src="https://img.youtube.com/vi/GoXwIVyNvX0/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.mindluster.com/certificate/647', '_blank')} /><br/><br/><br/>
            <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~object-oriented-programming-java/XDP~COURSE!~object-oriented-programming-java.jpeg"  alt='' height={150} width={150} onClick={() => window.open('https://www.coursera.org/learn/object-oriented-java', '_blank')} /><br/><br/><br/>
          </Col>
        </Row>
      </div>

      )}

      {subject === "Java" && Number(score) === 3 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://marketing-assets.teamtreehouse.com/meta_images/production/meta_images/Intermediate_Java.png" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/live/vIXcT4hbR0U?feature=share', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              TEXT BOOK<br/><br/><br/>
              <img src="https://www.madrasshoppe.com/5585-large_default/sams-teach-yourself-java-in-21-days-covering-java-7-and-android-6-e-1e-cadenhead.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/LearnJava.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://m.media-amazon.com/images/I/71fVtA5La1L._CR0,579,949,949_UX175.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://gfgc.kar.nic.in/sirmv-science/GenericDocHandler/138-a2973dc6-c024-4d81-be6d-5c3344f232ce.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img.youtube.com/vi/GoXwIVyNvX0/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.mindluster.com/certificate/647', '_blank')} /><br/><br/><br/>
              <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~object-oriented-programming-java/XDP~COURSE!~object-oriented-programming-java.jpeg"  alt='' height={150} width={150} onClick={() => window.open('https://www.coursera.org/learn/object-oriented-java', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Java" && Number(score) === 4 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_dEYk_vZsvs-o6zbU2QwSE_McA5oYdT_mRXEA_cUKxQxMRKhSm0Yc2jQkTX1lJlFpbM&usqp=CAU.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/Ae-r8hsbPUo', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5oImrnDKazrAP9rpBtQE97t7nDKO_LBZGjvoN3qW7FuJTNfNS1BWhma3grM27eRPHnQ&usqp=CAU.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://sist.sathyabama.ac.in/sist_coursematerial/uploads/SBS1301.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img-c.udemycdn.com/course/750x422/4580916_5fdc_6.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/advanced-java-programming-course/', '_blank')} /><br/><br/><br/>
              <img src="https://assets.website-files.com/60d04c4106d835bf99aa4c35/61f7eb0292d84908e7c370fd_Java%20Programming%20%20Intro%20to%20Advanced-p-1600.jpeg" alt=''  height={150} width={150} onClick={() => window.open('https://edyst.com//course-info/java-programming-full-time-jpgbp', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Java" && Number(score) === 5 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_dEYk_vZsvs-o6zbU2QwSE_McA5oYdT_mRXEA_cUKxQxMRKhSm0Yc2jQkTX1lJlFpbM&usqp=CAU.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/Ae-r8hsbPUo', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5oImrnDKazrAP9rpBtQE97t7nDKO_LBZGjvoN3qW7FuJTNfNS1BWhma3grM27eRPHnQ&usqp=CAU.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://sist.sathyabama.ac.in/sist_coursematerial/uploads/SBS1301.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img-c.udemycdn.com/course/750x422/4580916_5fdc_6.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/advanced-java-programming-course/', '_blank')} /><br/><br/><br/>
              <img src="https://assets.website-files.com/60d04c4106d835bf99aa4c35/61f7eb0292d84908e7c370fd_Java%20Programming%20%20Intro%20to%20Advanced-p-1600.jpeg" alt=''  height={150} width={150} onClick={() => window.open('https://edyst.com//course-info/java-programming-full-time-jpgbp', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>

      )}

      {/* C */}

      {subject === "C" && Number(score) === 0 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/KJgsSFOSQv0/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/KJgsSFOSQv0', '_blank')} /><br/><br/><br/>
              <img src="https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/eab2e064afab4d8aa5f0b0d408cef9e0.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://youtu.be/irqbmMNs2Bo', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/rLf3jnHxSmU/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAcc-pWXxyhnGaG5SJVgTtSTlWSGw"   alt='' height={150} width={150} onClick={() => window.open('https://www.w3schools.com/c/', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              TEXT BOOK DOCUMENT<br/><br/><br/>
              <img src="https://www.pragimtech.com/wp-content/uploads/2020/03/c-tutorial-for-beginners.png"  alt='' height={150} width={150} onClick={() => window.open('https://cse.iitkgp.ac.in/~pallab/PDS-2011-SPRING/Lec-1c.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://programmerspoint.in/images/c-programming-course.png" alt=''  height={150} width={150} onClick={() => window.open('https://vardhaman.org/wp-content/uploads/2021/03/CP.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://lecontent.sololearn.com/material-images/8327efc7651d4c63830d7dfeb6a72728-C%20Track%20Intermediate.png" alt=''  height={150} width={150} onClick={() => window.open('https://www.sololearn.com/learn/courses/c-intermediate', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "C" && Number(score) === 1 && (
        <div>
           <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/KJgsSFOSQv0/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/KJgsSFOSQv0', '_blank')} /><br/><br/><br/>
              <img src="https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/eab2e064afab4d8aa5f0b0d408cef9e0.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/irqbmMNs2Bo', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/rLf3jnHxSmU/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAcc-pWXxyhnGaG5SJVgTtSTlWSGw"   alt='' height={150} width={150} onClick={() => window.open('https://www.w3schools.com/c/', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              TEXT BOOK DOCUMENT<br/><br/><br/>
              <img src="https://www.pragimtech.com/wp-content/uploads/2020/03/c-tutorial-for-beginners.png"  alt='' height={150} width={150} onClick={() => window.open('https://cse.iitkgp.ac.in/~pallab/PDS-2011-SPRING/Lec-1c.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://programmerspoint.in/images/c-programming-course.png"  alt='' height={150} width={150} onClick={() => window.open('https://vardhaman.org/wp-content/uploads/2021/03/CP.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://lecontent.sololearn.com/material-images/8327efc7651d4c63830d7dfeb6a72728-C%20Track%20Intermediate.png" alt=''  height={150} width={150} onClick={() => window.open('https://www.sololearn.com/learn/courses/c-intermediate', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "C" && Number(score) === 2 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDG8DOoAIbnvUHPo0B8tQfdmp3e5HWhtrZPmVDSiSiCWETDo6CuO6K13AZxKHIEKvKaQ&usqp=CAU.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/Bz4MxDeEM6k', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/rLf3jnHxSmU/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAcc-pWXxyhnGaG5SJVgTtSTlWSGw"  alt='' height={150} width={150} onClick={() => window.open('https://www.w3schools.com/c/', '_blank')} /><br/><br/><br/>
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/cprogramminglanguagetutorialautosaved-140925055102-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.javatpoint.com/c-programming-language-tutorial', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              TEXT BOOK DOCUMENT<br/><br/><br/>
              <img src="https://cdn0.knowledgecity.com/opencontent/courses/previews/CMP1546/800--v112261.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://engineering.purdue.edu/HELPS/Publications/intermediatecbook.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://lecontent.sololearn.com/material-images/8327efc7651d4c63830d7dfeb6a72728-C%20Track%20Intermediate.png" alt=''  height={150} width={150} onClick={() => window.open('https://www.sololearn.com/learn/courses/c-intermediate', '_blank')} /><br/><br/><br/>
            </Col>
            
          </Row>
        </div>
      )}

      {subject === "C" && Number(score) === 3 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDG8DOoAIbnvUHPo0B8tQfdmp3e5HWhtrZPmVDSiSiCWETDo6CuO6K13AZxKHIEKvKaQ&usqp=CAU.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/Bz4MxDeEM6k', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/rLf3jnHxSmU/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAcc-pWXxyhnGaG5SJVgTtSTlWSGw"  alt='' height={150} width={150} onClick={() => window.open('https://www.w3schools.com/c/', '_blank')} /><br/><br/><br/>
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/cprogramminglanguagetutorialautosaved-140925055102-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.javatpoint.com/c-programming-language-tutorial', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              TEXT BOOK DOCUMENT<br/><br/><br/>
              <img src="https://cdn0.knowledgecity.com/opencontent/courses/previews/CMP1546/800--v112261.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://engineering.purdue.edu/HELPS/Publications/intermediatecbook.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://lecontent.sololearn.com/material-images/8327efc7651d4c63830d7dfeb6a72728-C%20Track%20Intermediate.png" alt=''  height={150} width={150} onClick={() => window.open('https://www.sololearn.com/learn/courses/c-intermediate', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "C" && Number(score) === 4 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://img-b.udemycdn.com/course/750x422/1467808_f8c0.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://youtu.be/Bz4MxDeEM6k', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/7Rb3ZJetvA8/mqdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=7Rb3ZJetvA8&t=6s', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://www.tutorialspoint.com/cprogramming/images/c-mini-logo.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.tutorialspoint.com/cprogramming/index.htm', '_blank')} /><br/><br/><br/>
              </Col>
              <Col span={6}>
              TEXT BOOK DOCUMENT<br/><br/><br/>
              <img src="https://cdn0.knowledgecity.com/opencontent/courses/previews/CMP1546/800--v112261.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://engineering.purdue.edu/HELPS/Publications/intermediatecbook.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://d31ezp3r8jwmks.cloudfront.net/otmhx75ondiy56989zdvszi45sy8" alt=''  height={150} width={150} onClick={() => window.open('https://www.codebreakthrough.com/c-programming-crash-course?coupon=CFORFREE', '_blank')} /><br/><br/><br/>
              <img src="https://img-b.udemycdn.com/course/750x422/2800976_98e5.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/advanced-c-programming-course/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "C" && Number(score) === 5 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://img-b.udemycdn.com/course/750x422/1467808_f8c0.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://youtu.be/Bz4MxDeEM6k', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/7Rb3ZJetvA8/mqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=7Rb3ZJetvA8&t=6s', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://www.tutorialspoint.com/cprogramming/images/c-mini-logo.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.tutorialspoint.com/cprogramming/index.htm', '_blank')} /><br/><br/><br/>
              </Col>
              <Col span={6}>
              TEXT BOOK DOCUMENT<br/><br/><br/>
              <img src="https://cdn0.knowledgecity.com/opencontent/courses/previews/CMP1546/800--v112261.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://engineering.purdue.edu/HELPS/Publications/intermediatecbook.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col>
              COURSE LINK<br/><br/><br/>
              <img src="https://d31ezp3r8jwmks.cloudfront.net/otmhx75ondiy56989zdvszi45sy8"  alt='' height={150} width={150} onClick={() => window.open('https://www.codebreakthrough.com/c-programming-crash-course?coupon=CFORFREE', '_blank')} /><br/><br/><br/>
              <img src="https://img-b.udemycdn.com/course/750x422/2800976_98e5.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/advanced-c-programming-course/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {/* NETWORK THEORY */}

      {subject === "Network Theory" && Number(score) === 0 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/qFcuovfgPTc/hqdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://youtu.be/NEhH6C7Fzw4', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/hHWAHhhVd6I/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/TMUg_jcGv3A', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/tLeJFxjcVpE/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://vssut.ac.in/lecture_notes/lecture1599051071.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://www.tutorialspoint.com/network_theory/images/network-theory-mini-logo.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.tutorialspoint.com/network_theory/network_theory_quick_guide.htm', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/7Nh7ISeqn6E/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://archive.nptel.ac.in/courses/108/105/108105159/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Network Theory" && Number(score) === 1 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/qFcuovfgPTc/hqdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://youtu.be/NEhH6C7Fzw4', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/hHWAHhhVd6I/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/TMUg_jcGv3A', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/tLeJFxjcVpE/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://vssut.ac.in/lecture_notes/lecture1599051071.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://www.tutorialspoint.com/network_theory/images/network-theory-mini-logo.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.tutorialspoint.com/network_theory/network_theory_quick_guide.htm', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/7Nh7ISeqn6E/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://archive.nptel.ac.in/courses/108/105/108105159/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>

        </div>
      )}

      {subject === "Network Theory" && Number(score) === 2 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/qFcuovfgPTc/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/NEhH6C7Fzw4', '_blank')} /><br/><br/><br/>
              <img src="https://firebasestorage.googleapis.com/v0/b/neso-c53c4.appspot.com/o/ImageResource%2FCourseThumbnails%2Fee001.png?alt=media&token=2fb1c6ad-0e69-4b9c-b0bb-ff49e00d6d6a" alt=''  height={150} width={150} onClick={() => window.open('https://nesoacademy.org/ee/01-network-theory', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://www.tutorialspoint.com/network_theory/images/network-theory.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.tutorialspoint.com/network_theory/index.htm', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img-c.udemycdn.com/course/750x422/456210_ae7d_2.jpg" alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/network-theory-introduction/', '_blank')} /><br/><br/><br/>  
            </Col>
          </Row>
        </div>
      )}

      {subject === "Network Theory" && Number(score) === 3 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/qFcuovfgPTc/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/NEhH6C7Fzw4', '_blank')} /><br/><br/><br/>
              <img src="https://firebasestorage.googleapis.com/v0/b/neso-c53c4.appspot.com/o/ImageResource%2FCourseThumbnails%2Fee001.png?alt=media&token=2fb1c6ad-0e69-4b9c-b0bb-ff49e00d6d6a" alt=''  height={150} width={150} onClick={() => window.open('https://nesoacademy.org/ee/01-network-theory', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://www.tutorialspoint.com/network_theory/images/network-theory.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.tutorialspoint.com/network_theory/index.htm', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img-c.udemycdn.com/course/750x422/456210_ae7d_2.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/network-theory-introduction/', '_blank')} /><br/><br/><br/>  
            </Col>
          </Row>

        </div>
      )}

      {subject === "Network Theory" && Number(score) === 4 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://1.bp.blogspot.com/-aOKsLYSs7sY/XkPo7q4b8MI/AAAAAAAAAzE/-y3NctH4dcE1ys-gIZ6L2gnarc_LGtukgCLcBGAsYHQ/w280/1.png" alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=nIiOpgguCXs', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://www.tutorialspoint.com/network_theory/images/network-theory.jpg" alt='' height={150} width={150} onClick={() => window.open('https://www.tutorialspoint.com/network_theory/index.htm', '_blank')} /><br/><br/><br/>
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/networktheoryintrojune2012-120610045247-phpapp02-thumbnail.jpg?w=3840&q=90" alt='' height={150} width={200} onClick={() => window.open('https://www.slideshare.net/LesHurv/networking-theories-presentation-3522181', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/7Nh7ISeqn6E/maxresdefault.jpg" alt='' height={150} width={150} onClick={() => window.open('https://onlinecourses.nptel.ac.in/noc20_ee46/preview', '_blank')} /><br/><br/><br/>
              <img src="https://img-c.udemycdn.com/course/750x422/456210_ae7d_2.jpg" alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/network-theory-introduction/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Network Theory" && Number(score) === 5 && (
        <div>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            YOUTUBE LINK<br/><br/><br/>
            <img src="https://1.bp.blogspot.com/-aOKsLYSs7sY/XkPo7q4b8MI/AAAAAAAAAzE/-y3NctH4dcE1ys-gIZ6L2gnarc_LGtukgCLcBGAsYHQ/w280/1.png"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=nIiOpgguCXs', '_blank')} /><br/><br/><br/>
          </Col>
          <Col span={6}>
            ONLINE REFERENCE<br/><br/><br/>
            <img src="https://www.tutorialspoint.com/network_theory/images/network-theory.jpg" alt='' height={150} width={150} onClick={() => window.open('https://www.tutorialspoint.com/network_theory/index.htm', '_blank')} /><br/><br/><br/>
            <img src="https://cdn.slidesharecdn.com/ss_thumbnails/networktheoryintrojune2012-120610045247-phpapp02-thumbnail.jpg?w=3840&q=90" alt='' height={150} width={150} onClick={() => window.open('https://www.slideshare.net/LesHurv/networking-theories-presentation-3522181', '_blank')} /><br/><br/><br/>
          </Col>
          <Col span={6}>
            COURSE LINK<br/><br/><br/>
            <img src="https://i.ytimg.com/vi/7Nh7ISeqn6E/maxresdefault.jpg" alt='' height={150} width={150} onClick={() => window.open('https://onlinecourses.nptel.ac.in/noc20_ee46/preview', '_blank')} /><br/><br/><br/>
            <img src="https://img-c.udemycdn.com/course/750x422/456210_ae7d_2.jpg" alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/network-theory-introduction/', '_blank')} /><br/><br/><br/>
          </Col>
        </Row>
      </div>
      )}

      {/* Electronics Devices and Circuits */}

      {subject === "Electronics Devices and Circuits" && Number(score) === 0 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/n-CYKFZKxX8/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=n-CYKFZKxX8', '_blank')} /><br/><br/><br/>
              <img src="https://yt3.googleusercontent.com/Fce7v-YZrjKmd_OVOKe4u4o0a4F3H49ILnKJ3yFO8PBFKWVLnF4Cky0tY5gUpn5muSzn4US5uGU=s900-c-k-c0x00ffffff-no-rj"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/@electronicdevicescircuits1831/playlists', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsZjEa8qwvfMRqH7D0akfQra5B5osCy4hP0mUvNHaGMu6gOS3JrKXnL7e05J2taDrHM0&usqp=CAU.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://mrcet.com/downloads/digital_notes/EEE/EDC%20Lecture%20Notes.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://www.notesduniya.com/images/products/ELECTRONICS/electronic-devices-and-circuits-made-easy-class-notes/electronic-devices-and-circuits-made-easy-class-notes.jpeg"  alt='' height={150} width={150} onClick={() => window.open('https://www.iare.ac.in/sites/default/files/lecture_notes/IARE_ECE_EDC%20NOTES.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img-b.udemycdn.com/course/750x422/3819842_3ef7_2.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/electronic-devices-and-circuits/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Electronics Devices and Circuits" && Number(score) === 1 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/n-CYKFZKxX8/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=n-CYKFZKxX8', '_blank')} /><br/><br/><br/>
              <img src="https://yt3.googleusercontent.com/Fce7v-YZrjKmd_OVOKe4u4o0a4F3H49ILnKJ3yFO8PBFKWVLnF4Cky0tY5gUpn5muSzn4US5uGU=s900-c-k-c0x00ffffff-no-rj"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/@electronicdevicescircuits1831/playlists', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsZjEa8qwvfMRqH7D0akfQra5B5osCy4hP0mUvNHaGMu6gOS3JrKXnL7e05J2taDrHM0&usqp=CAU.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://mrcet.com/downloads/digital_notes/EEE/EDC%20Lecture%20Notes.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://www.notesduniya.com/images/products/ELECTRONICS/electronic-devices-and-circuits-made-easy-class-notes/electronic-devices-and-circuits-made-easy-class-notes.jpeg"  alt='' height={150} width={150} onClick={() => window.open('https://www.iare.ac.in/sites/default/files/lecture_notes/IARE_ECE_EDC%20NOTES.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img-b.udemycdn.com/course/750x422/3819842_3ef7_2.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/electronic-devices-and-circuits/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>

        </div>
      )}

      {subject === "Electronics Devices and Circuits" && Number(score) === 2 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/n-CYKFZKxX8/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/n-CYKFZKxX8', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://easyengineering.net/wp-content/uploads/2019/10/EC8353-Electronic-Devices-and-Circuits-EDC-1.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://cmrcet.ac.in/files/ECE/ececoursefile/1.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://learnengineering.in/wp-content/uploads/2020/04/Electronic-Devices-and-Circuit-Theory-By-Robert-L-Boylestad.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.gacbe.ac.in/images/E%20books/Electronic%20Devices%20and%20Circuit%20Theory.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://m.media-amazon.com/images/I/511rDuBtIzL.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://sist.sathyabama.ac.in/sist_coursematerial/uploads/SECA1101.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/uccmBEde6tw/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/electronic-devices-and-circuits/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Electronics Devices and Circuits" && Number(score) === 3 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/n-CYKFZKxX8/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://youtu.be/n-CYKFZKxX8', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://easyengineering.net/wp-content/uploads/2019/10/EC8353-Electronic-Devices-and-Circuits-EDC-1.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://cmrcet.ac.in/files/ECE/ececoursefile/1.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://learnengineering.in/wp-content/uploads/2020/04/Electronic-Devices-and-Circuit-Theory-By-Robert-L-Boylestad.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.gacbe.ac.in/images/E%20books/Electronic%20Devices%20and%20Circuit%20Theory.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://m.media-amazon.com/images/I/511rDuBtIzL.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://sist.sathyabama.ac.in/sist_coursematerial/uploads/SECA1101.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/uccmBEde6tw/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/electronic-devices-and-circuits/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>

        </div>
      )}

      {subject === "Electronics Devices and Circuits" && Number(score) === 4 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://lastmomenttuitions.com/wp-content/uploads/2020/08/Dhaancha-THumbnail.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://youtu.be/uccmBEde6tw', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/-qB-UOJ4Au4/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=-qB-UOJ4Au4', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/c7ddca01c974994c7e99a3d19e7edfca/thumb_1200_1553.png"  alt='' height={150} width={150} onClick={() => window.open('https://cmrcet.ac.in/files/ECE/ececoursefile/1.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://easyengineering.net/wp-content/uploads/2019/10/EC8353-Electronic-Devices-and-Circuits-EDC-1.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.iare.ac.in/sites/default/files/lecture_notes/IARE_ECE_EDC%20NOTES.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/uccmBEde6tw/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/electronic-devices-and-circuits/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Electronics Devices and Circuits" && Number(score) === 5 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://lastmomenttuitions.com/wp-content/uploads/2020/08/Dhaancha-THumbnail.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://youtu.be/uccmBEde6tw', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/-qB-UOJ4Au4/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=-qB-UOJ4Au4', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/c7ddca01c974994c7e99a3d19e7edfca/thumb_1200_1553.png"  alt='' height={150} width={150} onClick={() => window.open('https://cmrcet.ac.in/files/ECE/ececoursefile/1.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://easyengineering.net/wp-content/uploads/2019/10/EC8353-Electronic-Devices-and-Circuits-EDC-1.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.iare.ac.in/sites/default/files/lecture_notes/IARE_ECE_EDC%20NOTES.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/uccmBEde6tw/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/electronic-devices-and-circuits/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>

        </div>
      )}

      {/* Electrical Machines */}

      {subject === "Electrical Machines" && Number(score) === 0 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/PGihCyWoVGE/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=PGihCyWoVGE', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/nAOplzq7srM/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=nAOplzq7srM', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://gs-blog-images.grdp.co/gate-exam/wp-content/uploads/2016/10/06155854/ElecMachines-2.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://byjusexamprep.com/liveData/f/2021/10/electrical_machines_79_85.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://easyengineering.net/wp-content/uploads/2018/03/EMECH.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://easyengineering.net/electrical-machines-made-easy/', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img-b.udemycdn.com/course/750x422/4473606_04d6_3.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/electric-machines-complete-guide-on-dc-machines/', '_blank')} /><br/><br/><br/>
              <img src="https://th.bing.com/th/id/OIP.7KxGn1LaVwirtS7CKo4tHQHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  alt='' height={150} width={150} onClick={() => window.open('https://onlinecourses.nptel.ac.in/noc21_ee71/preview', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Electrical Machines" && Number(score) === 1 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/PGihCyWoVGE/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=PGihCyWoVGE', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/nAOplzq7srM/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=nAOplzq7srM', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://gs-blog-images.grdp.co/gate-exam/wp-content/uploads/2016/10/06155854/ElecMachines-2.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://byjusexamprep.com/liveData/f/2021/10/electrical_machines_79_85.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://easyengineering.net/wp-content/uploads/2018/03/EMECH.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://easyengineering.net/electrical-machines-made-easy/', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img-b.udemycdn.com/course/750x422/4473606_04d6_3.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/electric-machines-complete-guide-on-dc-machines/', '_blank')} /><br/><br/><br/>
              <img src="https://th.bing.com/th/id/OIP.7KxGn1LaVwirtS7CKo4tHQHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  alt='' height={150} width={150} onClick={() => window.open('https://onlinecourses.nptel.ac.in/noc21_ee71/preview', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Electrical Machines" && Number(score) === 2 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://th.bing.com/th/id/OIP.7KxGn1LaVwirtS7CKo4tHQHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=''  height={150} width={150} onClick={() => window.open('https://archive.nptel.ac.in/courses/108/105/108105155/', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/SVTq5mjclPo/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=SVTq5mjclPo', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/UYRxK2huBOY/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=UYRxK2huBOY&list=PL3eEXnCBViH-bB5Iq9DRHbM_WCPruzP1B', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://www.newtondesk.com/wp-content/uploads/2020/03/electrical-machines-handwritten-study-notes.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.newtondesk.com/electrical-machines-hand-written-study-notes/', '_blank')} /><br/><br/><br/>
              <img src="https://originindia.oup.com/covers/pop-up/9780199472635"  alt='' height={150} width={150} onClick={() => window.open('https://www.jbiet.edu.in/pdffls/EEE-Coursematerial/electrical-machines-1-notes.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img.p30download.ir/tutorial/image/2021/08/1628580955_ultimate-electrical-machines-for-electrical-engineering.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/fundamentals-of-transformer-for-electrical-power-engineering/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Electrical Machines" && Number(score) === 3 && (
        <div>
           <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://th.bing.com/th/id/OIP.7KxGn1LaVwirtS7CKo4tHQHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=''  height={150} width={150} onClick={() => window.open('https://archive.nptel.ac.in/courses/108/105/108105155/', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/SVTq5mjclPo/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=SVTq5mjclPo', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/UYRxK2huBOY/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=UYRxK2huBOY&list=PL3eEXnCBViH-bB5Iq9DRHbM_WCPruzP1B', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://www.newtondesk.com/wp-content/uploads/2020/03/electrical-machines-handwritten-study-notes.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.newtondesk.com/electrical-machines-hand-written-study-notes/', '_blank')} /><br/><br/><br/>
              <img src="https://originindia.oup.com/covers/pop-up/9780199472635"  alt='' height={150} width={150} onClick={() => window.open('https://www.jbiet.edu.in/pdffls/EEE-Coursematerial/electrical-machines-1-notes.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://img.p30download.ir/tutorial/image/2021/08/1628580955_ultimate-electrical-machines-for-electrical-engineering.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/fundamentals-of-transformer-for-electrical-power-engineering/', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>

        </div>
      )}

      {subject === "Electrical Machines" && Number(score) === 4 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/D_ySz-KNg4g/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://onlinecourses.nptel.ac.in/noc22_ee06/preview', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/mA5S4Ei1fqI/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=mA5S4Ei1fqI', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/KSKAT48YKJc/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=KSKAT48YKJc', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/F2-IGFVNZvI/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=WjpdVpDrO_w&list=PLs5_Rtf2P2r4NZoUsJ6LWiuu8BZmsAnV2', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://originindia.oup.com/covers/pop-up/9780199472635"  alt='' height={150} width={150} onClick={() => window.open('https://www.jbiet.edu.in/pdffls/EEE-Coursematerial/electrical-machines-1-notes.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://i0.wp.com/learnengineering.in/wp-content/uploads/2023/04/EE3405-Electrical-Machines-II.jpeg?resize=228%2C300&ssl=1"  alt='' height={150} width={150} onClick={() => window.open('https://www.iare.ac.in/sites/default/files/EM_II_%20Lecture%20notes.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/UrZ5toM4sTU/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.gateacademy.co.in/exams/gate/electrical-engineering/subject-wise-courses/live-class/electrical-machines-1', '_blank')} /><br/><br/><br/>
              <img src="https://img.p30download.ir/tutorial/image/2021/08/1628580955_ultimate-electrical-machines-for-electrical-engineering.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.gateacademy.co.in/exams/gate/electrical-engineering/subject-wise-courses/live-class/electrical-machines-1', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Electrical Machines" && Number(score) === 5 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/D_ySz-KNg4g/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://onlinecourses.nptel.ac.in/noc22_ee06/preview', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/mA5S4Ei1fqI/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=mA5S4Ei1fqI', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/KSKAT48YKJc/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=KSKAT48YKJc', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/F2-IGFVNZvI/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=WjpdVpDrO_w&list=PLs5_Rtf2P2r4NZoUsJ6LWiuu8BZmsAnV2', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://originindia.oup.com/covers/pop-up/9780199472635"  alt='' height={150} width={150} onClick={() => window.open('https://www.jbiet.edu.in/pdffls/EEE-Coursematerial/electrical-machines-1-notes.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://i0.wp.com/learnengineering.in/wp-content/uploads/2023/04/EE3405-Electrical-Machines-II.jpeg?resize=228%2C300&ssl=1"  alt='' height={150} width={150} onClick={() => window.open('https://www.iare.ac.in/sites/default/files/EM_II_%20Lecture%20notes.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/UrZ5toM4sTU/hqdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.gateacademy.co.in/exams/gate/electrical-engineering/subject-wise-courses/live-class/electrical-machines-1', '_blank')} /><br/><br/><br/>
              <img src="https://img.p30download.ir/tutorial/image/2021/08/1628580955_ultimate-electrical-machines-for-electrical-engineering.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.gateacademy.co.in/exams/gate/electrical-engineering/subject-wise-courses/live-class/electrical-machines-1', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {/* Power Systems */}

      {subject === "Power Systems" && Number(score) === 0 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/hu8AeidmD4k/maxresdefault.jpg"  alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=hu8AeidmD4k&list=PLm_MSClsnwm9IkUJfr8Xzi9-Ymv9o1EF8&index=3', '_blank')} /><br/><br/><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vhh8jjoiIdCZ8zZ3esWG6XuZp3MrUvnHWQ&usqp=CAU"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=5-h0pcqBrI4', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://m.media-amazon.com/images/I/41wfhkVLO5L._SX355_BO1,204,203,200_.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://handoutset.com/wp-content/uploads/2022/02/Electrical-Power-Systems-by-C.-L.-Wadhwa.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/OrPAIXxLjHg/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://nptel.ac.in/courses/108105067', '_blank')} /><br/><br/><br/>
              <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~electric-power-systems/XDP~COURSE!~electric-power-systems.jpeg"  alt='' height={150} width={150} onClick={() => window.open('https://www.coursera.org/learn/electric-power-systemss', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Power Systems" && Number(score) === 1 && (
        <div>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            YOUTUBE LINK<br/><br/><br/>
            <img src="https://i.ytimg.com/vi/hu8AeidmD4k/maxresdefault.jpg"  alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=hu8AeidmD4k&list=PLm_MSClsnwm9IkUJfr8Xzi9-Ymv9o1EF8&index=3', '_blank')} /><br/><br/><br/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vhh8jjoiIdCZ8zZ3esWG6XuZp3MrUvnHWQ&usqp=CAU"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=5-h0pcqBrI4', '_blank')} /><br/><br/><br/>
          </Col>
          <Col span={6}>
            ONLINE REFERENCE<br/><br/><br/>
            <img src="https://m.media-amazon.com/images/I/41wfhkVLO5L._SX355_BO1,204,203,200_.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://handoutset.com/wp-content/uploads/2022/02/Electrical-Power-Systems-by-C.-L.-Wadhwa.pdf', '_blank')} /><br/><br/><br/>
          </Col>
          <Col span={6}>
            COURSE LINK<br/><br/><br/>
            <img src="https://i.ytimg.com/vi/OrPAIXxLjHg/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://nptel.ac.in/courses/108105067', '_blank')} /><br/><br/><br/>
            <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~electric-power-systems/XDP~COURSE!~electric-power-systems.jpeg"  alt='' height={150} width={150} onClick={() => window.open('https://www.coursera.org/learn/electric-power-systemss', '_blank')} /><br/><br/><br/>
          </Col>
        </Row>
        </div>
      )}

      {subject === "Power Systems" && Number(score) === 2 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/pWd2b-F4STw/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=pWd2b-F4STw&list=PLBlnK6fEyqRi17rO6B3_XHtMqAKXQ0Tp4', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/CmMsabAj3UA/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=siv0L7rKwvw&t=4s', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://m.media-amazon.com/images/I/51+0GRDgjcL._SX346_BO1,204,203,200_.jpg"  alt='' height={150} width={150} onClick={() => window.open('http://www.iqytechnicalcollege.com/BAE%20670-Power%20System%20Engineering.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/tb3gCr9m0LU/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://archive.nptel.ac.in/courses/108/102/108102047/', '_blank')} /><br/><br/><br/>
              <img src="https://th.bing.com/th/id/OIP.T-gptAVvDa6hAHwxEdDscQHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/power-system-analysis-part-1-fundamentals/?--=&utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_term=_._ag_118445032537_._ad_618853564450_._kw__._de_c_._dm__._pl__._ti_dsa-1212271230479_._li_1007740_._pd__._&matchtype=&gclid=EAIaIQobChMIiebW8viG_wIVR119Ch3iMgc8EAAYASAAEgJV3vD_BwE', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Power Systems" && Number(score) === 3 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/pWd2b-F4STw/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=pWd2b-F4STw&list=PLBlnK6fEyqRi17rO6B3_XHtMqAKXQ0Tp4', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/CmMsabAj3UA/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=siv0L7rKwvw&t=4s', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://m.media-amazon.com/images/I/51+0GRDgjcL._SX346_BO1,204,203,200_.jpg"  alt='' height={150} width={150} onClick={() => window.open('http://www.iqytechnicalcollege.com/BAE%20670-Power%20System%20Engineering.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/tb3gCr9m0LU/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://archive.nptel.ac.in/courses/108/102/108102047/', '_blank')} /><br/><br/><br/>
              <img src="https://th.bing.com/th/id/OIP.T-gptAVvDa6hAHwxEdDscQHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  alt='' height={150} width={150} onClick={() => window.open('https://www.udemy.com/course/power-system-analysis-part-1-fundamentals/?--=&utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_term=_._ag_118445032537_._ad_618853564450_._kw__._de_c_._dm__._pl__._ti_dsa-1212271230479_._li_1007740_._pd__._&matchtype=&gclid=EAIaIQobChMIiebW8viG_wIVR119Ch3iMgc8EAAYASAAEgJV3vD_BwE', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>

        </div>
      )}

      {subject === "Power Systems" && Number(score) === 4 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/siv0L7rKwvw/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=siv0L7rKwvw&list=PLb2wGSuEdRG8csTYuEYW5N8TTgHzShQ57', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/0hYtfABFNbs/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=0hYtfABFNbs', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://techknowledgebooks.com/wp-content/uploads/2020/03/Power-System-IPE116A-scaled.jpg"  alt='' height={150} width={150} onClick={() => window.open('http://personal.psu.edu/sab51/vls/vonmeier.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://media.wiley.com/product_data/coverImage300/94/04711785/0471178594.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://web.nit.ac.ir/~shahabi.m/M.Sc%20and%20PhD%20materials/Power%20System%20Transient%20Analysis%20Course/Books/Power%20System%20Analysis%20and%20Design%20by%20Glover%20and%20Sarma_4thed.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://www.buytestseries.com/ImageHandler/OnlineCourses/The-Gate-Academy/GATE-EE-Power-Systems-Video-Lectures-Test-Series-1.webp"  alt='' height={150} width={150} onClick={() => window.open('https://www.gateacademy.co.in/exams/gate/electrical-engineering/subject-wise-courses/live-class/power-system-analysis-1', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>
        </div>
      )}

      {subject === "Power Systems" && Number(score) === 5 && (
        <div>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              YOUTUBE LINK<br/><br/><br/>
              <img src="https://i.ytimg.com/vi/siv0L7rKwvw/maxresdefault.jpg" alt=''  height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=siv0L7rKwvw&list=PLb2wGSuEdRG8csTYuEYW5N8TTgHzShQ57', '_blank')} /><br/><br/><br/>
              <img src="https://i.ytimg.com/vi/0hYtfABFNbs/maxresdefault.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://www.youtube.com/watch?v=0hYtfABFNbs', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              ONLINE REFERENCE<br/><br/><br/>
              <img src="https://techknowledgebooks.com/wp-content/uploads/2020/03/Power-System-IPE116A-scaled.jpg"  alt='' height={150} width={150} onClick={() => window.open('http://personal.psu.edu/sab51/vls/vonmeier.pdf', '_blank')} /><br/><br/><br/>
              <img src="https://media.wiley.com/product_data/coverImage300/94/04711785/0471178594.jpg"  alt='' height={150} width={150} onClick={() => window.open('https://web.nit.ac.ir/~shahabi.m/M.Sc%20and%20PhD%20materials/Power%20System%20Transient%20Analysis%20Course/Books/Power%20System%20Analysis%20and%20Design%20by%20Glover%20and%20Sarma_4thed.pdf', '_blank')} /><br/><br/><br/>
            </Col>
            <Col span={6}>
              COURSE LINK<br/><br/><br/>
              <img src="https://www.buytestseries.com/ImageHandler/OnlineCourses/The-Gate-Academy/GATE-EE-Power-Systems-Video-Lectures-Test-Series-1.webp"  alt='' height={150} width={150} onClick={() => window.open('https://www.gateacademy.co.in/exams/gate/electrical-engineering/subject-wise-courses/live-class/power-system-analysis-1', '_blank')} /><br/><br/><br/>
            </Col>
          </Row>

        </div>
      )}

    </div>
  );
}

export default Resources