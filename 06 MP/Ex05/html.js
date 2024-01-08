let header = () => {
    return '<div id="logo" onclick="location.href=`index.html`"><img src="img/logo.png"/></div>\n' +
        '<div id="header_menu">\n' +
        '    <p>home | join | login | notice</p>\n' +
        '    <div id="main_menu">\n' +
        '        <div>자유게시판</div>\n' +
        '        <div>기타연주</div>\n' +
        '        <div>공동구매</div>\n' +
        '        <div>연주회 안내</div>\n' +
        '        <div>회원게시판</div>\n' +
        '    </div>\n' +
        '</div>\n';
}


let footer = () => {
    return '<div id="ft">\n' +
        '    <span id="ft_logo">\n' +
        '        <img src="img/logo_footer.gif" height="71" width="165"/>\n' +
        '    </span>\n' +
        '    <span id="addr">\n' +
        '        <p>asdsadsadsa</p>\n' +
        '        <p>asdsadsadsadasd</p>\n' +
        '        <p>xzcxzcxzczx</p>\n' +
        '    </span>\n' +
        '    <span class="icon"  >\n' +
        '        <span id="icon1">\n' +
        '            <img src="img/facebook.gif"/>\n' +
        '        </span>\n' +
        '        <span id="icon2">\n' +
        '            <img src="img/blog.gif"/>\n' +
        '        </span>\n' +
        '        <span id="icon3">\n' +
        '            <img src="img/twitter.gif"/>\n' +
        '        </span>\n' +
        '    </span>\n' +
        '</div>\n';
}

let aside = (type) => {
    let html = '';
    if(type === 'index') {
        html =
            '<div id="login">\n' +
            '                <div id="login_img"></div>\n' +
            '                <div id="login_input">\n' +
            '                    <div id="login_input_area">\n' +
            '                        <input type="text">\n' +
            '                        <input type="text">\n' +
            '                    </div>\n' +
            '                    <div id="login_btn_area">\n' +
            '                        <input type="button">\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div id="login_d1">\n' +
            '                    <span id="join">회원가입</span>\n' +
            '                    |<span>아이디/비밀번호 찾기</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div id="guestbook">\n' +
            '                <div id="gu_title">\n' +
            '                    <img src="img/ttl_memo.gif"/>\n' +
            '                </div>\n' +
            '                <hr>\n' +
            '                <div id="gu_list">\n' +
            '                    <ul>\n' +
            '                        <li><span>안녕하세요!</span></li>\n' +
            '                        <li><span>안녕하세요!</span></li>\n' +
            '                        <li><span>안녕하세요!</span></li>\n' +
            '                        <li><span>안녕하세요!</span></li>\n' +
            '                    </ul>\n' +
            '                </div>\n' +
            '            </div>';
    } else {
        html =
            '<div id="login">\n' +
            '    <div id="login_img"></div>\n' +
            '    <div id="login_input">\n' +
            '        <div id="login_input_area">\n' +
            '            <input type="text">\n' +
            '            <input type="text">\n' +
            '        </div>\n' +
            '        <div id="login_btn_area">\n' +
            '            <input type="button">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div id="login_d1">\n' +
            '        <span id="join">회원가입</span>\n' +
            '        |<span>아이디/비밀번호 찾기</span>\n' +
            '    </div>\n' +
            '</div>' +
            '<div id="sub_menu">\n' +
            '    <div id="sub_menu_text">\n' +
            '        <p>+ 자유 게시판</p>\n' +
            '        <p>+ 방명록</p>\n' +
            '        <p>+ 공지사항</p>\n' +
            '        <p>+ 등업요청</p>\n' +
            '        <p>+ 포토갤러리</p>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div id="sub_menu2">\n' +
            '    <div id="sub_menu2_img">\n' +
            '        <img src="img/banner1.png"/>\n' +
            '        <img src="img/banner2.png"/>\n' +
            '        <img src="img/banner3.png"/>\n' +
            '    </div>\n' +
            '</div>';
    }
    return html;
}

