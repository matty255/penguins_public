
# 🏁 Goal: 매거진 사이트 제작!

- step 1. 이미지 기반의 서버리스 매거진 사이트 penguins
- step 2. mop API 적용으로 더미데이터와 연결할 수 있게 고치기
- step 3. 완성된 백엔드와 실제로 연결해보기

## step 1 완성 : 보러가기
https://penguins-test.firebaseapp.com/

<aside>
✅ 필수 기능 목록
    
</aside>

1. 게시글 
    - 목록 가져오기
    - 추가하기 (+이미지 업로드하기)
    - 삭제하기 
    - 수정하기
2. 좋아요
    - 게시글에 좋아요하기
    - 게시글에 좋아요 취소하기
3. 회원가입하기
4. 로그인하기  
5. 예외처리
    - 로그인 한 사용자가 로그인 페이지 또는 회원가입 페이지에 접속한 경우 "이미 로그인이 되어있습니다."라는 메세지를 띄우고 `전체 게시글 목록 조회 페이지`로 이동시킬 수 있도록 예외처리하기
    - 로그인하지 않은 사용자가 좋아요 버튼을 눌렀을 경우, "로그인이 필요합니다." 라는 메세지를 띄워주기
6. 파이어베이스 or S3로 배포!

<aside>
✅ 페이지별 상세 조건
    
</aside>

1. 회원가입 페이지
    1. 이메일 형식 체크, 비밀번호 체크
2. 로그인 페이지
    1. 이메일, 패스워드 미기입 시 로그인 버튼 비활성화 + 비활성화 css 보여주기
3. 메인 페이지(게시글 목록 페이지)
    1. 카드형 게시글 목록 노출
    2. 무한 스크롤
    3. 각 컨텐츠는 작성자, 작성 시간, 이미지프리뷰, 텍스트 내용으로 구성
    4. 게시글 클릭 시, 게시글 상세 페이지로 이동
    5. 게시글에서 좋아요 버튼을 누르면 [좋아요]를 +1한다. 다시 누르면 빈 하트가 되고 좋아요가 -1개 되게
4. 포스트 작성 페이지
    1. 레이아웃 선택 버튼
        1. 3가지 레이아웃 중 선택하도록 한다.
            - 이미지가 오른편에, 텍스트는 왼편에 위치한 레이아웃
            - 이미지가 왼편에, 텍스트는 오른편에 위치한 레이아웃
            - 텍스트가 위에, 이미지는 아래에 위치한 레이아웃
        2. 레이아웃 선택 시, 게시글 레이아웃(모양새)대로 메인 페이지에서 보이도록 한다.
         **텍스트, 이미지 중 입력 안된 게 있다면 게시글 작성 버튼 비활성화**
        4. 작성 완료 시 메인 페이지로 이동
5. 게시글 상세 페이지
    1. 게시글 레이아웃에 맞춰 이미지, 텍스트 위치 조절해서 노출
    2. 그림이 크게 잘보이게
