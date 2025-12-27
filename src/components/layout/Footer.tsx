const Footer = () => {
    return (
        <footer className="bg-[#072416]" role="contentinfo" aria-label="Site footer">
            <nav aria-label="Footer navigation" className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Footer Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 xl:mb-0">
                    {/* Quick Links */}
                    <nav className="text-white space-y-3 sm:space-y-1" aria-labelledby="quick-links-heading">
                        <h2 className="text-lg sm:text-xl font-medium leading-[30px] flex gap-2.5 items-center justify-start">
                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" aria-hidden="true">
                                <path
                                    d="M21.0005 5.2728C20.9629 6.57842 20.4261 7.81989 19.5005 8.74155L16.2427 12.0012C15.7682 12.4783 15.2038 12.8565 14.5822 13.114C13.9606 13.3715 13.294 13.5031 12.6212 13.5012H12.6165C11.9321 13.5008 11.2548 13.3631 10.6246 13.0965C9.99431 12.8298 9.42388 12.4396 8.94697 11.9488C8.47007 11.458 8.09636 10.8766 7.84793 10.2389C7.59949 9.60129 7.48137 8.92031 7.50053 8.23624C7.50613 8.03733 7.59051 7.84879 7.73512 7.71209C7.87973 7.57539 8.07272 7.50174 8.27163 7.50733C8.47054 7.51293 8.65908 7.59731 8.79578 7.74192C8.93248 7.88653 9.00613 8.07952 9.00053 8.27843C8.98688 8.76211 9.07031 9.24362 9.2459 9.69451C9.4215 10.1454 9.68569 10.5565 10.0229 10.9036C10.36 11.2506 10.7634 11.5266 11.209 11.7151C11.6546 11.9036 12.1335 12.0009 12.6174 12.0012C13.0931 12.0025 13.5642 11.9094 14.0037 11.7274C14.4432 11.5454 14.8422 11.2781 15.1777 10.9409L18.4355 7.68312C19.1077 7.0025 19.4833 6.0836 19.4803 5.12703C19.4773 4.17046 19.096 3.25393 18.4196 2.57753C17.7432 1.90113 16.8266 1.51981 15.8701 1.51682C14.9135 1.51382 13.9946 1.8894 13.314 2.56155L12.2827 3.5928C12.1409 3.72752 11.9521 3.80151 11.7565 3.79901C11.561 3.7965 11.3741 3.7177 11.2358 3.5794C11.0975 3.4411 11.0187 3.25424 11.0162 3.05867C11.0137 2.8631 11.0877 2.67429 11.2224 2.53249L12.2537 1.50124C12.7294 1.0253 13.2943 0.647753 13.916 0.390166C14.5378 0.13258 15.2041 0 15.8771 0C16.5501 0 17.2164 0.13258 17.8382 0.390166C18.4599 0.647753 19.0248 1.0253 19.5005 1.50124C19.9933 1.99526 20.3805 2.5844 20.6383 3.23279C20.8962 3.88118 21.0194 4.57527 21.0005 5.2728ZM8.71928 14.4069L7.68803 15.4381C7.35168 15.7767 6.95138 16.0451 6.51039 16.2276C6.06941 16.4101 5.59654 16.5031 5.11928 16.5012C4.40332 16.5007 3.70359 16.2879 3.1085 15.8898C2.51342 15.4917 2.04968 14.9261 1.77589 14.2646C1.5021 13.603 1.43054 12.8752 1.57026 12.173C1.70997 11.4708 2.05468 10.8257 2.56085 10.3194L5.81303 7.06155C6.32527 6.54661 6.98051 6.19759 7.69365 6.05982C8.40679 5.92205 9.14488 6.0019 9.81206 6.28899C10.4792 6.57608 11.0447 7.05715 11.435 7.66972C11.8252 8.28229 12.0223 8.99805 12.0005 9.72405C11.9949 9.92297 12.0686 10.116 12.2053 10.2606C12.342 10.4052 12.5305 10.4896 12.7294 10.4951C12.9284 10.5007 13.1213 10.4271 13.2659 10.2904C13.4106 10.1537 13.4949 9.96515 13.5005 9.76624C13.5185 9.0698 13.3949 8.37696 13.137 7.72976C12.8792 7.08256 12.4925 6.4945 12.0005 6.00124C11.0398 5.04089 9.73694 4.50141 8.3785 4.50141C7.02007 4.50141 5.71724 5.04089 4.75647 6.00124L1.50054 9.25905C0.784501 9.9748 0.296706 10.8867 0.0987948 11.8796C-0.0991167 12.8725 0.00173821 13.9018 0.388614 14.8374C0.77549 15.7729 1.43102 16.5729 2.27237 17.136C3.11372 17.6991 4.10312 18.0002 5.11553 18.0012C5.78854 18.0032 6.45524 17.8716 7.07705 17.6141C7.69885 17.3567 8.26341 16.9784 8.73803 16.5012L9.76928 15.47C9.89066 15.327 9.95407 15.1438 9.94701 14.9564C9.93995 14.769 9.86294 14.591 9.73115 14.4576C9.59937 14.3241 9.42238 14.2449 9.23507 14.2355C9.04777 14.2262 8.86375 14.2873 8.71928 14.4069Z"
                                    fill="white"/>
                            </svg>
                            <span>Quick Links</span>
                        </h2>
                        <ul className="space-y-1 sm:space-y-[3px]">
                            <li><a href="#"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">Home</a>
                            </li>
                            <li><a href="#"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">About</a>
                            </li>
                            <li><a href="#"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">W3
                                Ecotech</a></li>
                            <li><a href="#"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">W3
                                B2b</a></li>
                            <li><a href="#"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">Impact</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Support */}
                    <div className="text-white space-y-3 sm:space-y-1" aria-labelledby="support-heading">
                        <h2 className="text-lg sm:text-xl font-medium leading-[30px] flex gap-2.5 items-center justify-start">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" aria-hidden="true">
                                <path
                                    d="M16.6772 2.87437C15.78 1.96817 14.7129 1.24783 13.5369 0.754599C12.361 0.261372 11.0993 0.00494469 9.82406 0H9.75C7.16414 0 4.68419 1.02723 2.85571 2.85571C1.02723 4.68419 0 7.16414 0 9.75V15C0 15.5967 0.237053 16.169 0.65901 16.591C1.08097 17.0129 1.65326 17.25 2.25 17.25H3.75C4.34674 17.25 4.91903 17.0129 5.34099 16.591C5.76295 16.169 6 15.5967 6 15V11.25C6 10.6533 5.76295 10.081 5.34099 9.65901C4.91903 9.23705 4.34674 9 3.75 9H1.53375C1.67839 7.43619 2.26578 5.946 3.22709 4.7041C4.18839 3.46219 5.48377 2.52003 6.96141 1.98803C8.43904 1.45603 10.0377 1.35624 11.57 1.70035C13.1024 2.04446 14.5048 2.81822 15.6131 3.93094C16.9677 5.29247 17.8009 7.08662 17.9672 9H15.75C15.1533 9 14.581 9.23705 14.159 9.65901C13.7371 10.081 13.5 10.6533 13.5 11.25V15C13.5 15.5967 13.7371 16.169 14.159 16.591C14.581 17.0129 15.1533 17.25 15.75 17.25H18C18 17.8467 17.7629 18.419 17.341 18.841C16.919 19.2629 16.3467 19.5 15.75 19.5H10.5C10.3011 19.5 10.1103 19.579 9.96967 19.7197C9.82902 19.8603 9.75 20.0511 9.75 20.25C9.75 20.4489 9.82902 20.6397 9.96967 20.7803C10.1103 20.921 10.3011 21 10.5 21H15.75C16.7446 21 17.6984 20.6049 18.4017 19.9016C19.1049 19.1984 19.5 18.2446 19.5 17.25V9.75C19.5049 8.4746 19.2581 7.21077 18.7737 6.03093C18.2893 4.85108 17.5768 3.77841 16.6772 2.87437ZM3.75 10.5C3.94891 10.5 4.13968 10.579 4.28033 10.7197C4.42098 10.8603 4.5 11.0511 4.5 11.25V15C4.5 15.1989 4.42098 15.3897 4.28033 15.5303C4.13968 15.671 3.94891 15.75 3.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V10.5H3.75ZM15.75 15.75C15.5511 15.75 15.3603 15.671 15.2197 15.5303C15.079 15.3897 15 15.1989 15 15V11.25C15 11.0511 15.079 10.8603 15.2197 10.7197C15.3603 10.579 15.5511 10.5 15.75 10.5H18V15.75H15.75Z"
                                    fill="white"/>
                            </svg>
                            <span>Support</span>
                        </h2>
                        <ul className="space-y-1 sm:space-y-[3px]">
                            <li><a href="#"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">Help
                                Center</a></li>
                            <li><a href="#"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">FAQS</a>
                            </li>
                            <li><a href="#"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">Contact
                                Us</a></li>
                            <li><a href="#"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">Privacy
                                & Terms</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="text-white space-y-3 sm:space-y-1">
                        <h2 className="text-lg sm:text-xl font-medium leading-[30px] flex gap-2.5 items-center justify-start" id="social-heading" >
                            <svg width="17" height="21" viewBox="0 0 17 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" aria-hidden="true">
                                <path
                                    d="M9 13.5V20.25C9 20.4489 8.92098 20.6397 8.78033 20.7803C8.63968 20.921 8.44891 21 8.25 21C8.05109 21 7.86032 20.921 7.71967 20.7803C7.57902 20.6397 7.5 20.4489 7.5 20.25V13.5C7.5 13.3011 7.57902 13.1103 7.71967 12.9697C7.86032 12.829 8.05109 12.75 8.25 12.75C8.44891 12.75 8.63968 12.829 8.78033 12.9697C8.92098 13.1103 9 13.3011 9 13.5ZM15.75 7.5H10.0603L14.0306 3.53062C14.1714 3.38989 14.2504 3.19902 14.2504 3C14.2504 2.80098 14.1714 2.61011 14.0306 2.46938C13.8899 2.32864 13.699 2.24958 13.5 2.24958C13.301 2.24958 13.1101 2.32864 12.9694 2.46938L9 6.43969V0.75C9 0.551088 8.92098 0.360322 8.78033 0.21967C8.63968 0.0790176 8.44891 0 8.25 0C8.05109 0 7.86032 0.0790176 7.71967 0.21967C7.57902 0.360322 7.5 0.551088 7.5 0.75V6.43969L3.53063 2.46938C3.38989 2.32864 3.19902 2.24958 3 2.24958C2.80098 2.24958 2.61011 2.32864 2.46938 2.46938C2.32864 2.61011 2.24958 2.80098 2.24958 3C2.24958 3.19902 2.32864 3.38989 2.46937 3.53062L6.43969 7.5H0.75C0.551088 7.5 0.360322 7.57902 0.21967 7.71967C0.0790178 7.86032 0 8.05109 0 8.25C0 8.44891 0.0790178 8.63968 0.21967 8.78033C0.360322 8.92098 0.551088 9 0.75 9H6.43969L2.46937 12.9694C2.32864 13.1101 2.24958 13.301 2.24958 13.5C2.24958 13.699 2.32864 13.8899 2.46937 14.0306C2.61011 14.1714 2.80098 14.2504 3 14.2504C3.19902 14.2504 3.38989 14.1714 3.53063 14.0306L8.25 9.31031L12.9694 14.0306C13.0391 14.1003 13.1218 14.1556 13.2128 14.1933C13.3039 14.231 13.4015 14.2504 13.5 14.2504C13.5985 14.2504 13.6961 14.231 13.7872 14.1933C13.8782 14.1556 13.9609 14.1003 14.0306 14.0306C14.1003 13.9609 14.1556 13.8782 14.1933 13.7872C14.231 13.6961 14.2504 13.5985 14.2504 13.5C14.2504 13.4015 14.231 13.3039 14.1933 13.2128C14.1556 13.1218 14.1003 13.0391 14.0306 12.9694L10.0603 9H15.75C15.9489 9 16.1397 8.92098 16.2803 8.78033C16.421 8.63968 16.5 8.44891 16.5 8.25C16.5 8.05109 16.421 7.86032 16.2803 7.71967C16.1397 7.57902 15.9489 7.5 15.75 7.5Z"
                                    fill="white"/>
                            </svg>
                            <span>Social Media</span>
                        </h2>
                        <ul className="space-y-1 sm:space-y-[3px]">
                            <li><a href="#"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   aria-label="follow us on Instagram"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">Instagram</a>
                            </li>
                            <li><a href="#"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   aria-label="follow us on Facebook"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">Facebook</a>
                            </li>
                            <li><a href="#"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   aria-label="follow us on X (Formerly Twitter)"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">X
                                (Formerly Twitter)</a></li>
                            <li><a href="#"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   aria-label="follow us on TokTok"
                                   className="text-sm sm:text-base leading-[24px] hover:text-[#CCFFE1] transition-colors">Tik
                                Tok</a></li>
                        </ul>
                    </div>

                    {/* Mission Statement */}
                    <div className="text-white">
                        <p className="text-sm sm:text-base leading-relaxed font-nunito-sans">
                            Turn your unused electronics into environmental impact through safe recycling and renewed
                            devices.
                        </p>
                    </div>
                </div>

                {/* Brand Section */}
                <div className="hidden xl:block">
                    <div className="text-[#CCFFE1] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[166.06px] font-bold text-center leading-tight sm:leading-[1.5] lg:leading-[249.1px] break-words">
                        W3 Eco friendly
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-4 sm:pt-2.5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-white/80 text-center sm:text-left border-t border-white/10">
                      <span className="text-xs sm:text-sm leading-[24px]">
                        © W3 Ecofriendly Nig Ltd 2025
                      </span>
                    <span className="text-xs sm:text-sm leading-[24px]">Developed by: Godwin</span>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;