let main = (type) => {
    html =
        '<div id="main">\n' +
        '   <div id="main_img"></div>\n';
    if(type === 'index') {
        html +=
            '<div id="main_cont">\n' +
            '                    <div id="list">\n' +
            '                        <div id="list01">\n' +
            '                            <div class="list_title">\n' +
            '                                <img src="img/latest1.gif"/>\n' +
            '                                <img src="img/more.gif" class="more" onclick="location.href=`board_list.html`" style="cursor: pointer">\n' +
            '                            </div>\n' +
            '                            <hr>\n' +
            '                            <div class="list_cont">\n' +
            '                                <div class="li_img">\n' +
            '                                    <img src="img/book_pen.gif" height="75" width="94"/>\n' +
            '                                </div>\n' +
            '                                <div class="li_li">\n' +
            '                                    <ul>\n' +
            '                                        <li>\n' +
            '                                            <span class="li_cont">사이트 이용관련!ASDSADSADSAD</span>\n' +
            '                                            <span class="date">2024/01/05</span>\n' +
            '                                        </li>\n' +
            '                                        <li>\n' +
            '                                            <span class="li_cont">사이트 이용관련!ASDSADSADSAD</span>\n' +
            '                                            <span class="date">2024/01/05</span>\n' +
            '                                        </li>\n' +
            '                                        <li>\n' +
            '                                            <span class="li_cont">사이트 이용관련!ASDSADSADSAD</span>\n' +
            '                                            <span class="date">2024/01/05</span>\n' +
            '                                        </li>\n' +
            '                                        <li>\n' +
            '                                            <span class="li_cont">사이트 이용관련!ASDSADSADSAD</span>\n' +
            '                                            <span class="date">2024/01/05</span>\n' +
            '                                        </li>\n' +
            '                                    </ul>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div id="list02">\n' +
            '                            <div class="list_title">\n' +
            '                                <img src="img/latest2.gif">\n' +
            '                                <img src="img/more.gif" class="more" onclick="location.href=`board_list.html`" style="cursor: pointer">\n' +
            '                            </div>\n' +
            '                            <hr>\n' +
            '                            <div class="list_cont">\n' +
            '                                <div class="li_img">\n' +
            '                                    <img src="img/book_pen.gif" height="75" width="94"/>\n' +
            '                                </div>\n' +
            '                                <div class="li_li">\n' +
            '                                    <ul>\n' +
            '                                        <li>\n' +
            '                                            <span class="li_cont">사이트 이용관련!ASDSADSADSAD</span>\n' +
            '                                            <span class="date">2024/01/05</span>\n' +
            '                                        </li>\n' +
            '                                        <li>\n' +
            '                                            <span class="li_cont">사이트 이용관련!ASDSADSADSAD</span>\n' +
            '                                            <span class="date">2024/01/05</span>\n' +
            '                                        </li>\n' +
            '                                        <li>\n' +
            '                                            <span class="li_cont">사이트 이용관련!ASDSADSADSAD</span>\n' +
            '                                            <span class="date">2024/01/05</span>\n' +
            '                                        </li>\n' +
            '                                        <li>\n' +
            '                                            <span class="li_cont">사이트 이용관련!ASDSADSADSAD</span>\n' +
            '                                            <span class="date">2024/01/05</span>\n' +
            '                                        </li>\n' +
            '                                    </ul>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div id="vid">\n' +
            '                        <div id="vid_title">\n' +
            '                            <img src="img/latest3.gif" height="15" width="110"/>\n' +
            '                            <img src="img/more.gif" class="more">\n' +
            '                        </div>\n' +
            '                        <hr>\n' +
            '                        <div id="video">\n' +
            '                            <img src="img/bach.jpg" height="200" width="266"/>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div id="bottom">\n' +
            '                        <div id="bt_title">\n' +
            '                            <img src="img/latest4.gif" height="15" width="73"/>\n' +
            '                        </div>\n' +
            '                        <div id="bt_cont">\n' +
            '                            <div class="bt_img">\n' +
            '                                <img src="img/img1.jpg" height="132" width="190"/>\n' +
            '                                <div>기타페스티벌 4중주</div>\n' +
            '                            </div>\n' +
            '                            <div class="bt_img">\n' +
            '                                <img src="img/img1.jpg" height="132" width="190"/>\n' +
            '                                <div>기타페스티벌 4중주</div>\n' +
            '                            </div>\n' +
            '                            <div class="bt_img">\n' +
            '                                <img src="img/img1.jpg" height="132" width="190"/>\n' +
            '                                <div>기타페스티벌 4중주</div>\n' +
            '                            </div>\n' +
            '\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n';
    } else if(type === 'write') {
        html +=
            '<div id="main_write">\n' +
            '                <div>\n' +
            '                    <h3>자유 게시판</h3>\n' +
            '                    <div>\n' +
            '                        <form action="" method="post">\n' +
            '                            <table id="board_write">\n' +
            '                                <tr>\n' +
            '                                    <th colspan="2">글쓰기</th>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td class="board_th">이름</td>\n' +
            '                                    <td>\n' +
            '                                        <input type="text" name="name" id="name">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td class="board_th">제목</td>\n' +
            '                                    <td>\n' +
            '                                        <input type="text" name="title" id="title">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td class="board_th">내용</td>\n' +
            '                                    <td>\n' +
            '                                        <textarea name="" id="" cols="30" rows="10"></textarea>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td class="board_th">업로드 파일</td>\n' +
            '                                    <td>\n' +
            '                                        <input type="file" name="upload_file" id="upload_file">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                            </table>\n' +
            '                            <div id="board_btn">\n' +
            '                                <img src="img/ok.png" onclick="location.href=`board_list.html`" style="cursor: pointer"/>\n' +
            '                                <img src="img/list.png" onclick="location.href=`board_list.html`" style="cursor: pointer"/>\n' +
            '                            </div>\n' +
            '                        </form>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>';
    } else if(type === 'list') {
        html +=
            '<div id="main_list">\n' +
            '                <div>\n' +
            '                    <h4>자유 게시판</h4>\n' +
            '                    <hr>\n' +
            '                    <div id="search">\n' +
            '                        <span>▷ 총 5개의 게시물이 있습니다.</span>\n' +
            '                        <span style="float: right">SELECT\n' +
            '                        <select name="sel" id="sel">\n' +
            '                            <option value="title">제목</option>\n' +
            '                            <option value="content">내용</option>\n' +
            '                        </select>\n' +
            '                        <input type="text">\n' +
            '                        <button type="button">검색</button>\n' +
            '                    </span>\n' +
            '                    </div>\n' +
            '                    <div id="list_div">\n' +
            '                        <table id="list_table">\n' +
            '                            <tr>\n' +
            '                                <th>번호</th>\n' +
            '                                <th>제목</th>\n' +
            '                                <th>글쓴이</th>\n' +
            '                                <th>일시</th>\n' +
            '                                <th>조회수</th>\n' +
            '                            </tr>\n' +
            '                            <tr>\n' +
            '                                <td>1</td>\n' +
            '                                <td class=\'left\'><a href="board_view.html">제목 출력 제목 출력 제목 출력 제목 출력</a></td>\n' +
            '                                <td>이름</td>\n' +
            '                                <td>2024-01-07</td>\n' +
            '                                <td>22</td>\n' +
            '                            </tr>\n' +
            '                            <tr>\n' +
            '                                <td>2</td>\n' +
            '                                <td class=\'left\'><a href="board_view.html">제목 출력 제목 출력 제목 출력 제목 출력</a></td>\n' +
            '                                <td>이름</td>\n' +
            '                                <td>2024-01-07</td>\n' +
            '                                <td>22</td>\n' +
            '                            </tr>\n' +
            '                            <tr>\n' +
            '                                <td>3</td>\n' +
            '                                <td class=\'left\'><a href="board_view.html">제목 출력 제목 출력 제목 출력 제목 출력</a></td>\n' +
            '                                <td>이름</td>\n' +
            '                                <td>2024-01-07</td>\n' +
            '                                <td>22</td>\n' +
            '                            </tr>\n' +
            '                        </table>\n' +
            '                        <div id="list_btn">\n' +
            '                        <span id="pagination">\n' +
            '                            ◀ 이전 | 다음 ▶\n' +
            '                        </span>\n' +
            '                            <span id="list_button">\n' +
            '                            <img src="img/list.png"/>\n' +
            '                            <img src="img/write.png" height="26" width="71" onclick="location.href=`board_write.html`" style="cursor: pointer"/>\n' +
            '                        </span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>';
    } else if(type === 'view') {
        html +=
            ' <div id="main_view">\n' +
            '                <h4>자유 게시판</h4>\n' +
            '                <div>\n' +
            '                    <div id="view_title">\n' +
            '                        <span style="float: left">\n' +
            '                            게시판 제목 게시판 제목 게시판 제목\n' +
            '                        </span>\n' +
            '                        <span id="view_right">\n' +
            '                            작성자 | 조회수 : 144 | 2024-01-07\n' +
            '                        </span>\n' +
            '                    </div>\n' +
            '                    <div id="view_content">\n' +
            '                        <p>게시판 내용</p>\n' +
            '                        <p>게시판 내용</p>\n' +
            '                        <p>게시판 내용</p>\n' +
            '                        <p>게시판 내용</p>\n' +
            '                    </div>\n' +
            '                    <div id="view_comment">\n' +
            '                        <img src="img/title_comment.gif" width="90" style="float: left"/>\n' +
            '                        <textarea style="float: none"></textarea>\n' +
            '                        <img src="img/ok_ripple.gif" style="float: right"/>\n' +
            '                    </div>\n' +
            '                    <div id="view_btn" class="right">\n' +
            '                        <img src="img/delete.png">\n' +
            '                        <img src="img/list.png" onclick="location.href=`board_list.html`" style="cursor: pointer">\n' +
            '                        <img src="img/write.png" onclick="location.href=`board_write.html`" style="cursor: pointer">\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>';
    }
    document.querySelector('main').insertAdjacentHTML('afterbegin', html);
    if(type !== 'index') {
        main_img()
    }
}

let main_img = () => {
    document.getElementById('main_img').style.background = 'url("img/comm.gif")';
    document.getElementById('main_img').style.backgroundRepeat = 'no-repeat';
    document.getElementById('main_img').style.backgroundSize = 'contain';
    document.getElementById('main_img').style.height = '30%';
}
