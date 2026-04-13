# iDeer Web UI

iDeer 的浏览器端前端，基于 React 构建，替代原有的 HTML 内嵌模板。

## 技术栈

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 3.4
- React Router 7

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 构建
npm run build

# 预览构建产物
npm run preview
```

开发服务器通过 Vite proxy 将 `/api` 和 `/ws` 请求转发到后端 `localhost:8090`，需要先启动后端服务（`python web_server.py`）。

## 页面结构

| 路由       | 说明                 | 状态     |
| ---------- | -------------------- | -------- |
| `/`        | 公开页 -- 触发运行和查看结果 | 已完成   |
| `/admin`   | 管理后台             | 待开发   |
| `/desktop` | 桌面端嵌入           | 待开发   |

### 公开页功能

- **Quick / Custom 两种模式** -- Quick 模式只需输入邮箱，Custom 模式支持自定义 profile、Scholar 链接和 X 账号
- **数据源选择** -- GitHub、HuggingFace、arXiv、Semantic Scholar、Research Ideas，以及按后端配置动态启用的 Twitter/X
- **投递方式切换** -- 按数据源分开发送、合并汇总报告、两者都发
- **实时进度** -- 通过 WebSocket 接收运行日志，显示进度条和状态文本
- **结果查看** -- 运行完成后展示生成的文件列表，支持 Markdown 渲染
- **Desktop 嵌入** -- 检测 URL 参数 `?embed=1`，自动切换为桌面端布局

### 通用能力

- `useMeta` -- 获取后端配置（GitHub 仓库地址、Twitter 是否启用、邮箱是否可用）
- `useWebSocket` -- 通用 WebSocket 连接管理
- `useToast` -- 全局通知（success / warning / error）
- `MarkdownRender` -- 基础 Markdown 渲染组件
- SMTP 未配置时在页面顶部显示警告提示

## 项目结构

```
src/
  App.tsx                          # 路由入口
  main.tsx                         # 应用入口
  index.css                        # Tailwind 基础样式 + 自定义 CSS
  components/                      # 跨页面共享组件
    MarkdownRender.tsx             # Markdown 渲染
    Toast.tsx                      # 通知组件
  lib/
    api.ts                         # HTTP / WebSocket 通信层
    types.ts                       # 类型定义
    constants.ts                   # 常量
    utils.ts                       # 工具函数
    hooks/
      useMeta.ts                   # 后端配置获取
      useWebSocket.ts              # WebSocket 管理
      useToast.tsx                 # 通知状态
      useDesktopEmbed.ts           # 桌面嵌入检测
      useConfig.ts                 # 配置管理（待实现）
      useHistory.ts                # 历史记录（待实现）
      useRunState.ts               # 运行状态（待实现）
  pages/
    public/
      PublicPage.tsx               # 公开页主组件
      components/
        Header.tsx                 # 页头 + 模式切换
        HeroSection.tsx            # 标题区域
        MailWarning.tsx            # SMTP 未配置警告
        SendForm.tsx               # Quick / Custom 发送表单
        SourceSelection.tsx        # 数据源选择
        SourceCard.tsx             # 数据源卡片
        DeliveryToggle.tsx         # 投递方式切换
        RunProgress.tsx            # 运行进度条
        ResultPanel.tsx            # 结果面板
        FileCard.tsx               # 文件卡片
    admin/                         # 管理后台（待开发）
    desktop/                       # 桌面端（待开发）
```
