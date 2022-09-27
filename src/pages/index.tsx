/*
 * @Author: 陈力恒
 * @Date: 2022-09-02 11:35:24
 * @LastEditors: 陈力恒
 * @LastEditTime: 2022-09-06 11:10:00
 * @Description: file content
 */
import yayJpg from "../assets/yay.jpg";

export default function HomePage() {
  return (
    <div>
      <h1>docker!!!</h1>
      <h1>docker!!!</h1>
      <h1>docker!!!</h1>
      <h1>docker!!!</h1>
      <h1>docker!!!</h1>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
