(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{323:function(t,s,n){"use strict";n.r(s);var e=n(5),a=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[t._v("#")]),t._v(" 1 安装")]),t._v(" "),s("p",[t._v("Dev ：Ubuntu 16.04")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装zsh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装on my zsh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-fsSL")]),t._v(" https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])]),s("p",[t._v("重启终端后")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" ~/.bashrc\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),s("p",[t._v("重启终端后即，默认的shell就变成了zsh")]),t._v(" "),s("h2",{attrs:{id:"_2-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置"}},[t._v("#")]),t._v(" 2 配置")]),t._v(" "),s("p",[t._v("和"),s("code",[t._v("bash")]),t._v("不同，"),s("code",[t._v("zsh")]),t._v("的配置文件是"),s("code",[t._v("~/.zshrc")]),t._v("，实际上"),s("code",[t._v("oh-my-zsh")]),t._v("的默认配置也够我们使用了，但是这样其真正的强大之处并不能得到很好的体现，因此我们可以继续看看对应的插件和主题功能。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-主题"}},[t._v("#")]),t._v(" 2.1 主题")]),t._v(" "),s("p",[s("code",[t._v("oh-my-zsh")]),t._v("的主题非常丰富，可以用如下命令查看已有主题：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" .oh-my-zsh/themes\n")])])]),s("p",[t._v("个人比较喜欢简单的，因此用了"),s("code",[t._v("ys")]),t._v("主题，进入"),s("code",[t._v(".zshrc")]),t._v("配置文件进行修改")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ~/.zshrc\n")])])]),s("p",[t._v("将"),s("code",[t._v("ZSH_THEME")]),t._v("改为"),s("code",[t._v('ZSH_THEME="ys"')]),t._v("，然后"),s("code",[t._v(":wq")]),t._v("保存退出，主题就自动生效")]),t._v(" "),s("h3",{attrs:{id:"_2-2-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-插件"}},[t._v("#")]),t._v(" 2.2 插件")]),t._v(" "),s("p",[s("code",[t._v("oh-my-zsh")]),t._v("的插件生态非常丰富，下面列出来的是我个人比较常用的插件，如果你有兴趣，可以取发掘能提高自身效率的插件~")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：如果操作过程中出现"),s("code",[t._v("_arguments:448: _vim_files: function definition file not found")]),t._v("错误，请执行："),s("code",[t._v("rm -f ~/.zcompdump")]),t._v("即可")]),t._v(" "),s("p",[t._v("部分插件地址：")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/wting/autojump",target:"_blank",rel:"noopener noreferrer"}},[t._v("autojump"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("zsh-autosuggestions"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("zsh-syntax-highlighting"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"我的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我的配置"}},[t._v("#")]),t._v(" 我的配置")]),t._v(" "),s("p",[s("code",[t._v("~/.zshrc")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If you come from bash you might have to change your $PATH.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# export PATH=$HOME/bin:/usr/local/bin:$PATH")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Path to your oh-my-zsh installation.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ZSH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/tim/.oh-my-zsh"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#export GOPATH=$HOME/go")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#export GOROOT=/usr/local/go")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#export PATH=$GOROOT/bin:$PATH")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Set name of the theme to load --- if set to "random", it will')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# load a random theme each time oh-my-zsh is loaded, in which case,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# to know which specific one was loaded, run: echo $RANDOM_THEME")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ZSH_THEME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ys"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set list of themes to pick from when loading at random")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Setting this variable when ZSH_THEME=random will cause zsh to load")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a theme from this variable instead of looking in $ZSH/themes/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If set to an empty array, this variable will have no effect.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line to use case-sensitive completion.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# CASE_SENSITIVE="true"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line to use hyphen-insensitive completion.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Case-sensitive completion must be off. _ and - will be interchangeable.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# HYPHEN_INSENSITIVE="true"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment one of the following lines to change the auto-update behavior")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zstyle ':omz:update' mode disabled  # disable automatic updates")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zstyle ':omz:update' mode auto      # update automatically without asking")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zstyle ':omz:update' mode reminder  # just remind me to update when it's time")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line to change how often to auto-update (in days).")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zstyle ':omz:update' frequency 13")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line if pasting URLs and other text is messed up.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# DISABLE_MAGIC_FUNCTIONS="true"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line to disable colors in ls.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# DISABLE_LS_COLORS="true"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line to disable auto-setting terminal title.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# DISABLE_AUTO_TITLE="true"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line to enable command auto-correction.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# ENABLE_CORRECTION="true"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line to display red dots whilst waiting for completion.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can also set it to another string to have that shown instead of the default red dots.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# COMPLETION_WAITING_DOTS="true"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line if you want to disable marking untracked files")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# under VCS as dirty. This makes repository status check for large repositories")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# much, much faster.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# DISABLE_UNTRACKED_FILES_DIRTY="true"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the following line if you want to change the command execution time")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stamp shown in the history command output.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can set one of the optional three formats:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or set a custom format using the strftime function format specifications,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# see 'man strftime' for details.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# HIST_STAMPS="mm/dd/yyyy"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Would you like to use another custom folder than $ZSH/custom?")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ZSH_CUSTOM=/path/to/new-custom-folder")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Which plugins would you like to load?")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Standard plugins can be found in $ZSH/plugins/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Custom plugins may be added to $ZSH_CUSTOM/plugins/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example format: plugins=(rails git textmate ruby lighthouse)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add wisely, as too many plugins slow down shell startup.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n  autojump\n  zsh-autosuggestions\n  zsh-syntax-highlighting\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#source环境变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ZSH")]),t._v("/oh-my-zsh.sh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# User configuration")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# export MANPATH="/usr/local/man:$MANPATH"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You may need to manually set your language environment")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# export LANG=en_US.UTF-8")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Preferred editor for local and remote sessions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if [[ -n $SSH_CONNECTION ]]; then")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   export EDITOR='vim'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# else")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   export EDITOR='mvim'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fi")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Compilation flags")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# export ARCHFLAGS="-arch x86_64"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set personal aliases, overriding those provided by oh-my-zsh libs,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plugins, and themes. Aliases can be placed here, though oh-my-zsh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# users are encouraged to define aliases within the ZSH_CUSTOM folder.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For a full list of active aliases, run `alias`.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example aliases")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# alias zshconfig="mate ~/.zshrc"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# alias ohmyzsh="mate ~/.oh-my-zsh"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# key bindings")]),t._v("\nbindkey  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^[[H"')]),t._v("   beginning-of-line\nbindkey  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^[[F"')]),t._v("   end-of-line\nbindkey  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^[[3~"')]),t._v("  delete-char\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NVM_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.nvm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/bash_completion"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/bash_completion"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm bash_completion")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);